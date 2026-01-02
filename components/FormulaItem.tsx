
import React, { useState } from 'react';
import { Formula } from '../types';

interface FormulaItemProps {
  formula: Formula;
  grade: number;
  isDark?: boolean;
}

const FormulaItem: React.FC<FormulaItemProps> = ({ formula, isDark }) => {
  const [showExplanation, setShowExplanation] = useState(false);

  return (
    <div className={`rounded-xl border transition-all hover:shadow-md ${isDark ? 'bg-slate-900 border-slate-800 shadow-none' : 'bg-white border-slate-200 shadow-sm'}`}>
      <div className="mb-2 flex items-start justify-between p-6 pb-0">
        <div>
          <div className="flex gap-2">
            <span className={`inline-block rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-wider ${isDark ? 'bg-slate-800 text-slate-400' : 'bg-slate-100 text-slate-500'}`}>
              {formula.category}
            </span>
            {formula.isAdvanced && (
              <span className="inline-block rounded-full bg-amber-500/10 text-amber-500 px-3 py-1 text-[10px] font-bold uppercase tracking-wider border border-amber-500/20">
                Advanced
              </span>
            )}
          </div>
          <h4 className={`mt-3 text-xl font-black ${isDark ? 'text-white' : 'text-slate-800'}`}>{formula.title}</h4>
        </div>
      </div>
      
      <div className="px-6 py-4">
        <div className={`rounded-lg p-6 text-center shadow-inner transition-colors ${isDark ? 'bg-slate-950/50 ring-1 ring-white/5' : 'bg-slate-50'}`}>
          <code className="math-font text-2xl font-bold text-indigo-500 sm:text-3xl">
            {formula.expression}
          </code>
        </div>
      </div>
      
      <div className="px-6 pb-6">
        <p className={`text-sm mb-4 leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>{formula.description}</p>
        
        <button 
          onClick={() => setShowExplanation(!showExplanation)}
          className={`flex w-full items-center justify-center gap-2 rounded-lg border px-4 py-2.5 text-sm font-bold transition-all active:scale-[0.98] ${isDark ? 'bg-slate-800 border-slate-700 text-slate-300 hover:bg-slate-700' : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'}`}
        >
          <svg className={`h-4 w-4 transition-transform ${showExplanation ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
          {showExplanation ? "Hide Details" : "Detailed Explanation"}
        </button>

        {showExplanation && (
          <div className={`mt-4 animate-fadeIn overflow-hidden rounded-lg p-4 text-sm border-l-4 transition-colors ${isDark ? 'bg-slate-800/50 text-slate-400 border-indigo-500' : 'bg-slate-50 text-slate-700 border-indigo-500'}`}>
            <p className={`font-bold mb-1 ${isDark ? 'text-slate-200' : 'text-slate-800'}`}>Context & Usage:</p>
            <div className="leading-relaxed italic">{formula.explanation}</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FormulaItem;
