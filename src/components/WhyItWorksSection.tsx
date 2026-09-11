import React from 'react';
import { motion } from 'motion/react';
import {
  TrendingDown,
  Zap,
  Target,
  Layers,
  Unlock,
  ShieldCheck,
} from 'lucide-react';

export const WhyItWorksSection: React.FC = () => {
  const cards = [
    {
      icon: TrendingDown,
      title: 'Cut Costs Without Cutting Corners',
      description:
        'Eliminate repetitive manual spreadsheet hours draining your team — broken VLOOKUPs, weekly banking reconciliations, and copy-paste errors. Automated SQL and Python pipelines run with precision so your team focuses on high-impact commercial decisions.',
    },
    {
      icon: Zap,
      title: 'Delivered in Days, Not Months',
      description:
        'Forget agonizing six-month reporting roadmaps. A structured discovery-to-dashboard workflow gets your first interactive, executive-ready Power BI system live fast — verified, phased, and built for instant business clarity.',
    },
    {
      icon: Target,
      title: 'Analytics Tailored for Your Industry',
      description:
        'Generic spreadsheet templates produce generic results. Every dashboard and data model is tailored — financial audit reconciliation, retail grocery delivery, credit delinquency risk, and customer retention. Built to fit your exact business logic.',
    },
    {
      icon: Layers,
      title: 'End-to-End Ownership',
      description:
        'Data extraction, SQL schema design, star-schema relational modeling, complex DAX measures, automated ETL, and executive slide synthesis — full lifecycle ownership under one accountable specialist with zero agency handoffs.',
    },
    {
      icon: Unlock,
      title: 'Your Team Stays in Control',
      description:
        'Every data model and dashboard ships with clean, documented SQL scripts, PBIX files, DAX measure dictionaries, and walkthrough videos. No locked black boxes or proprietary vendor traps.',
    },
    {
      icon: ShieldCheck,
      title: 'Audit-Ready & Reconciled by Default',
      description:
        'Self-auditing queries, double-entry mathematical validation, and 100% bank statement reconciliation. Your operational and financial reporting is rigorously verified and audit-compliant from day one.',
    },
  ];

  return (
    <section id="why-it-works" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase text-[var(--accent)] bg-[var(--accent-soft)] border border-[var(--accent-soft-border)] mb-3">
          Why It Works
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[var(--ink)]">
          Analytics systems built <br className="hidden sm:inline" />
          <span className="text-[var(--accent)]">for commercial impact</span>
        </h2>
        <p className="mt-4 text-base sm:text-lg text-[var(--ink-light)] leading-relaxed">
          Built for teams ready to move fast, eliminate manual spreadsheet clutter, and win bigger with verified data. Fully modeled, battle-tested, done right — delivered fast.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cards.map((card, idx) => {
          const IconComponent = card.icon;
          return (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="group p-7 rounded-2xl border border-[var(--border)] bg-[var(--bg-card)] hover:border-[var(--border-hover)] hover:shadow-lg transition-all flex flex-col justify-between"
            >
              <div>
                <div className="w-11 h-11 rounded-xl bg-[var(--accent-soft)] border border-[var(--accent-soft-border)] flex items-center justify-center text-[var(--accent)] mb-5 group-hover:scale-105 transition-transform">
                  <IconComponent className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-[var(--ink)] mb-2.5 group-hover:text-[var(--accent)] transition-colors">
                  {card.title}
                </h3>
                <p className="text-sm text-[var(--ink-light)] leading-relaxed">
                  {card.description}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};
