import React, { useState, useMemo } from 'react';
import { CLASSES_DATA, GRADE_COLORS } from './constants';
import { ViewState, ClassData, AppSettings } from './types';
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
  
  // Settings State
  const [settings, setSettings] = useState<AppSettings>({
    darkMode: false,
    advancedMode: true
  });

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

  // Filter formulas based on Advanced Mode setting
  const filteredTopics = useMemo(() => {
    if (!selectedClass) return [];
    if (settings.advancedMode) return selectedClass.topics;

    return selectedClass.topics.map(topic => ({
      ...topic,
      formulas: topic.formulas.filter(f => !f.isAdvanced)
    })).filter(topic => topic.formulas.length > 0);
  }, [selectedClass, settings.advancedMode]);

  if (view === ViewState.LOGIN) {
    return <LoginScreen onLogin={handleLogin} />;
  }

  const themeClass = settings.darkMode ? 'dark bg-slate-950 text-slate-100' : 'bg-slate-50 text-slate-900';

  return (
    <div className={`min-h-screen font-sans selection:bg-indigo-100 transition-colors duration-300 ${themeClass}`}>
      <SettingsModal 
        isOpen={isSettingsOpen} 
        onClose={() => setIsSettingsOpen(false)} 
        settings={settings}
        onUpdate={setSettings}
      />
      <CreatorModal isOpen={isCreatorOpen} onClose={() => setIsCreatorOpen(false)} />

      {/* Header */}
      <header className={`sticky top-0 z-40 border-b backdrop-blur-md transition-colors ${settings.darkMode ? 'border-slate-800 bg-slate-950/80' : 'border-slate-200 bg-white/80'}`}>
        <div className="mx-auto flex max-w-7xl items-center justify-between px-3 py-4 sm:px-6">
          <button 
            onClick={goHome}
            className={`flex items-center gap-2 text-xl sm:text-2xl font-extrabold transition-opacity hover:opacity-80 ${settings.darkMode ? 'text-white' : 'text-slate-900'}`}
          >
            <div className="flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-lg sm:rounded-xl bg-indigo-600 text-white shadow-lg shadow-indigo-500/20">
              <span className="text-lg sm:text-xl font-bold">Σ</span>
            </div>
            <span className="tracking-tight hidden xs:inline">MathMaster</span>
          </button>
          
          <nav className="hidden lg:flex space-x-8">
            <button onClick={goHome} className={`text-sm font-semibold transition-colors uppercase tracking-widest ${settings.darkMode ? 'text-slate-400 hover:text-indigo-400' : 'text-slate-600 hover:text-indigo-600'}`}>Home</button>
            <button className={`text-sm font-semibold transition-colors uppercase tracking-widest ${settings.darkMode ? 'text-slate-400 hover:text-indigo-400' : 'text-slate-600 hover:text-indigo-600'}`}>Formula Hub</button>
            <button className={`text-sm font-semibold transition-colors uppercase tracking-widest ${settings.darkMode ? 'text-slate-400 hover:text-indigo-400' : 'text-slate-600 hover:text-indigo-600'}`}>Library</button>
          </nav>

          <div className="flex items-center gap-2 sm:gap-4">
            <button 
              onClick={() => setIsSettingsOpen(true)}
              className={`p-1.5 sm:p-2 transition-colors rounded-xl ${settings.darkMode ? 'text-slate-500 hover:text-indigo-400 hover:bg-slate-900' : 'text-slate-400 hover:text-indigo-600 hover:bg-slate-100'}`}
              title="Settings"
            >
              <svg className="h-5 w-5 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </button>

            <button 
              onClick={() => setIsCreatorOpen(true)}
              className={`flex items-center gap-1.5 sm:gap-2 rounded-lg sm:rounded-xl px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-bold transition-all ${settings.darkMode ? 'bg-indigo-900/30 text-indigo-400 border-indigo-900/50 hover:bg-indigo-900/50' : 'bg-indigo-50 text-indigo-600 border-indigo-200 hover:bg-indigo-100'} border`}
            >
              Creator
            </button>
            
            <button 
              onClick={handleSignOut}
              className={`rounded-lg sm:rounded-xl px-3 py-1.5 sm:px-5 sm:py-2 text-xs sm:text-sm font-bold transition-all shadow-lg whitespace-nowrap ${settings.darkMode ? 'bg-white text-slate-900 hover:bg-slate-200' : 'bg-slate-900 text-white hover:bg-slate-800 shadow-slate-200'}`}
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
              <h1 className={`mb-4 text-4xl font-black tracking-tight sm:text-7xl ${settings.darkMode ? 'text-white' : 'text-slate-900'}`}>
                The Complete <br />
                <span className="bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent italic">Formula Hub.</span>
              </h1>
              <p className={`mx-auto max-w-2xl text-base sm:text-lg font-medium leading-relaxed ${settings.darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                A massive central repository covering Class 7 to Class 12. 
                Now featuring comprehensive formula sheets for all major chapters.
              </p>
            </div>

            <div className="grid gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3">
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
              className={`group mb-8 flex items-center gap-2 font-bold transition-colors ${settings.darkMode ? 'text-slate-500 hover:text-indigo-400' : 'text-slate-400 hover:text-indigo-600'}`}
            >
              <svg className="h-5 w-5 transition-transform group-hover:-translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              BACK TO HUB
            </button>

            <div className={`mb-12 rounded-3xl sm:rounded-[2.5rem] p-8 sm:p-12 text-white shadow-2xl bg-gradient-to-r ${selectedClass ? GRADE_COLORS[selectedClass.grade] : ''} relative overflow-hidden`}>
               <div className="absolute top-0 right-0 p-10 opacity-10 pointer-events-none scale-150 hidden sm:block">
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
                <h2 className="text-4xl sm:text-6xl font-black tracking-tighter">{selectedClass?.label}</h2>
                <p className="mt-4 text-lg sm:text-2xl text-white/90 font-light max-w-xl">
                  {filteredTopics.length} specialized chapters unlocked. Explore the core curriculum theorems and identities.
                </p>
              </div>
            </div>

            {filteredTopics.map((topic, tIdx) => (
              <div key={tIdx} className="mb-16 sm:mb-20">
                <div className="flex items-center gap-3 sm:gap-5 mb-8 sm:mb-10 border-b border-slate-200 dark:border-slate-800 pb-4">
                  <div className={`h-10 sm:h-14 w-2 sm:w-2.5 rounded-full bg-gradient-to-b ${GRADE_COLORS[selectedClass!.grade]} shadow-lg`}></div>
                  <h3 className={`text-2xl sm:text-4xl font-black uppercase tracking-tighter ${settings.darkMode ? 'text-slate-100' : 'text-slate-800'}`}>
                    {topic.name}
                  </h3>
                </div>
                <div className="grid gap-6 sm:gap-8 md:grid-cols-2">
                  {topic.formulas.map((formula) => (
                    <FormulaItem 
                      key={formula.id} 
                      formula={formula} 
                      grade={selectedClass!.grade}
                      isDark={settings.darkMode}
                    />
                  ))}
                </div>
              </div>
            ))}
            
            {/* Math AI Buddy integration */}
            {selectedClass && <MathBuddy grade={selectedClass.grade} isDark={settings.darkMode} />}
          </div>
        )}
      </main>

      <footer className={`mt-32 border-t py-16 sm:py-24 transition-colors ${settings.darkMode ? 'border-slate-800 bg-slate-950' : 'border-slate-200 bg-white'}`}>
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6">
          <div className="flex justify-center mb-8 sm:mb-10">
            <div className={`flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-[1.25rem] transition-all hover:scale-110 cursor-pointer ${settings.darkMode ? 'bg-white text-slate-900 shadow-white/5' : 'bg-slate-900 text-white shadow-2xl'}`}>
              <span className="text-xl sm:text-2xl font-bold">Σ</span>
            </div>
          </div>
          <p className={`text-xl sm:text-2xl font-black tracking-tight ${settings.darkMode ? 'text-white' : 'text-slate-900'}`}>MathMaster Formula Hub</p>
          <p className={`mt-3 text-sm sm:text-base font-medium max-w-md mx-auto leading-relaxed px-4 ${settings.darkMode ? 'text-slate-500' : 'text-slate-400'}`}>
            The world's most elegant formula repository for school students. Built for performance and clarity.
          </p>
          <div className={`mt-10 flex flex-wrap justify-center gap-6 sm:gap-10 text-[10px] sm:text-xs font-black uppercase tracking-widest ${settings.darkMode ? 'text-slate-600' : 'text-slate-400'}`}>
            <button className="hover:text-indigo-400 transition-colors">Privacy</button>
            <button className="hover:text-indigo-400 transition-colors">Terms</button>
            <button className="hover:text-indigo-400 transition-colors">Global Support</button>
          </div>
          <p className={`mt-16 sm:mt-20 text-[8px] sm:text-[10px] font-black tracking-[0.2em] uppercase ${settings.darkMode ? 'text-slate-700' : 'text-slate-300'}`}>&copy; 2024 MATHMASTER HUB &bull; SR KADHIR NELAVAN</p>
        </div>
      </footer>
    </div>
  );
};

export default App;