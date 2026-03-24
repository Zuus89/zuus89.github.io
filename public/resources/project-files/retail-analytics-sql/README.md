# 🛍️ Retail Analytics with SQL

This project is a complete SQL-based commercial analysis designed to simulate a real-world retail scenario using structured data from a company that sells ski and water sports equipment.

The goal is to demonstrate advanced SQL skills through business-driven insights and prepare the dataset for BI tools like Power BI.

---

## 📦 Dataset Overview

The dataset consists of three main tables:

| Table     | Description                                |
|-----------|--------------------------------------------|
| `productos` | Product catalog with pricing, brand, category and inventory. |
| `clientes`  | Customer records including location and registration details. |
| `ventas`    | Sales transactions over the past 3 years. |

All data is synthetic but structured to reflect realistic business operations.

---

## 📁 Repository Structure

```
retail-analytics-sql/
│
├── data/                         # Raw CSV files
│   ├── productos_ejemplo.csv
│   ├── clientes_ejemplo.csv
│   └── ventas_3anios_2000filas.csv
│
├── sql/                          # SQL logic and challenges
│   ├── schema.sql                # CREATE TABLE scripts
│   ├── data_import_notes.md     # How to load CSV into PostgreSQL
│   └── commercial_queries.sql   # 25 business-driven SQL challenges
│
├── pbix/                         # Power BI reports (optional)
│   └── retail_analysis.pbix
│
├── images/                       # Visual assets / dashboard previews
│
├── README.md                     # Project documentation
└── LICENSE                       # MIT or similar license
```


---

## 📊 Commercial SQL Challenges

The file [`commercial_queries.sql`](sql/commercial_queries.sql) includes **25 business questions** grouped by difficulty and techniques:

- 📈 Basic: `JOIN`, `GROUP BY`, `ORDER BY`, `COUNT`
- 🧠 Intermediate: Aggregations, subqueries, filtering
- 🧮 Advanced: CTEs, window functions, cohort analysis, ranking, moving averages

Some examples:

- Top-selling products per year  
- Customer segmentation by total spend  
- Running totals and revenue per month  
- Cohorts by registration and first purchase  
- Repeat purchase rate  
- Products never sold  

---

## 🛠️ Tech Stack

- PostgreSQL
- DBeaver (for import and testing)
- VS Code + SQLTools Extension
- Git + GitHub
- (Optional) Power BI for dashboarding

---

## 🧪 Getting Started

### 1. Import the schema and data
- Use `schema.sql` to create the database structure
- Load CSVs from `/data` into your PostgreSQL using DBeaver or psql
- Reference `data_import_notes.md` for step-by-step instructions

### 2. Run SQL analyses
- Open `commercial_queries.sql` in VS Code or DBeaver
- Execute queries to explore and answer business questions

### 3. (Optional) Open the Power BI report
- Explore the pre-built dashboard in `/pbix/retail_analysis.pbix`

---

## 👤 Author

**Cristóbal Elton**  
Commercial Manager turned Data Analyst | SQL | Power BI | Python  
[LinkedIn](https://www.linkedin.com/in/cristobalelton/)  

---

## 📜 License

This project is licensed under the MIT License. You are free to use, share, and adapt it with attribution.

