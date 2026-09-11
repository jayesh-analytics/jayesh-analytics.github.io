import React from 'react';
import { motion } from 'motion/react';
import {
  Wrench,
  Sparkles,
  Database,
  BarChart,
  Brain,
  FileSpreadsheet,
  CheckCircle2,
} from 'lucide-react';
import { TiltCard } from './TiltCard';
import {
  ExcelLogo,
  PowerBILogo,
  PythonLogo,
  MySQLLogo,
  TableauLogo,
} from './Logos';
import { portfolioData } from '../data/portfolioData';

export const SkillsSection: React.FC = () => {
  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'excel':
        return <ExcelLogo className="w-6 h-6" />;
      case 'powerbi':
        return <PowerBILogo className="w-6 h-6" />;
      case 'sql-python':
        return (
          <div className="flex items-center gap-1.5">
            <MySQLLogo className="w-5 h-5" />
            <PythonLogo className="w-5 h-5" />
          </div>
        );
      case 'tableau':
        return <TableauLogo className="w-6 h-6" />;
      case 'ai':
        return (
          <div className="p-1 rounded-lg bg-purple-500/20 text-purple-400">
            <Sparkles className="w-5 h-5" />
          </div>
        );
      default:
        return <Wrench className="w-6 h-6 text-cyan-400" />;
    }
  };

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-mono uppercase tracking-wider">
          <Wrench className="w-3.5 h-3.5" />
          <span>Core Capabilities</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-sans">
          Skills & Strengths
        </h2>
        <p className="text-slate-400 text-sm sm:text-base font-sans">
          End-to-end analytical toolset spanning database design, dimensional
          BI modeling, automated workflows, and artificial intelligence.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
        {portfolioData.skills.map((cat, idx) => (
          <TiltCard
            key={cat.id}
            maxTilt={6}
            className={`p-4 sm:p-5 rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-slate-700 shadow-lg flex flex-col justify-between transition-all ${
              idx === 4 ? 'md:col-span-2 lg:col-span-1' : ''
            }`}
          >
            <div className="space-y-3">
              {/* Header with icon */}
              <div className="flex items-center justify-between">
                <div className="p-2 rounded-xl bg-slate-950 border border-slate-800 shadow-inner">
                  {getCategoryIcon(cat.iconName)}
                </div>
                <span className="text-[11px] font-mono text-cyan-400/80 bg-cyan-950/40 border border-cyan-900/40 px-2 py-0.5 rounded-full">
                  {cat.skills.length} Skills
                </span>
              </div>

              <div>
                <h3 className="text-lg font-bold text-white tracking-tight font-sans">
                  {cat.title}
                </h3>
                <p className="text-xs text-slate-400 mt-0.5 leading-relaxed font-sans">
                  {cat.tagline}
                </p>
              </div>

              {/* Specific Skills Pills from PDF */}
              <div className="pt-1.5 flex flex-wrap gap-1.5">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-lg bg-slate-950/80 border border-slate-800 text-xs text-slate-300 font-medium hover:border-slate-700 hover:text-cyan-300 transition-colors"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-500/70" />
                    <span>{skill}</span>
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-3 mt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-500">
              <span>Competencies</span>
              <span className="text-cyan-400 font-sans">Production Ready</span>
            </div>
          </TiltCard>
        ))}
      </div>
    </section>
  );
};
