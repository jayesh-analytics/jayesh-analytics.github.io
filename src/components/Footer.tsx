import React from 'react';
import { ArrowUp } from 'lucide-react';
import { GitHubLogo, LinkedInLogo, WhatsAppLogo } from './Logos';
import { portfolioData } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-[var(--border)] bg-[var(--bg)] pt-16 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-14 pb-12">
          {/* Left Column: Brand, Profile avatar, bio, email, socials */}
          <div className="md:col-span-6 lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full overflow-hidden border border-[var(--border)] bg-[var(--bg-card)] shrink-0 shadow-2xs">
                <img
                  src="/profile.png"
                  alt="Jayesh Suthar"
                  className="w-full h-full object-cover object-top"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    const target = e.currentTarget;
                    if (target.src !== 'https://raw.githubusercontent.com/jayesh-analytics/jayesh-analytics.github.io/main/images/profile.png') {
                      target.src = 'https://raw.githubusercontent.com/jayesh-analytics/jayesh-analytics.github.io/main/images/profile.png';
                    }
                  }}
                />
              </div>
              <span className="font-bold text-lg text-[var(--ink)] tracking-tight">
                Jayesh Suthar
              </span>
            </div>

            <p className="text-sm text-[var(--ink-light)] leading-relaxed max-w-sm">
              Data Analytics & Business Intelligence. Helping businesses eliminate manual reporting and scale faster with production SQL pipelines and Power BI dashboards.
            </p>

            <div className="pt-1 space-y-1">
              <a
                href={`mailto:${portfolioData.cta.email}`}
                className="text-sm text-[var(--ink)] hover:text-[var(--accent)] font-medium transition-colors block"
              >
                {portfolioData.cta.email}
              </a>
              <div className="text-xs text-[var(--muted)]">
                Sirohi, Rajasthan, India
              </div>
            </div>

            {/* Circular Social Buttons */}
            <div className="pt-2 flex items-center gap-2.5">
              <a
                href="https://wa.me/918302763167"
                target="_blank"
                rel="noopener noreferrer"
                title="WhatsApp"
                className="w-9 h-9 rounded-full border border-[var(--border)] bg-[var(--bg-card)] hover:bg-[var(--bg-alt)] hover:border-[var(--border-hover)] flex items-center justify-center text-[var(--ink-light)] hover:text-emerald-500 transition-colors shadow-2xs"
              >
                <WhatsAppLogo className="w-4 h-4" />
              </a>

              <a
                href={portfolioData.cta.github}
                target="_blank"
                rel="noopener noreferrer"
                title="GitHub"
                className="w-9 h-9 rounded-full border border-[var(--border)] bg-[var(--bg-card)] hover:bg-[var(--bg-alt)] hover:border-[var(--border-hover)] flex items-center justify-center text-[var(--ink-light)] hover:text-[var(--ink)] transition-colors shadow-2xs"
              >
                <GitHubLogo className="w-4 h-4" />
              </a>

              <a
                href={portfolioData.cta.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                title="LinkedIn"
                className="w-9 h-9 rounded-full border border-[var(--border)] bg-[var(--bg-card)] hover:bg-[var(--bg-alt)] hover:border-[var(--border-hover)] flex items-center justify-center text-[var(--ink-light)] hover:text-blue-500 transition-colors shadow-2xs"
              >
                <LinkedInLogo className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Middle Column: PAGES */}
          <div className="md:col-span-3 lg:col-span-3 space-y-3.5">
            <h4 className="text-xs font-semibold tracking-widest text-[var(--muted)] uppercase">
              PAGES
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a
                  href="#experience"
                  className="text-[var(--ink-light)] hover:text-[var(--ink)] transition-colors"
                >
                  Experience
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-[var(--ink-light)] hover:text-[var(--ink)] transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="text-[var(--ink-light)] hover:text-[var(--ink)] transition-colors"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#certificates"
                  className="text-[var(--ink-light)] hover:text-[var(--ink)] transition-colors"
                >
                  Credentials
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-[var(--ink-light)] hover:text-[var(--ink)] transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Right Column: RESOURCES */}
          <div className="md:col-span-3 lg:col-span-4 space-y-3.5">
            <h4 className="text-xs font-semibold tracking-widest text-[var(--muted)] uppercase">
              RESOURCES
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a
                  href="#projects"
                  className="text-[var(--ink-light)] hover:text-[var(--ink)] transition-colors"
                >
                  Power BI & DAX Dashboards
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="text-[var(--ink-light)] hover:text-[var(--ink)] transition-colors"
                >
                  Advanced SQL Audits
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="text-[var(--ink-light)] hover:text-[var(--ink)] transition-colors"
                >
                  Python & EDA Pipelines
                </a>
              </li>
              <li>
                <a
                  href={portfolioData.cta.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--ink-light)] hover:text-[var(--ink)] transition-colors"
                >
                  GitHub Repositories
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-[var(--ink-light)] hover:text-[var(--ink)] transition-colors"
                >
                  Free Strategy Inquiry
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom subtle divider & copyright */}
        <div className="pt-8 border-t border-[var(--border)] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[var(--muted)]">
          <div>
            © {new Date().getFullYear()} Jayesh Suthar. All rights reserved.
          </div>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-[var(--border)] bg-[var(--bg-card)] hover:bg-[var(--bg-alt)] hover:text-[var(--ink)] text-[var(--ink-light)] transition-colors cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
