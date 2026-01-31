
import React from 'react';
import { Play, CheckCircle2, Sparkles } from 'lucide-react';

export const Hero: React.FC = () => {
  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-medium text-amber-400 mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <Sparkles className="w-3 h-3 text-amber-400 animate-pulse" />
          Empowering organizations with Golden-Standard Security
        </div>
        
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white mb-6 animate-in fade-in slide-in-from-bottom-8 duration-1000">
          Secure. Compliant. <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-amber-400 to-purple-400 drop-shadow-[0_0_15px_rgba(251,191,36,0.3)]">
            Automated Future.
          </span>
        </h1>
        
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-zinc-400 mb-10 animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-200">
          <span className="text-amber-400 font-bold">Oasiscybertech</span> provides elite cybersecurity consulting and professional risk management services for global organizations.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-300">
          <button 
            onClick={scrollToContact}
            className="w-full sm:w-auto px-10 py-4 rounded-full bg-gradient-to-r from-amber-400 to-amber-600 text-zinc-950 font-extrabold hover:opacity-90 transition-all flex items-center justify-center gap-2 group gold-glow"
          >
            <Play className="w-5 h-5 fill-current" /> Watch Demo
          </button>
        </div>
      </div>
    </section>
  );
};
