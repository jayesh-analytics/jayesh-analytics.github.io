import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Database,
  Binary,
  BarChart3,
  Sparkles,
  ChevronRight,
  RotateCcw,
  TrendingUp,
  Layers,
} from 'lucide-react';
import { MySQLLogo, PythonLogo, PowerBILogo, ExcelLogo } from './Logos';

interface PipelineStage {
  id: string;
  step: string;
  title: string;
  badge: string;
  tools: string[];
  metrics: string;
  detail: string;
  accent: string;
  icon: React.ReactNode;
}

const stages: PipelineStage[] = [
  {
    id: 'sql',
    step: 'Stage 01',
    title: 'Relational Database & Data Auditing',
    badge: 'SQL / MySQL / SQLite',
    tools: ['Advanced MySQL', 'CTEs', 'Window Functions', 'Data Auditing'],
    metrics: '5,000+ Records Normalized • $184K Distortion Fixed',
    detail:
      'Rigorous database querying, schema structuring, multi-table joins, subqueries, and discrepancy isolation across complex transaction catalogs.',
    accent: 'from-amber-500/20 to-orange-500/20 border-amber-500/40 text-amber-300',
    icon: <Database className="w-5 h-5 text-amber-400" />,
  },
  {
    id: 'python',
    step: 'Stage 02',
    title: 'Statistical EDA & Risk Modeling',
    badge: 'Python / Pandas / NumPy',
    tools: ['Pandas', 'NumPy', 'Seaborn', 'Risk Scoring', 'Financial EDA'],
    metrics: 'Multi-Variable Delinquency Factors • Cohort Attrition',
    detail:
      'Exploratory data analysis isolating borrower behavioral patterns, customer lifetime value (CLTV) dynamics, and retention drop-off drivers.',
    accent: 'from-blue-500/20 to-cyan-500/20 border-blue-500/40 text-blue-300',
    icon: <Binary className="w-5 h-5 text-blue-400" />,
  },
  {
    id: 'bi',
    step: 'Stage 03',
    title: 'Dimensional BI & Star Schema',
    badge: 'Power BI / DAX / Power Query',
    tools: ['Power BI', 'DAX Time Intelligence', 'Star Schema', 'MIS Reporting'],
    metrics: '15+ Custom DAX Measures • Drill-through RCA',
    detail:
      'Architecting enterprise reporting models, MoM growth calculations, root-cause payment gateway analysis, and executive dashboard interfaces.',
    accent: 'from-yellow-500/20 to-amber-500/20 border-yellow-500/40 text-yellow-300',
    icon: <BarChart3 className="w-5 h-5 text-yellow-400" />,
  },
  {
    id: 'ai',
    step: 'Stage 04',
    title: 'Executive Synthesis & AI Workflows',
    badge: 'GenAI / Prompt Engineering',
    tools: ['Prompt Engineering', 'GenAI for Analytics', 'AI Automation'],
    metrics: 'Executive-Ready Strategy • Commercial Clarity',
    detail:
      'Bridging raw technical datasets to commercial decisions with prompt-driven synthesis, regulatory explainability (ECOA, Fair Lending), and strategic slide decks.',
    accent: 'from-purple-500/20 to-indigo-500/20 border-purple-500/40 text-purple-300',
    icon: <Sparkles className="w-5 h-5 text-purple-400" />,
  },
];

export const ThreeDPipelineCube: React.FC = () => {
  const [activeStageIndex, setActiveStageIndex] = useState(0);
  const currentStage = stages[activeStageIndex];

  return (
    <div className="w-full relative overflow-hidden rounded-3xl bg-slate-900/80 border border-slate-800 p-6 md:p-8 backdrop-blur-xl shadow-2xl">
      {/* Subtle background glow */}
      <div className="absolute -top-24 -right-24 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-800/80 relative z-10">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-cyan-400 mb-1">
            <Layers className="w-3.5 h-3.5" />
            <span>Interactive Data Analysis, Machine Learning, Data Analysis</span>
          </div>
          <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight">
            How I Bridge Raw Data to Commercial Clarity
          </h3>
        </div>

        {/* Stage Selector Pills */}
        <div className="flex items-center gap-1.5 p-1 bg-slate-950/80 border border-slate-800 rounded-xl overflow-x-auto">
          {stages.map((st, idx) => (
            <button
              key={st.id}
              onClick={() => setActiveStageIndex(idx)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-all flex items-center gap-1.5 ${
                activeStageIndex === idx
                  ? 'bg-slate-800 text-white shadow-sm border border-slate-700/60'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <span>{idx + 1}.</span>
              <span>{st.badge.split(' ')[0]}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Main 3D Pipeline Interactive Stage */}
      <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
        {/* Left: 3D Perspective Isometric Pipeline Cards */}
        <div className="lg:col-span-6 perspective-1000">
          <div className="relative h-72 sm:h-80 w-full flex items-center justify-center">
            {stages.map((stage, idx) => {
              const diff = (idx - activeStageIndex + stages.length) % stages.length;
              // 3D positioning
              let zIndex = 10 - diff;
              let translateY = diff * 22;
              let scale = 1 - diff * 0.08;
              let opacity = diff === 0 ? 1 : Math.max(0.2, 0.65 - diff * 0.2);
              let rotateX = 14;
              let rotateZ = -6;

              if (diff > 2) {
                opacity = 0;
              }

              return (
                <motion.div
                  key={stage.id}
                  onClick={() => setActiveStageIndex(idx)}
                  animate={{
                    y: translateY,
                    scale: scale,
                    opacity: opacity,
                    rotateX: rotateX,
                    rotateZ: rotateZ,
                    z: -diff * 60,
                  }}
                  transition={{ type: 'spring', stiffness: 220, damping: 24 }}
                  className={`absolute w-full max-w-md cursor-pointer p-5 rounded-2xl border backdrop-blur-md transition-shadow ${
                    diff === 0
                      ? 'bg-gradient-to-br from-slate-900/95 to-slate-950/95 border-cyan-500/50 shadow-2xl shadow-cyan-500/10'
                      : 'bg-slate-900/70 border-slate-800 shadow-lg'
                  }`}
                  style={{
                    zIndex,
                    transformStyle: 'preserve-3d',
                  }}
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <div className="p-2 rounded-xl bg-slate-800/80 border border-slate-700/60">
                        {stage.icon}
                      </div>
                      <div>
                        <span className="text-[11px] font-mono tracking-wider text-slate-400">
                          {stage.step}
                        </span>
                        <h4 className="text-base font-semibold text-slate-100 leading-tight">
                          {stage.title}
                        </h4>
                      </div>
                    </div>
                    <span className="text-xs font-mono font-medium px-2.5 py-1 rounded-full bg-slate-800/80 border border-slate-700 text-cyan-300">
                      {stage.badge}
                    </span>
                  </div>

                  <p className="text-xs text-slate-300 line-clamp-2 leading-relaxed">
                    {stage.detail}
                  </p>

                  <div className="mt-4 pt-3 border-t border-slate-800/60 flex items-center justify-between text-xs">
                    <span className="text-slate-400 font-mono text-[11px]">
                      {stage.metrics}
                    </span>
                    <span className="text-cyan-400 font-medium flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                      {diff === 0 ? 'Active Focus' : 'Inspect'} <ChevronRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <div className="text-center mt-2">
            <span className="text-xs text-slate-400 font-mono">
              Click any stage or step forward to navigate the 3D data pipeline
            </span>
          </div>
        </div>

        {/* Right: Focused Stage Detailed Breakdown */}
        <div className="lg:col-span-6 bg-slate-950/70 border border-slate-800/90 rounded-2xl p-6 sm:p-7">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStage.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25 }}
              className="space-y-4"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono px-2.5 py-1 rounded-md bg-cyan-500/10 border border-cyan-500/30 text-cyan-300">
                  {currentStage.step} • {currentStage.badge}
                </span>
                <span className="text-xs text-slate-400 font-mono">
                  Stage {activeStageIndex + 1} of {stages.length}
                </span>
              </div>

              <h4 className="text-xl font-bold text-white">
                {currentStage.title}
              </h4>

              <p className="text-sm text-slate-300 leading-relaxed">
                {currentStage.detail}
              </p>

              <div className="pt-2">
                <h5 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
                  Applied Competencies & Tools
                </h5>
                <div className="flex flex-wrap gap-2">
                  {currentStage.tools.map((tool) => (
                    <span
                      key={tool}
                      className="px-2.5 py-1 text-xs font-medium rounded-lg bg-slate-800/80 border border-slate-700/60 text-slate-200"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-900/90 border border-cyan-500/20 flex items-start gap-3">
                <div className="p-1.5 rounded-lg bg-cyan-500/20 text-cyan-400 mt-0.5">
                  <TrendingUp className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-slate-200">
                    Realized Portfolio Metric
                  </div>
                  <div className="text-xs text-cyan-300 font-mono mt-0.5">
                    {currentStage.metrics}
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between pt-2">
                <button
                  onClick={() =>
                    setActiveStageIndex(
                      (prev) => (prev - 1 + stages.length) % stages.length
                    )
                  }
                  className="px-3 py-1.5 text-xs font-medium text-slate-400 hover:text-white rounded-lg border border-slate-800 hover:border-slate-700 transition-colors"
                >
                  ← Previous Stage
                </button>
                <button
                  onClick={() =>
                    setActiveStageIndex((prev) => (prev + 1) % stages.length)
                  }
                  className="px-3.5 py-1.5 text-xs font-medium text-cyan-300 hover:text-cyan-200 bg-cyan-950/60 hover:bg-cyan-900/60 rounded-lg border border-cyan-700/50 transition-colors flex items-center gap-1.5"
                >
                  <span>Next Stage</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};
