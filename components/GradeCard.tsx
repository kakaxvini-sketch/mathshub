
import React from 'react';
import { GRADE_COLORS } from '../constants';

interface GradeCardProps {
  grade: number;
  label: string;
  onClick: () => void;
}

const GradeCard: React.FC<GradeCardProps> = ({ grade, label, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`group relative overflow-hidden rounded-2xl p-8 text-white shadow-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl bg-gradient-to-br ${GRADE_COLORS[grade]}`}
    >
      <div className="absolute -right-4 -top-4 text-white/10 transition-transform duration-500 group-hover:rotate-12 group-hover:scale-125">
        <svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/>
        </svg>
      </div>
      
      <div className="relative z-10 text-left">
        <span className="mb-2 block text-sm font-medium uppercase tracking-wider text-white/80">Select Level</span>
        <h3 className="text-3xl font-bold">{label}</h3>
        <p className="mt-4 text-sm text-white/90">Explore core math formulas, identities, and theorems curated for your curriculum.</p>
        
        <div className="mt-8 flex items-center gap-2 font-semibold">
          <span>Start Learning</span>
          <svg className="h-5 w-5 transition-transform group-hover:translate-x-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </div>
      </div>
    </button>
  );
};

export default GradeCard;
