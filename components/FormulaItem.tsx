
import React, { useState } from 'react';
import { Formula } from '../types';

interface FormulaItemProps {
  formula: Formula;
  grade: number;
}

const FormulaItem: React.FC<FormulaItemProps> = ({ formula }) => {
  const [showExplanation, setShowExplanation] = useState(false);

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:shadow-md">
      <div className="mb-2 flex items-start justify-between">
        <div>
          <span className="inline-block rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold uppercase text-slate-500">
            {formula.category}
          </span>
          <h4 className="mt-2 text-xl font-bold text-slate-800">{formula.title}</h4>
        </div>
      </div>
      
      <div className="my-4 rounded-lg bg-slate-50 p-6 text-center shadow-inner">
        <code className="math-font text-2xl font-bold text-indigo-600 sm:text-3xl">
          {formula.expression}
        </code>
      </div>
      
      <p className="text-sm text-slate-600 mb-4">{formula.description}</p>
      
      <button 
        onClick={() => setShowExplanation(!showExplanation)}
        className="flex w-full items-center justify-center gap-2 rounded-lg border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-50 active:bg-slate-100"
      >
        <svg className={`h-4 w-4 transition-transform ${showExplanation ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
        {showExplanation ? "Hide Explanation" : "View Detailed Explanation"}
      </button>

      {showExplanation && (
        <div className="mt-4 animate-fadeIn overflow-hidden rounded-lg bg-slate-50 p-4 text-sm text-slate-700 border-l-4 border-slate-300">
          <p className="font-semibold text-slate-800 mb-1">Detailed Explanation:</p>
          <div className="leading-relaxed">{formula.explanation}</div>
        </div>
      )}
    </div>
  );
};

export default FormulaItem;
