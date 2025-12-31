
import React from 'react';

interface CreatorModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CreatorModal: React.FC<CreatorModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 backdrop-blur-sm bg-indigo-900/40 animate-fadeIn">
      <div className="w-full max-w-sm overflow-hidden rounded-3xl bg-white shadow-2xl animate-slideUp text-center">
        <div className="h-24 bg-gradient-to-r from-indigo-600 to-purple-600"></div>
        <div className="relative -mt-12 px-6 pb-8">
          <div className="mx-auto h-24 w-24 rounded-full border-4 border-white bg-slate-200 shadow-lg overflow-hidden flex items-center justify-center transition-transform hover:scale-110">
            <span className="text-3xl font-black text-indigo-600">SK</span>
          </div>
          <h3 className="mt-4 text-2xl font-black text-slate-900 uppercase">SR KADHIR NELAVAN</h3>
          <p className="text-indigo-600 font-bold text-sm tracking-widest uppercase mt-2 px-4">
            AND THE CREATOR OF GEOCOMMAND APP
          </p>
          <div className="mt-6 flex justify-center gap-4">
             <div className="p-3 bg-slate-50 rounded-2xl border border-slate-100 flex-1">
                <p className="text-xs text-slate-400 uppercase font-bold">Role</p>
                <p className="text-sm font-bold text-slate-700">Lead Creator</p>
             </div>
             <div className="p-3 bg-slate-50 rounded-2xl border border-slate-100 flex-1">
                <p className="text-xs text-slate-400 uppercase font-bold">Project</p>
                <p className="text-sm font-bold text-slate-700">GeoCommand</p>
             </div>
          </div>
          <button 
            onClick={onClose}
            className="mt-8 w-full rounded-xl bg-indigo-600 py-3 font-bold text-white shadow-lg shadow-indigo-100 hover:bg-indigo-700 transition-all active:scale-95"
          >
            Close Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreatorModal;
