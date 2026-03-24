import PageWrapper from '@/components/layout/PageWrapper';
import Link from 'next/link';

export default function HomePage() {
  return (
    <PageWrapper showIntro={true}>
      {/* Featured Project */}
      <article className="post featured">
        <header className="major">
          <h2>
            <a href="https://github.com/Zuus89/mental_health_pbi" target="_blank" rel="noopener">
              Mental Health<br />
              Power BI Dashboard
            </a>
          </h2>
          <p>
            Full ETL pipeline in Python and snowflake-style data model for Power BI, analyzing the
            global prevalence and burden of mental health disorders. Includes tooltips, bookmarks,
            slicers, and rich storytelling visuals.
          </p>
        </header>
        <a
          href="https://app.powerbi.com/view?r=eyJrIjoiYTc0ZTA3YjQtYzM1Yi00OGVhLTgxMDItYTNkMTk5OWRlZGE2IiwidCI6IjZkNWE5NTY5LWIwOWItNDAzYS05ZTJlLThlZWI1MjNlZjQzNCIsImMiOjR9"
          target="_blank"
          rel="noopener"
        >
          <video
            width="100%"
            height="auto"
            muted
            autoPlay
            loop
            preload="metadata"
            style={{
              borderRadius: '10px',
              boxShadow: '0px 0px 12px rgba(0,0,0,0.2)',
            }}
          >
            <source src="/media/videos/mental_health.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </a>
        <div className="tech-tags">
          <span className="tech-tag">Power BI</span>
          <span className="tech-tag">Python</span>
          <span className="tech-tag">ETL</span>
        </div>
        <ul className="actions special">
          <li>
            <a
              href="https://github.com/Zuus89/mental_health_pbi"
              className="button large"
              target="_blank"
              rel="noopener"
            >
              View Project
            </a>
          </li>
        </ul>
      </article>

      {/* Other Projects */}
      <section className="posts">
        {/* Earthquake Azure Data Pipeline */}
        <article>
          <header>
            <h2>
              <Link href="/earthquake-azure-data-pipeline/">
                Earthquake Azure Data Pipeline
              </Link>
            </h2>
          </header>
          <Link href="/earthquake-azure-data-pipeline/" className="image fit">
            <img
              src="/media/covers/earthquake_cover.png"
              alt="Earthquake Azure Data Pipeline Cover"
              loading="lazy"
            />
          </Link>
          <div className="tech-tags">
            <span className="tech-tag">Microsoft Fabric</span>
            <span className="tech-tag">PySpark</span>
            <span className="tech-tag">Data Factory</span>
            <span className="tech-tag">Power BI</span>
            <span className="tech-tag">Medallion Architecture</span>
          </div>
          <p style={{ textAlign: 'center' }}>
            An end-to-end automated data pipeline in Microsoft Fabric transforming earthquake data
            from the USGS API into actionable insights using PySpark, Data Factory, and Power BI.
          </p>
          <ul className="actions special">
            <li>
              <Link href="/earthquake-azure-data-pipeline/" className="button">
                View Project
              </Link>
            </li>
          </ul>
        </article>

        {/* Sporting Goods Data Pipeline */}
        <article>
          <header>
            <h2>
              <a
                href="https://github.com/Zuus89/skinautica-bsale-powerbi"
                target="_blank"
                rel="noopener"
              >
                Sporting Goods Data Pipeline &amp; Power BI
              </a>
            </h2>
          </header>
          <video
            width="100%"
            height="auto"
            muted
            autoPlay
            loop
            preload="metadata"
            style={{
              borderRadius: '10px',
              boxShadow: '0px 0px 12px rgba(0,0,0,0.2)',
            }}
          >
            <source src="/media/videos/sports_retail.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="tech-tags">
            <span className="tech-tag">Python</span>
            <span className="tech-tag">API Integration</span>
            <span className="tech-tag">ETL Pipeline</span>
            <span className="tech-tag">Shopify GraphQL</span>
            <span className="tech-tag">Power BI</span>
          </div>
          <p style={{ textAlign: 'center' }}>
            A robust end-to-end data pipeline integrating Bsale, Shopify, and marketplace sales into
            a unified model for advanced sales and inventory analytics in Power BI.
          </p>
          <ul className="actions special">
            <li>
              <a
                href="https://github.com/Zuus89/skinautica-bsale-powerbi"
                className="button"
                target="_blank"
                rel="noopener"
              >
                View Project
              </a>
            </li>
          </ul>
        </article>

        {/* Retail Analytics SQL */}
        <article>
          <header>
            <h2>
              <a
                href="https://github.com/Zuus89/retail-analytics-sql"
                target="_blank"
                rel="noopener"
              >
                Retail Analytics SQL
              </a>
            </h2>
          </header>
          <a
            href="https://github.com/Zuus89/retail-analytics-sql"
            target="_blank"
            rel="noopener"
          >
            <img
              src="/media/covers/retail_sql_cover.jpg"
              alt="Retail SQL Project Cover"
              loading="lazy"
              style={{
                width: '100%',
                borderRadius: '10px',
                boxShadow: '0 0 12px rgba(0,0,0,0.2)',
              }}
            />
          </a>
          <div className="tech-tags">
            <span className="tech-tag">SQL</span>
            <span className="tech-tag">Retail Analytics</span>
          </div>
          <p style={{ textAlign: 'center' }}>
            A structured SQL portfolio focused on solving business problems through sales analysis,
            segmentation, KPIs and optimization challenges using retail datasets. Includes a README
            and interactive tabs to browse both documentation and SQL code.
          </p>
          <ul className="actions special">
            <li>
              <a
                href="https://github.com/Zuus89/retail-analytics-sql"
                className="button"
                target="_blank"
                rel="noopener"
              >
                View Project
              </a>
            </li>
          </ul>
        </article>
      </section>

      {/* View All Projects */}
      <div style={{ textAlign: 'center', margin: '2em 0' }}>
        <Link href="/projects/" className="button large">
          View All Projects
        </Link>
      </div>
    </PageWrapper>
  );
}
