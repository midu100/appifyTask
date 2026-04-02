import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Globe, Shield, Zap } from 'lucide-react';

const Landing = () => {
  return (
    <div className="min-h-screen relative text-white font-sans overflow-hidden bg-slate-950">
      
      {/* Cinematic High Resolution Background with Slow Zoom Animation to feel like video */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden pointer-events-none">
        <img 
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2672&auto=format&fit=crop" 
          alt="Cinematic Network Background" 
          className="absolute inset-0 w-full h-full object-cover origin-center transition-transform duration-1000"
          style={{ animation: 'slowZoom 30s infinite alternate ease-in-out' }}
        />
        {/* Dark Black Cinematic Overlay */}
        <div className="absolute inset-0 bg-slate-950/80 backdrop-blur-[1px]"></div>
      </div>

      {/* Subtle Color Orbs floating above the overlay */}
      <div className="absolute top-0 right-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-indigo-500/20 rounded-full mix-blend-screen filter blur-[120px] animate-blob"></div>
        <div className="absolute top-[20%] -right-[10%] w-[40%] h-[40%] bg-purple-500/20 rounded-full mix-blend-screen filter blur-[120px] animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-[20%] left-[20%] w-[50%] h-[50%] bg-pink-500/10 rounded-full mix-blend-screen filter blur-[120px] animate-blob animation-delay-4000"></div>
      </div>

      <nav className="relative z-10 flex justify-between items-center px-6 py-6 max-w-7xl mx-auto">
        <div className="text-2xl font-black tracking-tighter">
          Connect<span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">Hub</span>
        </div>
        <div className="flex items-center space-x-6">
          <Link to="/login" className="text-sm font-medium hover:text-indigo-400 transition-colors hidden sm:block">Sign In</Link>
          <Link to="/register" className="px-6 py-2.5 text-sm font-semibold bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-full hover:bg-white/20 transition shadow-[0_0_20px_rgba(255,255,255,0.05)] hover:shadow-[0_0_25px_rgba(255,255,255,0.1)]">
            Create Account
          </Link>
        </div>
      </nav>

      <main className="relative z-10 max-w-7xl mx-auto px-6 mt-16 lg:mt-24 pb-32 flex flex-col lg:flex-row items-center">
        <div className="lg:w-1/2 text-center lg:text-left z-20">
          <div className="inline-flex items-center px-3 py-1.5 rounded-full border border-indigo-400/30 bg-indigo-900/30 backdrop-blur-md text-indigo-300 text-xs sm:text-sm font-medium mb-8">
            <Zap size={14} className="mr-2 text-yellow-400" /> New features just landed 2026!
          </div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight mb-8 leading-[1.1]">
            Experience a <br className="hidden sm:block" />
            <span className="relative">
              <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-300">
                Limitless Network
              </span>
              <span className="absolute bottom-1 sm:bottom-2 left-0 w-full h-3 sm:h-4 bg-indigo-500/30 -z-10 -rotate-2"></span>
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-slate-300 mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed font-light drop-shadow-md">
            Skip the noise. ConnectHub is an invite-only premium space designed for creators, thinkers, and builders to share without boundaries.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Link to="/register" className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 rounded-full font-bold text-white text-lg transition flex items-center justify-center group shadow-[0_0_30px_rgba(79,70,229,0.4)] border border-white/10">
              Claim Your Space <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
        
        <div className="lg:w-1/2 mt-20 lg:mt-0 relative w-full z-10">
           <div className="relative w-full max-w-lg mx-auto aspect-square">
             {/* Floating UI Elements over the cinematic background */}
             <div className="absolute top-10 right-0 sm:-right-10 bg-slate-900/60 backdrop-blur-xl border border-slate-700/50 p-5 rounded-2xl shadow-2xl animate-bounce-slow z-20">
               <div className="flex items-center gap-4">
                 <div className="w-12 h-12 rounded-full bg-gradient-to-br from-pink-500 to-orange-400 p-0.5">
                   <div className="w-full h-full bg-slate-900 rounded-full flex items-center justify-center text-xs font-bold text-white">PRO</div>
                 </div>
                 <div>
                   <div className="w-28 h-2.5 bg-slate-600 rounded-full mb-2"></div>
                   <div className="w-20 h-2 bg-slate-700 rounded-full"></div>
                 </div>
               </div>
             </div>
             
             <div className="absolute bottom-20 left-0 sm:-left-10 bg-slate-900/60 backdrop-blur-xl border border-slate-700/50 p-6 rounded-2xl shadow-2xl animate-bounce-slow" style={{ animationDelay: '1.5s'}}>
                <div className="flex justify-between items-center mb-4 gap-6">
                   <div className="w-32 h-3 bg-slate-600 rounded-full"></div>
                   <div className="w-10 h-10 rounded-full bg-indigo-500/20 border border-indigo-500/30 flex items-center justify-center text-indigo-400"><Globe size={18}/></div>
                </div>
                <div className="w-full h-2 rounded-full bg-slate-700 mt-2"></div>
                <div className="w-3/4 h-2 rounded-full bg-slate-700 mt-2"></div>
                <div className="w-5/6 h-2 rounded-full bg-slate-700 mt-2"></div>
             </div>
             
             {/* Main Center Glass Object */}
             <div className="absolute inset-0 m-auto w-64 h-64 sm:w-80 sm:h-80 bg-gradient-to-tr from-indigo-500/40 via-purple-500/40 to-pink-500/40 rounded-full rotate-12 opacity-80 filter blur-2xl animate-pulse"></div>
             <div className="absolute inset-0 m-auto w-64 h-64 sm:w-80 sm:h-80 bg-slate-900/40 backdrop-blur-2xl border border-white/10 rounded-[2.5rem] -rotate-3 hover:rotate-0 transition-transform duration-700 shadow-2xl flex flex-col items-center justify-center relative overflow-hidden group">
               <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/40 to-transparent"></div>
               <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/10 to-transparent"></div>
               <Shield size={72} className="text-white/40 group-hover:text-white/70 transition-colors duration-500 group-hover:scale-110 drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]" />
               <div className="mt-8 text-center px-6 relative z-10">
                  <div className="text-xl font-bold text-white drop-shadow-md">Bank-grade Security</div>
                  <div className="text-xs text-slate-300 mt-2 drop-shadow-md">Your data never leaves the vault.</div>
               </div>
             </div>
           </div>
        </div>
      </main>

      {/* CSS for slow zoom embedded directly for convenience, though could be in index.css */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes slowZoom {
          0% { transform: scale(1); }
          100% { transform: scale(1.15); }
        }
      `}} />
    </div>
  );
};

export default Landing;
