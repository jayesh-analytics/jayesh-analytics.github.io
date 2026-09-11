import React from 'react';
import { motion } from 'motion/react';
import { Quote } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  const reviews = [
    {
      quote:
        'Jayesh completely automated our multi-account reconciliation workflow. What used to take two analysts two full days every month now reconciles with zero variance in under five minutes. The financial accuracy is immaculate.',
      author: 'Financial Controller',
      role: 'Banking & Audit Operations',
      highlight: '100% Reconciliation Accuracy',
    },
    {
      quote:
        'The Power BI executive dashboard built by Jayesh gave our commercial team instant visibility across 8,500+ order routes and sales metrics. We spotted stockout bottlenecks in 48 hours that had been bleeding margin for quarters.',
      author: 'Head of Operations',
      role: 'Quick-Commerce & Retail Platform',
      highlight: 'Instant Stockout Detection',
    },
    {
      quote:
        'Jayesh applied rigorous statistical modeling to our customer portfolio, identifying high-risk delinquency accounts weeks before traditional aging reports flagged them. His analytical clarity is top-tier.',
      author: 'Credit Risk Director',
      role: 'Fintech Credit Lending',
      highlight: 'Early Delinquency Warning',
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-[var(--border)]">
      <div className="text-center max-w-3xl mx-auto mb-14">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase text-[var(--accent)] bg-[var(--accent-soft)] border border-[var(--accent-soft-border)] mb-3">
          Case Impact
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[var(--ink)]">
          Results, <span className="text-[var(--accent)]">in commercial terms</span>
        </h2>
        <p className="mt-3 text-base text-[var(--ink-light)]">
          How data modeling, automated reconciliation, and executive dashboards transform daily operations.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {reviews.map((rev, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="p-7 rounded-2xl border border-[var(--border)] bg-[var(--bg-card)] flex flex-col justify-between hover:border-[var(--border-hover)] transition-all"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <Quote className="w-6 h-6 text-[var(--accent)] opacity-80" />
                <span className="text-[11px] font-mono font-semibold px-2.5 py-1 rounded-full bg-[var(--accent-soft)] text-[var(--accent)] border border-[var(--accent-soft-border)]">
                  {rev.highlight}
                </span>
              </div>
              <p className="text-sm leading-relaxed text-[var(--ink-light)] italic">
                "{rev.quote}"
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-[var(--border)]">
              <p className="text-sm font-bold text-[var(--ink)]">{rev.author}</p>
              <p className="text-xs text-[var(--muted)] mt-0.5">{rev.role}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
