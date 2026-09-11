import React from 'react';
import { motion } from 'motion/react';
import {
  Briefcase,
  ExternalLink,
  CheckCircle2,
} from 'lucide-react';
import { TiltCard } from './TiltCard';
import { ForageLogo, GitHubLogo, PythonLogo } from './Logos';
import { portfolioData } from '../data/portfolioData';

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-[var(--border)]">
      <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase text-[var(--accent)] bg-[var(--accent-soft)] border border-[var(--accent-soft-border)]">
          Practical Simulation
        </div>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif text-[var(--ink)] tracking-tight">
          Work Experience
        </h2>
        <p className="text-sm sm:text-base text-[var(--ink-light)] leading-relaxed">
          Practical credit risk analytics, delinquency modeling, and executive slide deck recommendations delivered for enterprise simulations.
        </p>
      </div>

      <div className="space-y-8 max-w-4xl mx-auto">
        {portfolioData.experience.map((exp) => (
          <TiltCard
            key={exp.id}
            maxTilt={4}
            className="p-6 sm:p-7 rounded-2xl bg-[var(--bg-card)] border border-[var(--border)] shadow-md hover:border-[var(--border-hover)] transition-all"
          >
            <div className="space-y-5">
              {/* Header: Logos, Title, Company */}
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-5 border-b border-[var(--border)]">
                <div className="space-y-2">
                  <div className="flex items-center gap-2.5">
                    <div className="p-1.5 rounded-xl bg-[var(--bg-alt)] border border-[var(--border)] flex items-center justify-center shadow-2xs">
                      <ForageLogo className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-mono font-medium px-2.5 py-1 rounded-md bg-[var(--accent-soft)] text-[var(--accent)] border border-[var(--accent-soft-border)]">
                      {exp.organization}
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg md:text-xl font-semibold text-[var(--ink)] tracking-tight leading-snug">
                    {exp.role}
                  </h3>
                </div>

                {/* Repository Link */}
                <a
                  href={exp.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[var(--bg-alt)] hover:bg-[var(--bg-card)] border border-[var(--border)] text-xs font-semibold text-[var(--ink)] hover:text-[var(--accent)] transition-all shadow-2xs group shrink-0"
                >
                  <GitHubLogo className="w-4 h-4 text-[var(--ink-light)] group-hover:text-[var(--accent)]" />
                  <span>View Tata Job Simulation Repo</span>
                  <ExternalLink className="w-3.5 h-3.5 text-[var(--muted)] group-hover:translate-x-0.5 transition-transform" />
                </a>
              </div>

              {/* Tools tags */}
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs font-mono text-[var(--muted)] mr-1">
                  Tools:
                </span>
                {exp.tools.map((tool) => (
                  <span
                    key={tool}
                    className="px-3 py-1 text-xs font-medium rounded-lg bg-[var(--bg-alt)] border border-[var(--border)] text-[var(--ink-light)] flex items-center gap-1.5"
                  >
                    {tool === 'Python' && <PythonLogo className="w-3.5 h-3.5" />}
                    <span>{tool}</span>
                  </span>
                ))}
              </div>

              {/* Points / Description */}
              <div className="space-y-4 pt-1">
                <div className="text-xs font-mono uppercase tracking-wider text-[var(--muted)] font-semibold">
                  Deliverables & Commercial Methodology
                </div>
                <div className="grid grid-cols-1 gap-3">
                  {exp.points.map((pt, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-xl bg-[var(--bg-alt)] border border-[var(--border)] flex items-start gap-3.5"
                    >
                      <div className="p-1 rounded-md bg-[var(--accent-soft)] text-[var(--accent)] shrink-0 mt-0.5">
                        <CheckCircle2 className="w-4 h-4" />
                      </div>
                      <p className="text-xs sm:text-sm text-[var(--ink-light)] leading-relaxed">
                        {pt}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </TiltCard>
        ))}
      </div>
    </section>
  );
};
