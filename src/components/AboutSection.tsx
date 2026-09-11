import React from 'react';
import { motion } from 'motion/react';
import {
  ExternalLink,
  Mail,
  GraduationCap,
} from 'lucide-react';
import { GitHubLogo, LinkedInLogo } from './Logos';
import { portfolioData } from '../data/portfolioData';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-12 sm:py-14 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-[var(--border)]">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-10">
          {/* Profile Photo matching the reference with proper chest/clothes view & slightly brightened */}
          <div className="shrink-0">
            <div className="relative w-36 h-40 sm:w-40 sm:h-44 md:w-44 md:h-48 rounded-2xl overflow-hidden border border-[var(--border)] shadow-sm bg-[var(--bg-card)]">
              <img
                src="/profile.png"
                alt="Jayesh Suthar"
                className="w-full h-full object-cover object-center filter brightness-[1.04] contrast-[1.02] transition-transform duration-500 hover:scale-102"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  const target = e.currentTarget;
                  if (target.src !== 'https://raw.githubusercontent.com/jayesh-analytics/jayesh-analytics.github.io/main/images/profile.png') {
                    target.src = 'https://raw.githubusercontent.com/jayesh-analytics/jayesh-analytics.github.io/main/images/profile.png';
                  }
                }}
              />
            </div>
          </div>

          {/* Right Content Column */}
          <div className="flex-1 text-center md:text-left space-y-3">
            {/* Tracked Eyebrow */}
            <div className="text-[11px] font-semibold tracking-widest uppercase text-[#c25e36] dark:text-[#ea7a52]">
              WHO BUILDS THIS
            </div>

            {/* Name */}
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-normal tracking-tight text-[var(--ink)]">
              Jayesh Suthar
            </h2>

            {/* Subtitle */}
            <p className="text-xs sm:text-sm text-[var(--ink-light)] font-normal">
              Data Analyst & BI Specialist · Bachelor's of Science in Chemistry (MLSU)
            </p>

            {/* Short concise description matching reference style */}
            <div className="space-y-2.5 text-xs sm:text-sm text-[var(--ink-light)] leading-relaxed pt-0.5">
              <p>
                I turn complex, unstructured transactional data into clean dimensional models, automated pipelines, and interactive executive dashboards that drive commercial decisions. Strategy through deployment — no handoff to someone else.
              </p>
              <p>
                I share my SQL queries, exploratory data analysis, and Power BI models publicly on GitHub. You can judge the methodology and code before you ever reach out.
              </p>
            </div>

            {/* Pill Action Buttons matching reference */}
            <div className="pt-1.5 flex flex-wrap items-center justify-center md:justify-start gap-2.5">
              <a
                href="#contact"
                className="px-4 py-2 rounded-full border border-[var(--border)] bg-[var(--bg-card)] hover:border-[var(--border-hover)] hover:bg-[var(--bg-alt)] text-xs font-medium text-[var(--ink)] transition-all shadow-2xs cursor-pointer"
              >
                Contact Jayesh
              </a>

              <a
                href={portfolioData.cta.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-[var(--border)] bg-[var(--bg-card)] hover:border-[var(--border-hover)] hover:bg-[var(--bg-alt)] text-xs font-medium text-[var(--ink)] transition-all shadow-2xs"
              >
                <LinkedInLogo className="w-3.5 h-3.5 text-blue-500" />
                <span>LinkedIn</span>
              </a>

              <a
                href={portfolioData.cta.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-[var(--border)] bg-[var(--bg-card)] hover:border-[var(--border-hover)] hover:bg-[var(--bg-alt)] text-xs font-medium text-[var(--ink)] transition-all shadow-2xs"
              >
                <GitHubLogo className="w-3.5 h-3.5" />
                <span>GitHub</span>
              </a>
            </div>
          </div>
        </div>

        {/* Compact Education Credential Badge below */}
        <div className="mt-8 p-3.5 sm:p-4 rounded-xl border border-[var(--border)] bg-[var(--bg-card)] flex items-center justify-between gap-3 shadow-2xs">
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-lg bg-white border border-[var(--border)] flex items-center justify-center p-1 shrink-0 overflow-hidden shadow-2xs">
              <img
                src="/mlsu.png"
                alt="MLSU Logo"
                className="w-full h-full object-contain"
                onError={(e) => {
                  const target = e.currentTarget;
                  if (target.src !== 'https://raw.githubusercontent.com/jayesh-analytics/jayesh-analytics.github.io/main/images/MLSU.png') {
                    target.src = 'https://raw.githubusercontent.com/jayesh-analytics/jayesh-analytics.github.io/main/images/MLSU.png';
                  }
                }}
              />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-xs sm:text-sm font-semibold text-[var(--ink)]">
                  Bachelor's of Science in Chemistry
                </h3>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-[var(--accent-soft)] text-[var(--accent)] border border-[var(--accent-soft-border)] font-medium">
                  2021 — 2024
                </span>
              </div>
              <p className="text-[11px] sm:text-xs text-[var(--muted)] mt-0.5">
                MohanLal Sukhadia University (MLSU) · Quantitative hypothesis testing & rigorous laboratory data accuracy
              </p>
            </div>
          </div>

          <a
            href={portfolioData.cta.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1 text-xs font-medium text-[var(--accent)] hover:underline shrink-0"
          >
            <span>View Background</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>
    </section>
  );
};
