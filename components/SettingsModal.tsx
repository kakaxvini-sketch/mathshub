import React, { useState } from 'react';

interface SettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SettingsModal: React.FC<SettingsModalProps> = ({ isOpen, onClose }) => {
  const [advancedMode, setAdvancedMode] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 backdrop-blur-sm bg-slate-900/40 animate-fadeIn"
      onClick={onClose}
    >
      <div 
        className="w-full max-w-md overflow-hidden rounded-3xl bg-white shadow-2xl animate-slideUp"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="bg-slate-900 p-6 text-white flex justify-between items-center">
          <div>
            <h3 className="text-xl font-bold">App Settings</h3>
            <p className="text-xs text-slate-400">Total control over your experience</p>
          </div>
          <button 
            onClick={onClose} 
            className="rounded-full bg-white/10 p-2 hover:bg-white/20 transition-colors"
            aria-label="Close settings"
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        <div className="p-6 space-y-6">
          <div 
            className="flex items-center justify-between cursor-pointer group"
            onClick={() => setDarkMode(!darkMode)}
          >
            <div>
              <h4 className="font-semibold text-slate-800 group-hover:text-indigo-600 transition-colors">Dark Mode</h4>
              <p className="text-xs text-slate-500">Enable a night-friendly interface</p>
            </div>
            <div className={`h-6 w-11 rounded-full transition-colors relative ${darkMode ? 'bg-indigo-600' : 'bg-slate-200'}`}>
              <div className={`absolute top-1 h-4 w-4 rounded-full bg-white shadow-sm transition-all ${darkMode ? 'left-6' : 'left-1'}`}></div>
            </div>
          </div>

          <div 
            className="flex items-center justify-between cursor-pointer group"
            onClick={() => setAdvancedMode(!advancedMode)}
          >
            <div>
              <h4 className="font-semibold text-slate-800 group-hover:text-indigo-600 transition-colors">Advanced Formulas</h4>
              <p className="text-xs text-slate-500">Show extra complex math variants</p>
            </div>
            <div className={`h-6 w-11 rounded-full transition-colors relative ${advancedMode ? 'bg-indigo-600' : 'bg-slate-200'}`}>
              <div className={`absolute top-1 h-4 w-4 rounded-full bg-white shadow-sm transition-all ${advancedMode ? 'left-6' : 'left-1'}`}></div>
            </div>
          </div>

          <div className="pt-4 border-t">
            <button 
              onClick={onClose}
              className="w-full rounded-xl bg-indigo-600 py-3 text-sm font-bold text-white hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-100 active:scale-[0.98]"
            >
              Save & Apply Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsModal;