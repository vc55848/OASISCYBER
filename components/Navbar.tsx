
import React, { useState } from 'react';
import { Shield, Menu, X } from 'lucide-react';

interface NavbarProps {
  scrolled: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({ scrolled }) => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToId = (id: string) => {
    const element = document.getElementById(id.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsOpen(false);
    }
  };

  const navItems = [
    { label: 'Consulting', href: 'services' },
    { label: 'Oasis Tool', href: 'tool' },
    { label: 'Training', href: 'training' },
    { label: 'Contact', href: 'contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-zinc-950/90 backdrop-blur-xl border-b border-zinc-800/50 py-3' : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <div className="flex items-center gap-2 group cursor-pointer" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
          <div className="p-2 rounded-xl bg-gradient-to-br from-blue-600 via-amber-400 to-purple-600 group-hover:scale-110 transition-transform shadow-lg shadow-amber-400/10">
            <Shield className="w-6 h-6 text-white" />
          </div>
          <span className="text-xl font-bold tracking-tight text-white">
            Oasis<span className="text-amber-400 gold-text-glow">cybertech</span>
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button 
              key={item.label} 
              onClick={() => scrollToId(item.href)}
              className="text-sm font-medium text-zinc-400 hover:text-white transition-colors relative group"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-400 group-hover:w-full transition-all duration-300" />
            </button>
          ))}
          <button 
            onClick={() => scrollToId('contact')}
            className="px-5 py-2.5 rounded-full bg-amber-400 text-zinc-950 text-sm font-bold hover:bg-amber-300 transition-all shadow-[0_0_20px_rgba(251,191,36,0.2)] hover:scale-105 active:scale-95"
          >
            Get Started
          </button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-zinc-400 hover:text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-zinc-950 border-b border-zinc-800 p-4 flex flex-col gap-4 animate-in slide-in-from-top duration-200">
          {navItems.map((item) => (
            <button 
              key={item.label} 
              onClick={() => scrollToId(item.href)}
              className="text-left text-lg font-medium text-zinc-400 p-2"
            >
              {item.label}
            </button>
          ))}
          <button 
            onClick={() => scrollToId('contact')}
            className="w-full py-3 rounded-xl bg-amber-400 text-zinc-950 font-bold text-center"
          >
            Get Started
          </button>
        </div>
      )}
    </nav>
  );
};
