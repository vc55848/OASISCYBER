
import React from 'react';
import { 
  ShieldCheck, 
  Cloud, 
  FileText, 
  Target, 
  Eye, 
  Users, 
  CreditCard, 
  Database, 
  Accessibility, 
  Code2,
  ArrowRight,
  Building,
  Search,
  BarChart3,
  Sparkles
} from 'lucide-react';

const audits = [
  {
    icon: <ShieldCheck className="w-8 h-8 text-amber-400" />,
    title: "Information Security and Privacy Audits (ISO 27001 / 27701)",
    hasArrow: true
  },
  {
    icon: <Cloud className="w-8 h-8 text-amber-400" />,
    title: "SOC Audit",
    hasArrow: false
  },
  {
    icon: <Building className="w-8 h-8 text-amber-400" />,
    title: "IRDAI Audit",
    hasArrow: false
  },
  {
    icon: <BarChart3 className="w-8 h-8 text-amber-400" />,
    title: "SEBI (SYSTEM AND CYBER AUDIT)",
    hasArrow: false
  },
  {
    icon: <Search className="w-8 h-8 text-amber-400" />,
    title: "INTERNAL AUDITS",
    hasArrow: false
  },
  {
    icon: <FileText className="w-8 h-8 text-amber-400" />,
    title: "Regulatory and Compliance Audits",
    hasArrow: false
  },
  {
    icon: <Target className="w-8 h-8 text-amber-400" />,
    title: "Vulnerability Assessment, Penetration Testing & Red Teaming",
    hasArrow: false
  },
  {
    icon: <Eye className="w-8 h-8 text-amber-400" />,
    title: "Surveillance Audits & Process Review",
    hasArrow: false
  },
  {
    icon: <Users className="w-8 h-8 text-amber-400" />,
    title: "Third-Party & Vendor Security Audits",
    hasArrow: false
  },
  {
    icon: <CreditCard className="w-8 h-8 text-amber-400" />,
    title: "PCI DSS Audits",
    hasArrow: false
  },
  {
    icon: <Database className="w-8 h-8 text-amber-400" />,
    title: "DPDP Compliance Audit",
    hasArrow: false
  },
  {
    icon: <Accessibility className="w-8 h-8 text-amber-400" />,
    title: "Web Accessibility Audit (WCAG 2.1)",
    hasArrow: false
  },
  {
    icon: <Code2 className="w-8 h-8 text-amber-400" />,
    title: "Secure Source Code Review",
    hasArrow: false
  },
  {
    icon: <Sparkles className="w-8 h-8 text-blue-400 animate-pulse" />,
    title: "More Incoming",
    isUpcoming: true
  }
];

export const AuditGrid: React.FC = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Our Audit Expertise</h2>
        <p className="text-zinc-400 max-w-2xl mx-auto">Comprehensive assessment services ensuring your infrastructure meets global and regional regulatory standards including SEBI and IRDAI.</p>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-px bg-zinc-800/30 border border-zinc-800/50 rounded-3xl overflow-hidden shadow-2xl">
        {audits.map((audit, index) => (
          <div 
            key={index} 
            onClick={scrollToContact}
            className={`group relative bg-[#050507] p-8 flex flex-col items-center text-center cursor-pointer hover:bg-zinc-900/60 hover:scale-[1.05] hover:z-10 hover:shadow-2xl transition-all duration-300 min-h-[220px] justify-center outline outline-1 outline-transparent hover:outline-zinc-800 
              ${audit.isUpcoming ? 'opacity-80 grayscale-[0.5] hover:grayscale-0 md:col-span-2 lg:col-span-2' : 'col-span-1'}
            `}
          >
            <div className={`mb-6 p-4 rounded-2xl bg-zinc-900/80 border border-zinc-800 group-hover:scale-110 transition-all duration-300 shadow-lg ${audit.isUpcoming ? 'group-hover:border-blue-400/30 group-hover:shadow-blue-400/10' : 'group-hover:border-amber-400/30 group-hover:shadow-amber-400/10'}`}>
              {audit.icon}
            </div>
            <h3 className="text-xs md:text-sm font-semibold text-zinc-300 group-hover:text-white transition-colors leading-relaxed px-2">
              {audit.title}
            </h3>
            
            {audit.isUpcoming && (
              <span className="mt-3 px-3 py-1 rounded-full text-[10px] font-bold bg-blue-400/10 border border-blue-400/20 text-blue-400 group-hover:bg-blue-400/20 transition-all uppercase tracking-widest">
                New Capabilities Loading
              </span>
            )}

            {audit.hasArrow && (
              <div className="mt-4 text-amber-400 group-hover:translate-x-1 transition-transform">
                <ArrowRight className="w-4 h-4" />
              </div>
            )}
            
            {/* Subtle Hover Glow Line */}
            <div className={`absolute bottom-0 left-0 right-0 h-1 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center ${audit.isUpcoming ? 'bg-blue-500' : 'bg-amber-400'}`} />
          </div>
        ))}
      </div>
    </div>
  );
};
