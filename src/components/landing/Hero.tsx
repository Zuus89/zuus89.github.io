'use client';

import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';

const DataCube = dynamic(() => import('@/components/three/DataCube'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-16 h-16 border-2 border-accent/30 border-t-accent rounded-full animate-spin" />
    </div>
  ),
});

export default function Hero() {
  return (
    <section className="relative z-[1] min-h-screen flex items-center pt-[4.5rem]">
      {/* 3D Cube — centered, large, behind text */}
      <div className="absolute inset-0 top-[4.5rem] flex items-center justify-center">
        <div className="w-[700px] h-[700px] lg:w-[800px] lg:h-[800px]">
          <DataCube />
        </div>
      </div>

      {/* Floating code snippets */}
      <div className="absolute top-[15%] right-[8%] font-mono text-[0.65rem] text-accent/25 whitespace-pre pointer-events-none animate-[float-code_6s_ease-in-out_infinite] hidden lg:block">
{`SELECT * FROM
fact_sales.cost_sever...

JOIN dim_customer`}
      </div>
      <div className="absolute bottom-[12%] right-[12%] font-mono text-[0.65rem] text-accent/25 whitespace-pre pointer-events-none animate-[float-code_6s_ease-in-out_infinite_-2s] hidden lg:block">
{`WHERE
  date_id >= '2024-01'
  AND region = 'EMEA'`}
      </div>
      <div className="absolute top-[35%] left-[5%] font-mono text-[0.65rem] text-accent/25 whitespace-pre pointer-events-none animate-[float-code_6s_ease-in-out_infinite_-4s] hidden lg:block">
{`import pandas as pd
df = pd.read_sql(
  query, conn
)`}
      </div>

      {/* Text content — overlapping the cube */}
      <div className="relative z-10 mx-auto max-w-[1400px] w-full px-6 lg:px-12">
        <motion.div
          className="max-w-[600px]"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="font-sans text-[clamp(2.8rem,5vw,4.2rem)] font-bold leading-[1.1] tracking-[-0.03em] mb-1">
            Cristóbal Elton
          </h1>

          <h2 className="font-sans text-[clamp(1.1rem,2vw,1.5rem)] font-medium text-muted leading-tight tracking-[-0.01em] mb-6">
            Data Analytics &amp; Engineering Professional
          </h2>

          <p className="font-mono text-[0.85rem] leading-[1.7] text-muted-dim max-w-[460px] mb-8">
            Data Analytics &amp; Engineering professional building scalable
            pipelines, actionable insights, and robust SQL architectures for
            enterprise data platforms.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="/projects"
              className="inline-block font-mono text-[0.82rem] font-medium bg-accent text-background border border-accent px-7 py-3 rounded-sm tracking-[0.04em] hover:bg-transparent hover:text-accent hover:shadow-[0_0_25px_rgba(0,220,255,0.25)] transition-all duration-normal"
            >
              View Projects
            </a>
            <a
              href="mailto:celton.aret@gmail.com"
              className="inline-block font-mono text-[0.82rem] font-medium text-primary bg-transparent border border-glass-border px-7 py-3 rounded-sm tracking-[0.04em] hover:border-accent hover:text-accent transition-all duration-normal"
            >
              Book A Consultation
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
