import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  FolderGit2,
  ExternalLink,
  ArrowUpRight,
} from 'lucide-react';
import { TiltCard } from './TiltCard';
import {
  GitHubLogo,
  PythonLogo,
  MySQLLogo,
  PowerBILogo,
  SQLiteLogo,
} from './Logos';
import { portfolioData } from '../data/portfolioData';

export const ProjectsSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'ALL' | 'BI' | 'SQL' | 'Python' | 'Fintech'>('ALL');

  const filteredProjects = portfolioData.projects.filter((proj) => {
    if (activeFilter === 'ALL') return true;
    return proj.category === activeFilter;
  });

  const getToolLogo = (tool: string) => {
    const lower = tool.toLowerCase();
    if (lower.includes('python') || lower.includes('pandas') || lower.includes('numpy')) {
      return <PythonLogo className="w-3.5 h-3.5" />;
    }
    if (lower.includes('mysql')) {
      return <MySQLLogo className="w-3.5 h-3.5" />;
    }
    if (lower.includes('power bi') || lower.includes('dax') || lower.includes('power query')) {
      return <PowerBILogo className="w-3.5 h-3.5" />;
    }
    if (lower.includes('sqlite')) {
      return <SQLiteLogo className="w-3.5 h-3.5" />;
    }
    return null;
  };

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-[var(--border)]">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div className="space-y-3 max-w-2xl">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase text-[var(--accent)] bg-[var(--accent-soft)] border border-[var(--accent-soft-border)]">
            Featured Work
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif text-[var(--ink)] tracking-tight">
            Production-Grade Projects
          </h2>
          <p className="text-sm sm:text-base text-[var(--ink-light)] leading-relaxed">
            Exploratory data analysis, SQL inventory audits, dimensional star-schema modeling, and customer churn prediction pipelines.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center gap-1.5 p-1 bg-[var(--bg-card)] border border-[var(--border)] rounded-xl self-start md:self-auto overflow-x-auto shadow-2xs">
          {(
            [
              { label: 'All Projects', value: 'ALL' },
              { label: 'Power BI', value: 'BI' },
              { label: 'Advanced SQL', value: 'SQL' },
              { label: 'Python & EDA', value: 'Python' },
              { label: 'Fintech', value: 'Fintech' },
            ] as const
          ).map((tab) => (
            <button
              key={tab.value}
              onClick={() => setActiveFilter(tab.value)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                activeFilter === tab.value
                  ? 'bg-[var(--accent)] text-white shadow-xs'
                  : 'text-[var(--ink-light)] hover:text-[var(--ink)]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredProjects.map((project) => (
          <TiltCard
            key={project.id}
            maxTilt={5}
            className="flex flex-col justify-between p-6 sm:p-7 rounded-2xl bg-[var(--bg-card)] border border-[var(--border)] hover:border-[var(--border-hover)] hover:shadow-lg transition-all group"
          >
            <div className="space-y-4">
              {/* Card Top: Category Badge & GitHub Button */}
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded-md bg-[var(--accent-soft)] text-[var(--accent)] border border-[var(--accent-soft-border)]">
                  {project.category}
                </span>

                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="View GitHub Repository"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[var(--bg-alt)] hover:bg-[var(--bg-card)] border border-[var(--border)] text-xs font-semibold text-[var(--ink)] hover:text-[var(--accent)] transition-all shadow-2xs group/btn"
                >
                  <GitHubLogo className="w-3.5 h-3.5" />
                  <span>GitHub</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[var(--muted)] group-hover/btn:text-[var(--accent)] transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                </a>
              </div>

              {/* Title */}
              <h3 className="text-base sm:text-lg font-semibold text-[var(--ink)] group-hover:text-[var(--accent)] transition-colors tracking-tight">
                {project.title}
              </h3>

              {/* Tools list with real icons */}
              <div className="flex flex-wrap gap-1.5 pt-0.5">
                {project.tools.map((tool) => (
                  <span
                    key={tool}
                    className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium rounded-lg bg-[var(--bg-alt)] border border-[var(--border)] text-[var(--ink-light)]"
                  >
                    {getToolLogo(tool)}
                    <span>{tool}</span>
                  </span>
                ))}
              </div>

              {/* Description */}
              <p className="text-xs sm:text-sm text-[var(--ink-light)] leading-relaxed pt-1">
                {project.description}
              </p>

              {/* Highlight Metrics Cards */}
              {project.metrics && (
                <div className="pt-2 grid grid-cols-3 gap-2.5">
                  {project.metrics.map((m, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-xl bg-[var(--bg-alt)] border border-[var(--border)] text-center shadow-2xs"
                    >
                      <div className="text-[10px] font-mono text-[var(--muted)] uppercase tracking-wider truncate">
                        {m.label}
                      </div>
                      <div className="text-xs sm:text-sm font-extrabold text-[var(--accent)] mt-1">
                        {m.value}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Bottom Actions */}
            <div className="pt-6 mt-6 border-t border-[var(--border)] flex items-center justify-between">
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-semibold text-[var(--accent)] hover:underline inline-flex items-center gap-1"
              >
                <span>Inspect Source Code & Queries</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <span className="text-[11px] font-mono text-[var(--muted)]">
                Production Artifact
              </span>
            </div>
          </TiltCard>
        ))}
      </div>
    </section>
  );
};
