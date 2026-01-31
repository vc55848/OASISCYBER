
import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { BentoFeatures } from './components/BentoFeatures';
import { OasisTool } from './components/OasisTool';
import { AuditGrid } from './components/AuditGrid';
import { TrainingSection } from './components/TrainingSection';
import { ContactForm } from './components/ContactForm';
import { Footer } from './components/Footer';
import { BackgroundEffects } from './components/BackgroundEffects';

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen selection:bg-amber-400/30">
      {/* Background Layer */}
      <BackgroundEffects />
      
      {/* Dynamic Background Elements */}
      <div className="fixed inset-0 bg-grid-white -z-10" />
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-full max-w-6xl h-[500px] blur-gradient -z-10 opacity-60" />
      
      <Navbar scrolled={scrolled} />
      
      <main className="relative z-10">
        <Hero />
        
        <section id="services" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-amber-400 to-purple-500">
              Future-Proof Security Services
            </h2>
            <p className="mt-4 text-zinc-400 max-w-2xl mx-auto text-lg">
              We combine elite consulting with cutting-edge technology to shield your organization from modern threats.
            </p>
          </div>
          <BentoFeatures />
        </section>

        <section id="audits" className="py-24 scroll-mt-24 bg-zinc-950/50">
          <AuditGrid />
        </section>

        <section id="tool" className="py-24 scroll-mt-24">
          <OasisTool />
        </section>

        <section id="training" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-24">
          <TrainingSection />
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24 relative overflow-hidden scroll-mt-24">
          <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-600/10 blur-[150px] rounded-full" />
          <ContactForm />
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default App;
