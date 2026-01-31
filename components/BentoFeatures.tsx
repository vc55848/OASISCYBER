
import React from 'react';
import { ShieldAlert, FileSearch, GraduationCap, Server, Cpu } from 'lucide-react';

const FeatureCard = ({ title, description, icon: Icon, className = "" }: any) => {
  const handleClick = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div 
      onClick={handleClick}
      className={`group p-8 rounded-3xl border border-zinc-800 bg-zinc-900/50 hover:bg-zinc-800/80 transition-all duration-300 flex flex-col h-full cursor-pointer hover:border-amber-400/30 ${className}`}
    >
      <div className="p-3 rounded-2xl bg-zinc-800 group-hover:bg-amber-400/20 w-fit mb-6 transition-colors">
        <Icon className="w-6 h-6 text-amber-400 group-hover:text-amber-300" />
      </div>
      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-amber-400 transition-colors">{title}</h3>
      <p className="text-zinc-400 leading-relaxed text-sm flex-grow group-hover:text-zinc-300 transition-colors">{description}</p>
    </div>
  );
};

export const BentoFeatures: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
      <FeatureCard 
        className="md:col-span-3"
        title="Cybersecurity Consulting"
        description="Bespoke security architecture design, penetration testing, and strategic advisory. We don't just find vulnerabilities; we help you eliminate them permanently."
        icon={ShieldAlert}
      />
      <FeatureCard 
        className="md:col-span-3"
        title="Compliance Automation"
        description="Native SOC2, ISO 27001, GDPR, and HIPAA frameworks. Automate evidence collection and audit preparation with our specialized toolkits."
        icon={FileSearch}
      />
      <FeatureCard 
        className="md:col-span-2"
        title="Professional Training"
        description="Hands-on certifications for your staff. From phishing awareness to advanced forensics led by experts."
        icon={GraduationCap}
      />
      <FeatureCard 
        className="md:col-span-2"
        title="Policy Management"
        description="Centralized version-controlled policy library with automated employee acknowledgement workflows."
        icon={Server}
      />
      <FeatureCard 
        className="md:col-span-2"
        title="Vulnerability Mgmt"
        description="Continuous scanning across your cloud and hybrid infrastructure with advanced remediation strategies."
        icon={Cpu}
      />
    </div>
  );
};
