
import React, { useState } from 'react';

interface LoginScreenProps {
  onLogin: () => void;
}

const LoginScreen: React.FC<LoginScreenProps> = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate a brief loading state for "interactivity"
    setTimeout(() => {
      onLogin();
    }, 1200);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-50 p-4 font-sans lg:p-0">
      <div className="flex w-full max-w-5xl overflow-hidden rounded-3xl bg-white shadow-2xl lg:h-[700px]">
        
        {/* Visual Side */}
        <div className="relative hidden w-1/2 flex-col justify-between bg-indigo-600 p-12 text-white lg:flex">
          <div className="absolute inset-0 opacity-10" style={{ 
            backgroundImage: `radial-gradient(#fff 1px, transparent 1px)`, 
            backgroundSize: '30px 30px' 
          }}></div>
          
          <div className="relative z-10">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/20 backdrop-blur-md">
              <span className="text-2xl font-bold">Σ</span>
            </div>
            <h1 className="mt-8 text-4xl font-black leading-tight">
              Unlock the <br />
              Power of <br />
              Mathematics.
            </h1>
            <p className="mt-4 text-lg text-indigo-100">
              Your personal interactive formula hub for Class 7 to 12.
            </p>
          </div>

          <div className="relative z-10">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="h-10 w-10 rounded-full border-2 border-indigo-600 bg-slate-200" 
                     style={{ backgroundImage: `url(https://i.pravatar.cc/100?img=${i+10})`, backgroundSize: 'cover' }}></div>
              ))}
              <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-indigo-600 bg-indigo-400 text-xs font-bold">
                +2k
              </div>
            </div>
            <p className="mt-2 text-sm text-indigo-100">Joined by 2,000+ students this month</p>
          </div>

          {/* Floating Math Elements Decoration */}
          <div className="absolute right-10 top-20 text-6xl opacity-20 floating">∫</div>
          <div className="absolute bottom-40 right-20 text-4xl opacity-20 floating" style={{ animationDelay: '1s' }}>π</div>
          <div className="absolute left-20 top-1/2 text-5xl opacity-20 floating" style={{ animationDelay: '2s' }}>√</div>
        </div>

        {/* Form Side */}
        <div className="flex w-full flex-col justify-center p-8 lg:w-1/2 lg:p-16">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-slate-900">Welcome Back</h2>
            <p className="text-slate-500">Please enter your details to access the formula hub.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">Email Address</label>
              <input 
                type="email" 
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@school.com"
                className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition-all focus:border-indigo-600 focus:bg-white focus:ring-4 focus:ring-indigo-100"
              />
            </div>
            <div>
              <div className="flex items-center justify-between">
                <label className="mb-2 block text-sm font-semibold text-slate-700">Password</label>
                <a href="#" className="text-xs font-semibold text-indigo-600 hover:underline">Forgot?</a>
              </div>
              <input 
                type="password" 
                required
                placeholder="••••••••"
                className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition-all focus:border-indigo-600 focus:bg-white focus:ring-4 focus:ring-indigo-100"
              />
            </div>

            <button 
              type="submit"
              disabled={isLoading}
              className="relative w-full overflow-hidden rounded-xl bg-indigo-600 py-4 font-bold text-white transition-all hover:bg-indigo-700 active:scale-[0.98] disabled:opacity-70 shadow-lg shadow-indigo-200"
            >
              {isLoading ? (
                <div className="flex items-center justify-center gap-2">
                  <div className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white"></div>
                  <span>Authenticating...</span>
                </div>
              ) : (
                "Enter the Hub"
              )}
            </button>
          </form>

          <p className="mt-8 text-center text-sm text-slate-500">
            Don't have an account? <a href="#" className="font-bold text-indigo-600 hover:underline">Sign up for free</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginScreen;
