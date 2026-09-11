import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  ChevronRight,
  Send,
  Sparkles,
  FileSpreadsheet,
  Database,
  BarChart3,
  Bot,
} from 'lucide-react';
import { GitHubLogo, LinkedInLogo } from './Logos';

export const Hero: React.FC = () => {
  const words = ['Business', 'Reporting', 'Decisions', 'Operations', 'Analytics'];
  const [currentWordIdx, setCurrentWordIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentWordIdx((prev) => (prev + 1) % words.length);
    }, 2500);
    return () => clearInterval(timer);
  }, [words.length]);

  const marqueeTools = [
    'Advanced Excel & VBA',
    'Microsoft Power BI (DAX)',
    'MySQL & PostgreSQL',
    'Python (Pandas, NumPy)',
    'Star Schema Data Modeling',
    'Exploratory Data Analysis (EDA)',
    'Power Query & ETL Automation',
    'Generative AI & Prompt Engineering',
    'Customer Churn & CLTV Analysis',
    'Advanced SQL CTEs & Window Functions',
    'MIS Executive Reporting',
  ];

  const metrics = [
    {
      value: '3,900+',
      label: 'Retail Transactions Analyzed',
      detail: 'Python & MySQL consumer behavior EDA',
    },
    {
      value: '5,000+',
      label: 'Records Audited in SQL',
      detail: '$184K revenue distortion resolved',
    },
    {
      value: '15+',
      label: 'Custom DAX Measures',
      detail: 'Star-schema digital payments dashboard',
    },
  ];

  return (
    <section className="relative pt-32 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
      {/* Background ambient radial glow */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[var(--accent)]/5 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-4xl mx-auto text-center space-y-7">
        {/* Availability Badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-medium bg-[var(--bg-card)] border border-[var(--border)] text-[var(--ink-light)] shadow-xs"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="font-semibold text-[var(--ink)]">Available for new opportunities</span>
          <span className="text-[var(--muted)] hidden sm:inline">· Data Analyst / BI</span>
        </motion.div>

        {/* Dynamic Display Headline with Rotating Word in Serif */}
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-6xl font-serif text-[var(--ink)] tracking-tight leading-[1.18]"
        >
          Transform your{' '}
          <span className="inline-block relative min-w-[180px] sm:min-w-[220px] text-left sm:text-center text-[var(--accent)] underline decoration-[var(--accent)]/30 underline-offset-8 italic font-serif">
            <AnimatePresence mode="wait">
              <motion.span
                key={words[currentWordIdx]}
                initial={{ opacity: 0, y: 12, filter: 'blur(4px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                exit={{ opacity: 0, y: -12, filter: 'blur(4px)' }}
                transition={{ duration: 0.35 }}
                className="inline-block font-serif"
              >
                {words[currentWordIdx]}
              </motion.span>
            </AnimatePresence>
          </span>
          <br />
          with Data & AI.
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-base sm:text-lg text-[var(--ink-light)] max-w-2xl mx-auto leading-relaxed"
        >
          Custom data pipelines, transaction audits, and interactive Power BI dashboards for businesses that refuse to fall behind. Turning raw spreadsheets into commercial clarity.
        </motion.p>

        {/* Primary Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-3 pt-1"
        >
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-white font-semibold text-sm shadow-sm transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            <span>Explore Projects</span>
            <ChevronRight className="w-4 h-4" />
          </a>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[var(--bg-card)] border border-[var(--border)] hover:border-[var(--border-hover)] text-[var(--ink)] font-semibold text-sm transition-all hover:bg-[var(--bg-alt)]"
          >
            <Send className="w-4 h-4 text-[var(--accent)]" />
            <span>Direct Inquiry</span>
          </a>
        </motion.div>
      </div>

      {/* Infinite Marquee Strip */}
      <div className="mt-16 pt-8 border-t border-[var(--border)] overflow-hidden relative">
        <div className="text-center text-[11px] font-semibold text-[var(--muted)] uppercase tracking-wider mb-4">
          Core Competencies & Technology Stack
        </div>
        <div className="relative w-full overflow-hidden mask-gradient">
          <div className="animate-marquee flex items-center gap-8 py-2">
            {[...marqueeTools, ...marqueeTools].map((tool, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-[var(--border)] bg-[var(--bg-card)] text-xs font-semibold text-[var(--ink)] whitespace-nowrap shadow-2xs"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]" />
                <span>{tool}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 3 Metric Cards */}
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-5 max-w-4xl mx-auto">
        {metrics.map((m, idx) => (
          <motion.div
            key={m.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
            className="p-6 rounded-2xl border border-[var(--border)] bg-[var(--bg-card)] hover:border-[var(--border-hover)] transition-all text-center sm:text-left"
          >
            <div className="text-3xl sm:text-4xl font-extrabold text-[var(--accent)] tracking-tight">
              {m.value}
            </div>
            <div className="text-sm font-bold text-[var(--ink)] mt-1.5">
              {m.label}
            </div>
            <div className="text-xs text-[var(--muted)] mt-0.5">
              {m.detail}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
