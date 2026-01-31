
import React from 'react';
import { Shield, Twitter, Linkedin, Github, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-zinc-950 border-t border-zinc-900 pt-20 pb-10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="p-1.5 rounded-lg bg-amber-400">
                <Shield className="w-5 h-5 text-zinc-950" />
              </div>
              <span className="text-xl font-bold text-white">Oasis<span className="text-amber-400">cybertech</span></span>
            </div>
            <p className="text-zinc-500 text-sm leading-relaxed mb-6">
              Securing the digital frontier through expert consulting, automated compliance, and professional training.
            </p>
            <div className="flex gap-4">
              <button className="p-2 rounded-lg bg-zinc-900 text-zinc-500 hover:text-amber-400 transition-colors">
                <Twitter className="w-4 h-4" />
              </button>
              <button className="p-2 rounded-lg bg-zinc-900 text-zinc-500 hover:text-amber-400 transition-colors">
                <Linkedin className="w-4 h-4" />
              </button>
              <button className="p-2 rounded-lg bg-zinc-900 text-zinc-500 hover:text-amber-400 transition-colors">
                <Github className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Services</h4>
            <ul className="space-y-4 text-sm text-zinc-500">
              <li><a href="#" className="hover:text-blue-400 transition-colors">Consulting</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Compliance Audits</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Penetration Testing</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Cloud Security</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Platform</h4>
            <ul className="space-y-4 text-sm text-zinc-500">
              <li><a href="#" className="hover:text-amber-400 transition-colors">Oasis Tool</a></li>
              <li><a href="#" className="hover:text-amber-400 transition-colors">Risk Management</a></li>
              <li><a href="#" className="hover:text-amber-400 transition-colors">Policy Builder</a></li>
              <li><a href="#" className="hover:text-amber-400 transition-colors">Integrations</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Contact</h4>
            <ul className="space-y-4 text-sm text-zinc-500">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-amber-400" /> support@oasiscybertech.com
              </li>
              <li>Silicon Valley, CA</li>
              <li>United States</li>
            </ul>
            <div className="mt-8">
              <label className="block text-xs font-bold text-zinc-600 uppercase mb-3">Stay Updated</label>
              <div className="flex gap-2">
                <input 
                  type="email" 
                  placeholder="Enter email" 
                  className="bg-zinc-900 border border-zinc-800 rounded-lg px-3 py-2 text-xs w-full focus:outline-none focus:border-amber-400" 
                />
                <button className="px-4 py-2 rounded-lg bg-amber-400 text-zinc-950 font-bold text-xs hover:bg-amber-300 transition-colors">Join</button>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-zinc-600 text-xs">
            © {new Date().getFullYear()} Oasiscybertech Inc. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-zinc-600">
            <a href="#" className="hover:text-zinc-400">Privacy Policy</a>
            <a href="#" className="hover:text-zinc-400">Terms of Service</a>
            <a href="#" className="hover:text-zinc-400">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
