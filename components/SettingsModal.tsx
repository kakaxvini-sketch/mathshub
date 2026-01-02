
import React from 'react';
import { AppSettings } from '../types';

interface SettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
  settings: AppSettings;
  onUpdate: (settings: AppSettings) => void;
}

const SettingsModal: React.FC<SettingsModalProps> = ({ isOpen, onClose, settings, onUpdate }) => {
  if (!isOpen) return null;

  const toggleDarkMode = () => onUpdate({ ...settings, darkMode: !settings.darkMode });
  const toggleAdvanced = () => onUpdate({ ...settings, advancedMode: !settings.advancedMode });

  return (
    <div 
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 backdrop-blur-sm bg-slate-900/60 animate-fadeIn"
      onClick={onClose}
    >
      <div 
        className={`w-full max-w-md overflow-hidden rounded-3xl shadow-2xl animate-slideUp transition-colors ${settings.darkMode ? 'bg-slate-900 text-white' : 'bg-white text-slate-900'}`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={`p-6 flex justify-between items-center border-b ${settings.darkMode ? 'border-slate-800 bg-slate-800/50' : 'border-slate-100 bg-slate-50'}`}>
          <div>
            <h3 className="text-xl font-bold">App Settings</h3>
            <p className={`text-xs ${settings.darkMode ? 'text-slate-400' : 'text-slate-500'}`}>Total control over your experience</p>
          </div>
          <button 
            onClick={onClose} 
            className={`rounded-full p-2 transition-colors ${settings.darkMode ? 'bg-white/5 hover:bg-white/10' : 'bg-slate-200 hover:bg-slate-300'}`}
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
            onClick={toggleDarkMode}
          >
            <div>
              <h4 className={`font-semibold transition-colors ${settings.darkMode ? 'group-hover:text-indigo-400' : 'group-hover:text-indigo-600'}`}>Dark Mode</h4>
              <p className={`text-xs ${settings.darkMode ? 'text-slate-500' : 'text-slate-500'}`}>Enable a night-friendly interface</p>
            </div>
            <div className={`h-6 w-11 rounded-full transition-colors relative ${settings.darkMode ? 'bg-indigo-600' : 'bg-slate-200'}`}>
              <div className={`absolute top-1 h-4 w-4 rounded-full bg-white shadow-sm transition-all ${settings.darkMode ? 'left-6' : 'left-1'}`}></div>
            </div>
          </div>

          <div 
            className="flex items-center justify-between cursor-pointer group"
            onClick={toggleAdvanced}
          >
            <div>
              <h4 className={`font-semibold transition-colors ${settings.darkMode ? 'group-hover:text-indigo-400' : 'group-hover:text-indigo-600'}`}>Advanced Formulas</h4>
              <p className={`text-xs ${settings.darkMode ? 'text-slate-500' : 'text-slate-500'}`}>Show extra complex math variants</p>
            </div>
            <div className={`h-6 w-11 rounded-full transition-colors relative ${settings.advancedMode ? 'bg-indigo-600' : 'bg-slate-200'}`}>
              <div className={`absolute top-1 h-4 w-4 rounded-full bg-white shadow-sm transition-all ${settings.advancedMode ? 'left-6' : 'left-1'}`}></div>
            </div>
          </div>

          <div className="pt-4 border-t border-slate-200 dark:border-slate-800">
            <button 
              onClick={onClose}
              className={`w-full rounded-xl py-3 text-sm font-bold text-white transition-all shadow-lg active:scale-[0.98] ${settings.darkMode ? 'bg-indigo-600 hover:bg-indigo-500 shadow-indigo-900/20' : 'bg-slate-900 hover:bg-slate-800 shadow-slate-200'}`}
            >
              Close & Apply
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsModal;
