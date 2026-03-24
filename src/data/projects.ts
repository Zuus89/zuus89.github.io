export type MediaType = 'image' | 'video';
export type LinkType = 'internal' | 'external';

export interface ProjectTab {
  id: string;
  label: string;
  type: 'markdown' | 'sql';
  contentPath?: string;
}

export interface Project {
  slug: string;
  title: string;
  description: string;
  tags: string[];
  mediaType: MediaType;
  mediaSrc: string;
  mediaAlt?: string;
  linkType: LinkType;
  href: string;
  powerBiUrl?: string;
  tabs?: ProjectTab[];
  featured?: boolean;
}

export const projects: Project[] = [
  {
    slug: 'mental-health-dashboard',
    title: 'Mental Health Power BI Dashboard',
    description: 'Full ETL pipeline in Python and snowflake-style data model for Power BI, analyzing the global prevalence and burden of mental health disorders. Includes tooltips, bookmarks, slicers, and rich storytelling visuals.',
    tags: ['Power BI', 'Python', 'ETL'],
    mediaType: 'video',
    mediaSrc: '/media/videos/mental_health.mp4',
    linkType: 'external',
    href: 'https://github.com/Zuus89/mental_health_pbi',
    powerBiUrl: 'https://app.powerbi.com/view?r=eyJrIjoiYTc0ZTA3YjQtYzM1Yi00OGVhLTgxMDItYTNkMTk5OWRlZGE2IiwidCI6IjZkNWE5NTY5LWIwOWItNDAzYS05ZTJlLThlZWI1MjNlZjQzNCIsImMiOjR9',
    featured: true,
  },
  {
    slug: 'earthquake-azure-data-pipeline',
    title: 'Earthquake Azure Data Pipeline',
    description: 'An end-to-end automated data pipeline in Microsoft Fabric transforming earthquake data from the USGS API into actionable insights using PySpark, Data Factory, and Power BI.',
    tags: ['Microsoft Fabric', 'PySpark', 'Data Factory', 'Power BI', 'Medallion Architecture'],
    mediaType: 'image',
    mediaSrc: '/media/covers/earthquake_cover.png',
    mediaAlt: 'Earthquake Azure Data Pipeline Cover',
    linkType: 'internal',
    href: '/projects/earthquake-azure-data-pipeline',
    tabs: [
      { id: 'readme', label: 'README', type: 'markdown', contentPath: 'resources/project-files/earthquake-azure/README.md' },
    ],
  },
  {
    slug: 'sporting-goods-pipeline',
    title: 'Sporting Goods Data Pipeline & Power BI',
    description: 'A robust end-to-end data pipeline integrating Bsale, Shopify, and marketplace sales into a unified model for advanced sales and inventory analytics in Power BI.',
    tags: ['Python', 'API Integration', 'ETL Pipeline', 'Shopify GraphQL', 'Power BI'],
    mediaType: 'video',
    mediaSrc: '/media/videos/sports_retail.mp4',
    linkType: 'external',
    href: 'https://github.com/Zuus89/skinautica-bsale-powerbi',
    featured: false,
  },
  {
    slug: 'retail-analytics-sql',
    title: 'Retail Analytics SQL',
    description: 'A structured SQL portfolio focused on solving business problems through sales analysis, segmentation, KPIs and optimization challenges using retail datasets. Includes a README and interactive tabs to browse both documentation and SQL code.',
    tags: ['SQL', 'Retail Analytics'],
    mediaType: 'image',
    mediaSrc: '/media/covers/retail_sql_cover.jpg',
    mediaAlt: 'Retail SQL Project Cover',
    linkType: 'internal',
    href: '/projects/retail-analytics-sql',
    tabs: [
      { id: 'readme', label: 'README', type: 'markdown', contentPath: 'resources/project-files/retail-analytics-sql/README.md' },
      { id: 'sql', label: 'SQL Code', type: 'sql', contentPath: 'resources/project-files/retail-analytics-sql/commercial_queries.sql' },
    ],
  },
  {
    slug: 'spotify-dashboard',
    title: 'Spotify 2023 Power BI Dashboard',
    description: 'Interactive dashboard built with Power BI to explore the most streamed songs in 2023. Insights into artist popularity, genres, and musical features.',
    tags: ['Power BI', 'DAX', 'Python', 'Data Visualization'],
    mediaType: 'image',
    mediaSrc: '/media/covers/spotify_cover.jpg',
    mediaAlt: 'Spotify Dashboard Screenshot',
    linkType: 'external',
    href: 'https://github.com/Zuus89/spotify-2023-powerbi-dashboard',
    powerBiUrl: 'https://app.powerbi.com/view?r=eyJrIjoiNDEzMDIwNzktZTk1ZC00MTc5LTk0OGUtYjc4ZGM4ZDFjMDUyIiwidCI6IjZkNWE5NTY5LWIwOWItNDAzYS05ZTJlLThlZWI1MjNlZjQzNCIsImMiOjR9',
    featured: false,
  },
  {
    slug: 'lego-data-analysis',
    title: 'LEGO Data Analysis',
    description: 'SQL-based data cleaning, database optimization, and EDA using a LEGO dataset in PostgreSQL.',
    tags: ['SQL', 'PostgreSQL', 'Python', 'Data Cleaning'],
    mediaType: 'image',
    mediaSrc: '/media/covers/lego_cover.jpg',
    mediaAlt: 'LEGO Project Screenshot',
    linkType: 'external',
    href: 'https://github.com/Zuus89/lego-data-analysis',
    featured: false,
  },
  {
    slug: 'london-underground',
    title: 'London Underground Analysis',
    description: 'SQL-based data analysis using Transport for London (TfL) journey data. Includes public transport usage trends and modal comparisons across the city.',
    tags: ['SQL', 'TfL Data', 'Analysis'],
    mediaType: 'image',
    mediaSrc: '/media/covers/london_cover.jpg',
    mediaAlt: 'London Underground Project Cover',
    linkType: 'external',
    href: 'https://github.com/Zuus89/lndon_underground',
    featured: false,
  },
  {
    slug: 'hr-analytics-dashboard',
    title: 'HR Analytics Power BI Dashboard',
    description: 'Interactive dashboard using HR data to analyze turnover rates, salary distribution, and gender gaps. Built with Power BI and DAX for insightful business decisions.',
    tags: ['Power BI', 'DAX', 'Data Analysis'],
    mediaType: 'image',
    mediaSrc: '/media/covers/overview_page.png',
    mediaAlt: 'HR Analytics Dashboard',
    linkType: 'external',
    href: 'https://github.com/Zuus89/HR-Analytics-PowerBI',
    powerBiUrl: 'https://app.powerbi.com/view?r=eyJrIjoiMTRmYzg5NzktNjBmYy00MjA0LTg4OWItY2NkNTFjYTc4Y2IxIiwidCI6IjZkNWE5NTY5LWIwOWItNDAzYS05ZTJlLThlZWI1MjNlZjQzNCIsImMiOjR9',
    featured: false,
  },
];

export const featuredProject = projects.find(p => p.featured)!;
export const gridProjects = projects.filter(p => !p.featured).slice(0, 3);
export const allProjects = projects;
