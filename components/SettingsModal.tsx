
import React from 'react';

interface SettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SettingsModal: React.FC<SettingsModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 backdrop-blur-sm bg-slate-900/40 animate-fadeIn">
      <div className="w-full max-w-md overflow-hidden rounded-3xl bg-white shadow-2xl animate-slideUp">
        <div className="bg-slate-900 p-6 text-white flex justify-between items-center">
          <div>
            <h3 className="text-xl font-bold">App Settings</h3>
            <p className="text-xs text-slate-400">Total control over your experience</p>
          </div>
          <button onClick={onClose} className="rounded-full bg-white/10 p-2 hover:bg-white/20">
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        <div className="p-6 space-y-6">
          <div className="flex items-center justify-between opacity-50 cursor-not-allowed">
            <div>
              <h4 className="font-semibold text-slate-800">Dark Mode</h4>
              <p className="text-xs text-slate-500">Night-friendly interface (Coming soon)</p>
            </div>
            <div className="h-6 w-11 rounded-full bg-slate-200 relative">
              <div className="absolute left-1 top-1 h-4 w-4 rounded-full bg-white"></div>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-semibold text-slate-800">Advanced Formulas</h4>
              <p className="text-xs text-slate-500">Show extra complex math variants</p>
            </div>
            <div className="h-6 w-11 rounded-full bg-slate-200 relative">
              <div className="absolute left-1 top-1 h-4 w-4 rounded-full bg-white shadow-sm"></div>
            </div>
          </div>

          <div className="pt-4 border-t">
            <button 
              onClick={onClose}
              className="w-full rounded-xl bg-slate-100 py-3 text-sm font-bold text-slate-700 hover:bg-slate-200 transition-colors"
            >
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsModal;
