# Earthquake Data Pipeline in Microsoft Fabric

***

## 🌍 Project Overview

This project implements a full data engineering pipeline on **Microsoft Fabric** to automate the ingestion, transformation, enrichment, and visualization of global earthquake data. The goal is to transform raw seismic event data from the USGS API into actionable insights using Fabric's Lakehouse, PySpark, Data Factory, and Power BI components.

***

## 🏗 Solution Architecture

The pipeline is designed following the **medallion architecture**, organizing data into three progressive layers:

- **Bronze Layer**: Raw ingestion of earthquake data.  
- **Silver Layer**: Transformation and cleaning into structured tables.  
- **Gold Layer**: Enrichment with derived metrics (e.g., country codes, significance classifications).  
- **Power BI Integration**: Interactive dashboards for visualization.  
- **Data Factory Automation**: End-to-end orchestration of the pipeline on a daily schedule.

***

## 🔶 Medallion Layers

### Bronze Layer (Raw Ingestion)

We developed a PySpark notebook that queries the USGS Earthquake API, pulling seismic event data based on dynamic date ranges. The raw JSON files are saved into the Fabric Lakehouse under the `bronze` layer for traceability and audit purposes.
```
# ## Bronze Notebook
# 
# New notebook

# In[1]:


import requests
import json


# In[3]:


# Construct the API URL with start and end dates provided by Data Factory, formatted for geojson output.
url = f"https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime={start_date}&endtime={end_date}"


# In[4]:


try:
    # Make the GET request to fetch data
    response = requests.get(url)

    # Check if the request was successful
    response.raise_for_status()  # Raise HTTPError for bad responses (4xx or 5xx)
    data = response.json().get('features', [])

    if not data:
        print("No data returned for the specified date range.")
    else:
        # Specify the file name (and path if needed)
        file_path = f'/lakehouse/default/Files/{start_date}_earthquake_data.json'

        # Save the JSON data
        with open(file_path, 'w') as file:
            json.dump(data, file, indent=4)
        print(f"Data successfully saved to {file_path}")
except requests.exceptions.RequestException as e:
    print(f"Error fetching data from API: {e}")
```
***

### Silver Layer (Transformation)

A second PySpark notebook loads the raw JSON, reshapes and normalizes the data, handles null values, and converts timestamps. The cleaned dataset is written as a Delta table named `earthquake_events_silver` in the Lakehouse.

```
# ## Silver Notebook
# 
# New notebook

# In[1]:


from pyspark.sql.functions import col, isnull, when
from pyspark.sql.types import TimestampType


# In[3]:


# Load the JSON data into a Spark DataFrame
df = spark.read.option("multiline", "true").json(f"Files/{start_date}_earthquake_data.json")


# In[4]:


# Reshape earthquake data
df = (
    df
    .select(
        'id',
        col('geometry.coordinates').getItem(0).alias('longitude'),
        col('geometry.coordinates').getItem(1).alias('latitude'),
        col('geometry.coordinates').getItem(2).alias('elevation'),
        col('properties.title').alias('title'),
        col('properties.place').alias('place_description'),
        col('properties.sig').alias('sig'),
        col('properties.mag').alias('mag'),
        col('properties.magType').alias('magType'),
        col('properties.time').alias('time'),
        col('properties.updated').alias('updated')
    )
)


# In[5]:


# Validate data: Check for missing or null values
df = (
    df
    .withColumn('longitude', when(isnull(col('longitude')), 0).otherwise(col('longitude')))
    .withColumn('latitude', when(isnull(col('latitude')), 0).otherwise(col('latitude')))
    .withColumn('time', when(isnull(col('time')), 0).otherwise(col('time')))
)

# Convert 'time' and 'updated' to timestamp
df = (
    df
    .withColumn('time', (col('time') / 1000).cast(TimestampType()))
    .withColumn('updated', (col('updated') / 1000).cast(TimestampType()))
)

# Append to the silver table
df.write.mode('append').saveAsTable('earthquake_events_silver')
```

***

### Gold Layer (Enrichment)

The gold notebook reads the silver table, applies reverse geocoding (via the `reverse_geocoder` library) to add country codes, and classifies events based on their significance score. The enriched dataset is saved as `earthquake_events_gold`, ready for reporting and analytics.

```
# ## Gold Notebook
# 
# New notebook

# In[1]:


# Welcome to your new notebook
# Type here in the cell editor to add code!
from pyspark.sql.functions import when, col, udf
from pyspark.sql.types import StringType
# Ensure the below library is installed on your fabric environment
import reverse_geocoder as rg


# In[2]:


df = spark.read.table("earthquake_events_silver").filter(col('time') > start_date)
     

def get_country_code(lat, lon):
    """
    Retrieve the country code for a given latitude and longitude.

    Parameters:
    lat (float or str): Latitude of the location.
    lon (float or str): Longitude of the location.

    Returns:
    str: Country code of the location, retrieved using the reverse geocoding API.

    Example:
    >>> get_country_details(48.8588443, 2.2943506)
    'FR'
    """
    coordinates = (float(lat), float(lon))
    return rg.search(coordinates)[0].get('cc')
     

# registering the udfs so they can be used on spark dataframes
get_country_code_udf = udf(get_country_code, StringType())
     

# adding country_code and city attributes
df_with_location = \
                df.\
                    withColumn("country_code", get_country_code_udf(col("latitude"), col("longitude")))
     

# adding significance classification
df_with_location_sig_class = \
                            df_with_location.\
                                withColumn('sig_class', 
                                            when(col("sig") < 100, "Low").\
                                            when((col("sig") >= 100) & (col("sig") < 500), "Moderate").\
                                            otherwise("High")
                                            )
     

# appending the data to the gold table
df_with_location_sig_class.write.mode('append').saveAsTable('earthquake_events_gold')
```

***

## 🚀 Pipeline Automation

The automation is implemented using Fabric Data Factory pipelines:

- Each notebook (bronze, silver, gold) is a pipeline activity.  
- Parameters for start and end dates are dynamically generated for daily runs.  
- Activities are linked with success dependencies, ensuring proper sequence.  
- The pipeline is scheduled to run every 24 hours, providing continuous data updates.

***

## 📊 Power BI Integration

The gold layer feeds into the Fabric semantic model, exposed via the Lakehouse SQL endpoint. A Power BI report is built directly on top of the semantic model, offering:

- Map visuals displaying event locations by country.  
- Slicers for date ranges and significance levels.  
- Multi-row cards showing total events and maximum significance.

***

## 💡 Technical Highlights

- Fully serverless, scalable architecture within Microsoft Fabric.  
- PySpark notebooks leveraging the Lakehouse Delta format.  
- Reverse geocoding integration to enhance spatial insights.  
- Automated orchestration and monitoring with Fabric Data Factory.  
- Seamless Power BI integration for stakeholder-facing dashboards.

***

## 🔍 Future Improvements

- Integrate external datasets (e.g., population density) for richer risk analysis.  
- Add anomaly detection models for early warning systems.  
- Enhance the Power BI report with predictive visualizations.

***

## ✅ Summary

This project showcases a modern, end-to-end data engineering solution using Microsoft Fabric, demonstrating how to transform raw API data into automated, actionable insights with minimal manual intervention. It highlights best practices in medallion architecture, pipeline orchestration, and integrated visualization — paving the way for more advanced data science and analytics initiatives.

