import React from 'react';
import { motion } from 'motion/react';
import {
  ExternalLink,
  ShieldCheck,
  BadgeCheck,
} from 'lucide-react';
import { TiltCard } from './TiltCard';
import {
  GoogleLogo,
  CourseraLogo,
  ForageLogo,
  CodingNinjasLogo,
  PowerBILogo,
  ExcelLogo,
} from './Logos';
import { portfolioData } from '../data/portfolioData';

export const CertificatesSection: React.FC = () => {
  const getIssuerBadges = (type: string, title: string) => {
    switch (type) {
      case 'google':
        return (
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-xl bg-[var(--bg-alt)] border border-[var(--border)] shadow-2xs">
              <GoogleLogo className="w-5 h-5" />
            </div>
            <div className="p-2 rounded-xl bg-[var(--bg-alt)] border border-[var(--border)] shadow-2xs">
              <CourseraLogo className="w-5 h-5" />
            </div>
          </div>
        );
      case 'tata':
        return (
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-xl bg-[var(--bg-alt)] border border-[var(--border)] shadow-2xs">
              <ForageLogo className="w-5 h-5" />
            </div>
          </div>
        );
      case 'coding-ninjas':
        return (
          <div className="flex items-center gap-2">
            <div className="px-2.5 py-1.5 rounded-xl bg-white dark:bg-[var(--bg-alt)] border border-[var(--border)] shadow-2xs flex items-center justify-center">
              <CodingNinjasLogo className="h-4 w-auto max-w-[95px]" />
            </div>
            {title.includes('Power BI') && (
              <div className="p-2 rounded-xl bg-[var(--bg-alt)] border border-[var(--border)] shadow-2xs">
                <PowerBILogo className="w-5 h-5" />
              </div>
            )}
            {title.includes('Excel') && (
              <div className="p-2 rounded-xl bg-[var(--bg-alt)] border border-[var(--border)] shadow-2xs">
                <ExcelLogo className="w-5 h-5" />
              </div>
            )}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <section id="certificates" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-[var(--border)]">
      <div className="text-center max-w-3xl mx-auto mb-10 space-y-2.5">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase text-[var(--accent)] bg-[var(--accent-soft)] border border-[var(--accent-soft-border)]">
          Verified Credentials
        </div>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif text-[var(--ink)] tracking-tight">
          Certifications & Accreditations
        </h2>
        <p className="text-xs sm:text-sm text-[var(--ink-light)] leading-relaxed">
          Verified professional certifications across Generative AI, enterprise risk analytics, Excel data modeling, and Power BI visualization.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
        {portfolioData.certificates.map((cert, idx) => (
          <motion.div
            key={cert.id}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: idx * 0.08 }}
            whileHover={{ y: -4 }}
            className="p-4 sm:p-4.5 rounded-xl bg-[var(--bg-card)] border border-[var(--border)] hover:border-[var(--accent)]/50 shadow-2xs hover:shadow-md transition-all flex flex-col justify-between group relative overflow-hidden"
          >
            <div className="space-y-3">
              {/* Top row: Logos and Verified pill */}
              <div className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-1.5">
                  {cert.issuerType === 'google' && (
                    <>
                      <div className="p-1.5 rounded-lg bg-[var(--bg-alt)] border border-[var(--border)]">
                        <GoogleLogo className="w-4 h-4" />
                      </div>
                      <div className="p-1.5 rounded-lg bg-[var(--bg-alt)] border border-[var(--border)]">
                        <CourseraLogo className="w-4 h-4" />
                      </div>
                    </>
                  )}
                  {cert.issuerType === 'tata' && (
                    <div className="p-1.5 rounded-lg bg-[var(--bg-alt)] border border-[var(--border)] flex items-center justify-center">
                      <ForageLogo className="w-4 h-4" />
                    </div>
                  )}
                  {cert.issuerType === 'coding-ninjas' && (
                    <>
                      <div className="px-2 py-1.5 rounded-lg bg-white dark:bg-[var(--bg-alt)] border border-[var(--border)] flex items-center justify-center">
                        <CodingNinjasLogo className="h-3.5 w-auto max-w-[85px]" />
                      </div>
                      {cert.title.includes('Power BI') ? (
                        <div className="p-1.5 rounded-lg bg-[var(--bg-alt)] border border-[var(--border)]">
                          <PowerBILogo className="w-4 h-4" />
                        </div>
                      ) : (
                        <div className="p-1.5 rounded-lg bg-[var(--bg-alt)] border border-[var(--border)]">
                          <ExcelLogo className="w-4 h-4" />
                        </div>
                      )}
                    </>
                  )}
                </div>

                <span className="inline-flex items-center gap-1 text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 font-semibold shrink-0">
                  <ShieldCheck className="w-2.5 h-2.5" />
                  <span>Verified</span>
                </span>
              </div>

              {/* Issuer & Title */}
              <div>
                <span className="text-[11px] font-mono text-[var(--muted)] font-medium block">
                  {cert.issuer}
                </span>
                <h3 className="text-xs sm:text-sm font-semibold text-[var(--ink)] group-hover:text-[var(--accent)] transition-colors mt-0.5 line-clamp-2">
                  {cert.title}
                </h3>
              </div>
            </div>

            {/* Direct Verification Link Button */}
            <div className="pt-3 mt-3 border-t border-[var(--border)]">
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-lg bg-[var(--bg-alt)] hover:bg-[var(--accent)] hover:text-white border border-[var(--border)] text-xs font-semibold text-[var(--ink)] transition-all group/btn cursor-pointer"
              >
                <span>Verify Credential</span>
                <ExternalLink className="w-3 h-3 text-[var(--muted)] group-hover/btn:text-white transition-colors" />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
