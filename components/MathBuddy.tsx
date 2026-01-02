
import React, { useState } from 'react';
import { GeminiService } from '../services/geminiService';

interface MathBuddyProps {
  grade: number;
  isDark?: boolean;
}

const MathBuddy: React.FC<MathBuddyProps> = ({ grade, isDark }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [response, setResponse] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const gemini = new GeminiService();

  const handleAsk = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;
    setLoading(true);
    setResponse(null);
    const result = await gemini.askMathBuddy(query, grade);
    setResponse(result || "Could not get an answer.");
    setLoading(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen && (
        <div className={`mb-4 w-80 overflow-hidden rounded-2xl border shadow-2xl animate-slideUp transition-colors ${isDark ? 'bg-slate-900 border-slate-800 text-white' : 'bg-white border-slate-200 text-slate-900'}`}>
          <div className="bg-indigo-600 p-4 text-white">
            <h3 className="font-bold">Math AI Buddy (Class {grade})</h3>
            <p className="text-xs text-white/80">Ask me anything about math!</p>
          </div>
          <div className="max-h-96 overflow-y-auto p-4">
            {response ? (
              <div className={`mb-4 rounded-lg p-3 text-sm whitespace-pre-wrap border transition-colors ${isDark ? 'bg-slate-950 border-slate-800 text-slate-300' : 'bg-slate-50 border-slate-200 text-slate-700'}`}>
                {response}
              </div>
            ) : (
              <p className={`mb-4 text-center text-sm ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>Type a question to start chatting...</p>
            )}
            {loading && (
              <div className="flex justify-center py-4">
                <div className="h-6 w-6 animate-spin rounded-full border-2 border-indigo-600 border-t-transparent"></div>
              </div>
            )}
          </div>
          <form onSubmit={handleAsk} className={`border-t p-4 ${isDark ? 'border-slate-800' : 'border-slate-100'}`}>
            <div className="flex gap-2">
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="How to solve..."
                className={`flex-1 rounded-lg border px-3 py-2 text-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 transition-colors ${isDark ? 'bg-slate-950 border-slate-800 text-white' : 'bg-white border-slate-200'}`}
              />
              <button
                type="submit"
                disabled={loading}
                className="rounded-lg bg-indigo-600 p-2 text-white hover:bg-indigo-700 disabled:opacity-50"
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </button>
            </div>
            {response && (
                <button 
                  type="button"
                  onClick={() => { setResponse(null); setQuery(''); }}
                  className="mt-2 text-xs text-indigo-400 font-medium hover:underline"
                >
                  Clear chat
                </button>
            )}
          </form>
        </div>
      )}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-indigo-600 text-white shadow-lg transition-transform hover:scale-110 active:scale-95 shadow-indigo-500/30"
      >
        {isOpen ? (
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="h-8 w-8 floating" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>
        )}
      </button>
    </div>
  );
};

export default MathBuddy;
