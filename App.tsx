
import React, { useState } from 'react';
import { CLASSES_DATA, GRADE_COLORS } from './constants';
import { ViewState, ClassData } from './types';
import GradeCard from './components/GradeCard';
import FormulaItem from './components/FormulaItem';
import LoginScreen from './components/LoginScreen';
import SettingsModal from './components/SettingsModal';
import CreatorModal from './components/CreatorModal';
import MathBuddy from './components/MathBuddy';

const App: React.FC = () => {
  const [view, setView] = useState<ViewState>(ViewState.LOGIN);
  const [selectedClass, setSelectedClass] = useState<ClassData | null>(null);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [isCreatorOpen, setIsCreatorOpen] = useState(false);

  const handleLogin = () => {
    setView(ViewState.HOME);
  };

  const handleSignOut = () => {
    setView(ViewState.LOGIN);
    setSelectedClass(null);
  };

  const handleClassSelect = (cls: ClassData) => {
    setSelectedClass(cls);
    setView(ViewState.CLASS_DETAIL);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const goHome = () => {
    setView(ViewState.HOME);
    setSelectedClass(null);
  };

  if (view === ViewState.LOGIN) {
    return <LoginScreen onLogin={handleLogin} />;
  }

  return (
    <div className="min-h-screen bg-slate-50 font-sans selection:bg-indigo-100">
      <SettingsModal isOpen={isSettingsOpen} onClose={() => setIsSettingsOpen(false)} />
      <CreatorModal isOpen={isCreatorOpen} onClose={() => setIsCreatorOpen(false)} />

      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6">
          <button 
            onClick={goHome}
            className="flex items-center gap-2 text-2xl font-extrabold text-slate-900 transition-opacity hover:opacity-80"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-600 text-white shadow-lg shadow-indigo-100">
              <span className="text-xl">Σ</span>
            </div>
            <span className="tracking-tight hidden sm:inline">MathMaster</span>
          </button>
          
          <nav className="hidden lg:flex space-x-8">
            <button onClick={goHome} className="text-sm font-semibold text-slate-600 hover:text-indigo-600 transition-colors uppercase tracking-widest">Home</button>
            <button className="text-sm font-semibold text-slate-600 hover:text-indigo-600 transition-colors uppercase tracking-widest">Formula Hub</button>
            <button className="text-sm font-semibold text-slate-600 hover:text-indigo-600 transition-colors uppercase tracking-widest">Library</button>
          </nav>

          <div className="flex items-center gap-2 sm:gap-4">
            <button 
              onClick={() => setIsSettingsOpen(true)}
              className="p-2 text-slate-400 hover:text-indigo-600 transition-colors rounded-xl hover:bg-slate-100"
              title="Settings"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </button>

            <button 
              onClick={() => setIsCreatorOpen(true)}
              className="hidden sm:flex items-center gap-2 rounded-xl bg-indigo-50 px-4 py-2 text-sm font-bold text-indigo-600 transition-all hover:bg-indigo-100 border border-indigo-200"
            >
              Creator
            </button>
            
            <button 
              onClick={handleSignOut}
              className="rounded-xl bg-slate-900 px-5 py-2 text-sm font-bold text-white transition-all hover:bg-slate-800 shadow-lg shadow-slate-200"
            >
              Sign Out
            </button>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
        {view === ViewState.HOME ? (
          <div className="animate-fadeIn">
            <div className="mb-16 text-center">
              <h1 className="mb-4 text-5xl font-black tracking-tight text-slate-900 sm:text-7xl">
                The Complete <br />
                <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent italic">Formula Hub.</span>
              </h1>
              <p className="mx-auto max-w-2xl text-lg text-slate-500 font-medium leading-relaxed">
                A massive central repository covering Class 7 to Class 12. 
                Now featuring comprehensive formula sheets for all major chapters.
              </p>
            </div>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {CLASSES_DATA.map((cls) => (
                <GradeCard 
                  key={cls.grade} 
                  grade={cls.grade} 
                  label={cls.label} 
                  onClick={() => handleClassSelect(cls)}
                />
              ))}
            </div>
          </div>
        ) : (
          <div className="animate-fadeIn">
            <button 
              onClick={goHome}
              className="group mb-8 flex items-center gap-2 font-bold text-slate-400 transition-colors hover:text-indigo-600"
            >
              <svg className="h-5 w-5 transition-transform group-hover:-translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              BACK TO HUB
            </button>

            <div className={`mb-12 rounded-[2.5rem] p-12 text-white shadow-2xl bg-gradient-to-r ${selectedClass ? GRADE_COLORS[selectedClass.grade] : ''} relative overflow-hidden`}>
               <div className="absolute top-0 right-0 p-10 opacity-10 pointer-events-none scale-150">
                 <svg width="200" height="200" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"/>
                    <line x1="14.31" y1="8" x2="20.05" y2="17.94"/>
                    <line x1="9.69" y1="8" x2="21.17" y2="8"/>
                    <line x1="7.38" y1="12" x2="13.12" y2="2.06"/>
                    <line x1="9.69" y1="16" x2="3.95" y2="6.06"/>
                    <line x1="14.31" y1="16" x2="2.83" y2="16"/>
                    <line x1="16.62" y1="12" x2="10.88" y2="21.94"/>
                 </svg>
               </div>
               <div className="relative z-10">
                <h2 className="text-6xl font-black tracking-tighter">{selectedClass?.label}</h2>
                <p className="mt-4 text-2xl text-white/90 font-light max-w-xl">
                  {selectedClass?.topics.length} specialized chapters unlocked. Explore the core curriculum theorems and identities.
                </p>
              </div>
            </div>

            {selectedClass?.topics.map((topic, tIdx) => (
              <div key={tIdx} className="mb-20">
                <div className="flex items-center gap-5 mb-10">
                  <div className={`h-14 w-2.5 rounded-full bg-gradient-to-b ${GRADE_COLORS[selectedClass.grade]} shadow-lg`}></div>
                  <h3 className="text-4xl font-black text-slate-800 uppercase tracking-tighter">
                    {topic.name}
                  </h3>
                </div>
                <div className="grid gap-8 md:grid-cols-2">
                  {topic.formulas.map((formula) => (
                    <FormulaItem 
                      key={formula.id} 
                      formula={formula} 
                      grade={selectedClass.grade}
                    />
                  ))}
                </div>
              </div>
            ))}
            
            {/* Math AI Buddy integration */}
            {selectedClass && <MathBuddy grade={selectedClass.grade} />}
          </div>
        )}
      </main>

      <footer className="mt-32 border-t border-slate-200 bg-white py-24">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6">
          <div className="flex justify-center mb-10">
            <div className="flex h-16 w-16 items-center justify-center rounded-[1.25rem] bg-slate-900 text-white shadow-2xl hover:scale-110 transition-transform cursor-pointer">
              <span className="text-2xl font-bold">Σ</span>
            </div>
          </div>
          <p className="text-2xl font-black text-slate-900 tracking-tight">MathMaster Formula Hub</p>
          <p className="mt-3 text-slate-400 font-medium max-w-md mx-auto leading-relaxed">
            The world's most elegant formula repository for school students. Built for performance and clarity.
          </p>
          <div className="mt-12 flex justify-center gap-10 text-xs font-black text-slate-400 uppercase tracking-widest">
            <button className="hover:text-indigo-600 transition-colors">Privacy</button>
            <button className="hover:text-indigo-600 transition-colors">Terms</button>
            <button className="hover:text-indigo-600 transition-colors">Global Support</button>
          </div>
          <p className="mt-20 text-[10px] font-black text-slate-300 tracking-[0.2em] uppercase">&copy; 2024 MATHMASTER HUB &bull; SR KADHIR NELAVAN</p>
        </div>
      </footer>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn { animation: fadeIn 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(40px) scale(0.95); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        .animate-slideUp { animation: slideUp 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
      `}</style>
    </div>
  );
};

export default App;
