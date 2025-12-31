import React, { useState } from 'react';
import { CLASSES_DATA, GRADE_COLORS } from './constants';
import { ViewState, ClassData } from './types';
import GradeCard from './components/GradeCard';
import FormulaItem from './components/FormulaItem';
import LoginScreen from './components/LoginScreen';
import SettingsModal from './components/SettingsModal';
import CreatorModal from './components/CreatorModal';

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
    window.scrollTo(0, 0);
  };

  const goHome = () => {
    setView(ViewState.HOME);
    setSelectedClass(null);
  };

  if (view === ViewState.LOGIN) {
    return <LoginScreen onLogin={handleLogin} />;
  }

  return (
    <div className="min-h-screen bg-slate-50 font-sans">
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
            <button onClick={goHome} className="text-sm font-semibold text-slate-600 hover:text-indigo-600 transition-colors">Home</button>
            <button className="text-sm font-semibold text-slate-600 hover:text-indigo-600 transition-colors">All Formulas</button>
            <button className="text-sm font-semibold text-slate-600 hover:text-indigo-600 transition-colors">Resources</button>
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
              className="rounded-xl bg-slate-900 px-5 py-2 text-sm font-bold text-white transition-all hover:bg-slate-800 shadow-lg"
            >
              Sign Out
            </button>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
        {view === ViewState.HOME ? (
          <section className="animate-fadeIn">
            <div className="mb-16 text-center">
              <h1 className="mb-4 text-5xl font-black tracking-tight text-slate-900 sm:text-6xl">
                Master Math Formulas <br />
                <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">effortlessly.</span>
              </h1>
              <p className="mx-auto max-w-2xl text-lg text-slate-600">
                A massive, interactive formula library for classes 7 to 12. 
                Find every theorem, identity, and derivative you need in one place.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {CLASSES_DATA.map((cls) => (
                <GradeCard 
                  key={cls.grade} 
                  grade={cls.grade} 
                  label={cls.label} 
                  onClick={() => handleClassSelect(cls)}
                />
              ))}
            </div>
          </section>
        ) : (
          <section className="animate-fadeIn">
            <button 
              onClick={goHome}
              className="mb-8 flex items-center gap-2 font-semibold text-slate-500 transition-colors hover:text-indigo-600"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Grades
            </button>

            <div className={`mb-12 rounded-3xl p-8 text-white shadow-xl bg-gradient-to-r ${selectedClass ? GRADE_COLORS[selectedClass.grade] : ''}`}>
              <h2 className="text-4xl font-bold">{selectedClass?.label} Mathematics</h2>
              <p className="mt-2 text-lg text-white/90">Curated collection of essential formulas for your curriculum.</p>
            </div>

            {selectedClass?.topics.map((topic, tIdx) => (
              <div key={tIdx} className="mb-12">
                <h3 className="mb-6 border-b-2 border-slate-200 pb-2 text-2xl font-bold text-slate-800">
                  {topic.name}
                </h3>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
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
          </section>
        )}
      </main>

      <footer className="mt-20 border-t border-slate-200 bg-white py-12">
        <div className="mx-auto max-w-7xl px-4 text-center text-slate-500 sm:px-6">
          <p className="font-medium text-slate-900">MathMaster Hub</p>
          <p className="mt-1">Handcrafted with care for students around the world.</p>
          <p className="mt-4 font-bold text-slate-700">&copy; 2024 MathMaster Hub by SR KADHIR NELAVAN.</p>
          <div className="mt-6 flex justify-center gap-6 text-sm">
            <button className="hover:text-indigo-600 transition-colors">Privacy Policy</button>
            <button className="hover:text-indigo-600 transition-colors">Terms of Service</button>
            <button className="hover:text-indigo-600 transition-colors">Contact Creator</button>
          </div>
        </div>
      </footer>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn { animation: fadeIn 0.4s ease-out forwards; }
        .animate-slideUp { animation: slideUp 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
      `}</style>
    </div>
  );
};

export default App;