
import React from 'react';
import { ShieldCheck, BarChart3, FileText, Globe, CheckCircle2, Layout } from 'lucide-react';

export const OasisTool: React.FC = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const features = [
    {
      icon: <ShieldCheck className="w-5 h-5 text-amber-400" />,
      title: "TPRM",
      desc: "Third-Party Risk Management for vendor ecosystems."
    },
    {
      icon: <BarChart3 className="w-5 h-5 text-blue-400" />,
      title: "Risk Management",
      desc: "Quantify and mitigate organizational vulnerabilities."
    },
    {
      icon: <FileText className="w-5 h-5 text-purple-400" />,
      title: "Policy Management",
      desc: "Centralized library for automated lifecycle management."
    },
    {
      icon: <Globe className="w-5 h-5 text-emerald-400" />,
      title: "SEBI Compliance",
      desc: "Native frameworks for Indian regulatory standards."
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="relative p-8 md:p-16 rounded-[2.5rem] bg-zinc-900/40 border border-zinc-800 overflow-hidden group">
        {/* Decorative Gradients */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-600/5 to-transparent pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-purple-600/5 blur-[120px] pointer-events-none" />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/10 text-amber-400 text-xs font-bold mb-6 uppercase tracking-wider">
              The Oasis Platform
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              A Unified GRC <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-amber-400 to-purple-400 gold-text-glow">Control Center.</span>
            </h2>
            <p className="text-zinc-400 text-lg mb-10 max-w-lg">
              Manage your entire security program—from TPRM to SEBI compliance—in a single, automated dashboard built for modern enterprises.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
              {features.map((f, i) => (
                <div key={i} className="flex gap-4">
                  <div className="mt-1 p-2 rounded-lg bg-zinc-950/50 border border-zinc-800">
                    {f.icon}
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-sm">{f.title}</h4>
                    <p className="text-zinc-500 text-xs leading-relaxed">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <button 
              onClick={scrollToContact}
              className="px-8 py-4 rounded-xl bg-amber-400 text-zinc-950 font-bold hover:bg-amber-300 transition-all gold-glow flex items-center gap-2 group"
            >
              Get Oasis Early Access
              <CheckCircle2 className="w-5 h-5 group-hover:scale-110 transition-transform" />
            </button>
          </div>

          {/* Generic Dashboard Mockup */}
          <div className="relative lg:h-[500px] flex items-center justify-center">
             <div className="relative w-full max-w-lg aspect-[4/3] rounded-2xl bg-zinc-950 border border-zinc-800 shadow-2xl overflow-hidden animate-float">
                {/* Dashboard Header */}
                <div className="h-10 border-b border-zinc-800 flex items-center px-4 gap-2 bg-zinc-900/50">
                   <div className="w-2 h-2 rounded-full bg-red-500/50" />
                   <div className="w-2 h-2 rounded-full bg-amber-500/50" />
                   <div className="w-2 h-2 rounded-full bg-emerald-500/50" />
                   <div className="flex-grow text-[10px] text-zinc-600 text-center font-mono">oasis.dashboard.v2.internal</div>
                </div>
                {/* Dashboard Content */}
                <div className="p-4 grid grid-cols-12 gap-3 h-full">
                   {/* Sidebar */}
                   <div className="col-span-3 space-y-2 border-r border-zinc-800/50 pr-2">
                      {[...Array(5)].map((_, i) => (
                        <div key={i} className={`h-2 rounded bg-zinc-800/50 ${i === 0 ? 'bg-amber-400/20' : ''}`} style={{width: `${Math.random() * 40 + 50}%`}} />
                      ))}
                   </div>
                   {/* Main Charts */}
                   <div className="col-span-9 space-y-4">
                      <div className="grid grid-cols-3 gap-3">
                         <div className="h-16 rounded-lg bg-blue-500/5 border border-blue-500/10 p-2">
                            <div className="w-full h-1 bg-blue-500/20 rounded mb-2" />
                            <div className="w-2/3 h-3 bg-white/5 rounded" />
                         </div>
                         <div className="h-16 rounded-lg bg-amber-500/5 border border-amber-500/10 p-2">
                            <div className="w-full h-1 bg-amber-500/20 rounded mb-2" />
                            <div className="w-1/2 h-3 bg-white/5 rounded" />
                         </div>
                         <div className="h-16 rounded-lg bg-purple-500/5 border border-purple-500/10 p-2">
                            <div className="w-full h-1 bg-purple-500/20 rounded mb-2" />
                            <div className="w-3/4 h-3 bg-white/5 rounded" />
                         </div>
                      </div>
                      <div className="h-32 rounded-lg bg-zinc-900/50 border border-zinc-800 p-4 flex flex-col justify-end gap-1">
                         <div className="flex items-end gap-1 h-full">
                            {[40, 70, 45, 90, 65, 80, 55, 30, 60, 85].map((h, i) => (
                               <div key={i} className="flex-grow bg-gradient-to-t from-blue-600 to-purple-600 rounded-t-sm opacity-50" style={{height: `${h}%`}} />
                            ))}
                         </div>
                         <div className="w-full h-1 bg-zinc-800 rounded mt-2" />
                      </div>
                      <div className="space-y-2">
                         <div className="flex justify-between items-center">
                            <div className="w-1/3 h-2 bg-zinc-800 rounded" />
                            <div className="w-8 h-2 bg-emerald-500/20 rounded" />
                         </div>
                         <div className="flex justify-between items-center">
                            <div className="w-1/4 h-2 bg-zinc-800 rounded" />
                            <div className="w-8 h-2 bg-emerald-500/20 rounded" />
                         </div>
                      </div>
                   </div>
                </div>
             </div>
             {/* Floating Badge */}
             <div className="absolute -bottom-4 -right-4 p-4 rounded-2xl bg-zinc-900 border border-amber-400/30 shadow-2xl z-20 hidden md:block">
                <div className="flex items-center gap-3">
                   <div className="p-2 rounded-full bg-amber-400/20">
                      <Layout className="w-4 h-4 text-amber-400" />
                   </div>
                   <div>
                      <div className="text-[10px] text-zinc-500 font-bold uppercase">Risk Score</div>
                      <div className="text-xl font-bold text-white">98.4<span className="text-amber-400 text-sm">%</span></div>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};
