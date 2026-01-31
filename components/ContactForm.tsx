
import React, { useState } from 'react';
import { Send, Mail, User, MessageSquare, Briefcase, CheckCircle2, Loader2, AlertCircle } from 'lucide-react';

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    message: ''
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const services = [
    "Cybersecurity Consulting",
    "ISO 27001 Training/Audit",
    "CEH Training Program",
    "ISO 42001 AI Management",
    "CYBER SECURITY Essentials",
    "Compliance & Policy Management",
    "ISO 27001 / 27701 Audit",
    "SOC Audit",
    "IRDAI Audit",
    "SEBI (System & Cyber Audit)",
    "INTERNAL AUDITS",
    "Regulatory and Compliance Audits",
    "VAPT & Red Teaming",
    "Surveillance Audits",
    "Third-Party & Vendor Security Audits",
    "PCI DSS Audits",
    "DPDP Compliance Audit",
    "Web Accessibility Audit (WCAG)",
    "Secure Source Code Review"
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.service) {
      setStatus('error');
      setErrorMessage('Please fill in all required fields.');
      return;
    }

    setStatus('submitting');

    try {
      // Logic for Backend Integration:
      // If using PostgreSQL (Supabase) or MongoDB (API Endpoint):
      // const response = await fetch('YOUR_BACKEND_URL', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(formData),
      // });
      
      // Simulating a backend call for demonstration
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setStatus('success');
      setFormData({ name: '', email: '', service: '', message: '' });
    } catch (err) {
      setStatus('error');
      setErrorMessage('Something went wrong. Please try again later.');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
    if (status === 'error') setStatus('idle');
  };

  if (status === 'success') {
    return (
      <div className="max-w-4xl mx-auto px-4 text-center py-20 animate-in fade-in zoom-in duration-500">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-emerald-500/20 border border-emerald-500/50 mb-6">
          <CheckCircle2 className="w-10 h-10 text-emerald-500" />
        </div>
        <h2 className="text-4xl font-bold text-white mb-4">Inquiry Received!</h2>
        <p className="text-zinc-400 mb-8 max-w-md mx-auto">
          Thank you for reaching out. One of our cybersecurity specialists will contact you within 24 hours to discuss your project.
        </p>
        <button 
          onClick={() => setStatus('idle')}
          className="px-8 py-3 rounded-xl bg-zinc-900 border border-zinc-800 text-white font-bold hover:bg-zinc-800 transition-all"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Let's Secure Your <span className="text-amber-400 gold-text-glow">Future</span></h2>
        <p className="text-zinc-400">Ready to transform your compliance posture? Get in touch with our specialists.</p>
      </div>

      <div className="relative group p-1 rounded-3xl bg-gradient-to-br from-blue-500/20 via-amber-400/20 to-purple-500/20">
        <div className="bg-zinc-950/90 backdrop-blur-xl rounded-[calc(1.5rem-2px)] p-8 md:p-12">
          <form className="grid grid-cols-1 md:grid-cols-2 gap-8" onSubmit={handleSubmit}>
            <div className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-zinc-400 flex items-center gap-2">
                  <User className="w-4 h-4 text-amber-400" /> Full Name *
                </label>
                <input 
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  required
                  className="w-full bg-zinc-900/50 border border-zinc-800 focus:border-amber-400/50 focus:ring-1 focus:ring-amber-400/50 rounded-xl px-4 py-3 text-white transition-all outline-none"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-zinc-400 flex items-center gap-2">
                  <Mail className="w-4 h-4 text-amber-400" /> Email Address *
                </label>
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@company.com"
                  required
                  className="w-full bg-zinc-900/50 border border-zinc-800 focus:border-amber-400/50 focus:ring-1 focus:ring-amber-400/50 rounded-xl px-4 py-3 text-white transition-all outline-none"
                />
              </div>
            </div>

            <div className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-zinc-400 flex items-center gap-2">
                  <Briefcase className="w-4 h-4 text-amber-400" /> Select Service *
                </label>
                <div className="relative">
                  <select 
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="w-full bg-zinc-900/50 border border-zinc-800 focus:border-amber-400/50 focus:ring-1 focus:ring-amber-400/50 rounded-xl px-4 py-3 text-white transition-all outline-none appearance-none cursor-pointer"
                  >
                    <option value="" disabled>Choose a service...</option>
                    {services.map((service, idx) => (
                      <option key={idx} value={service} className="bg-zinc-950 text-white">{service}</option>
                    ))}
                  </select>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-amber-400">
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                      <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-zinc-400 flex items-center gap-2">
                  <MessageSquare className="w-4 h-4 text-amber-400" /> Your Message
                </label>
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={2}
                  placeholder="Any additional details..."
                  className="w-full bg-zinc-900/50 border border-zinc-800 focus:border-amber-400/50 focus:ring-1 focus:ring-amber-400/50 rounded-xl px-4 py-3 text-white transition-all outline-none resize-none"
                />
              </div>
            </div>

            {status === 'error' && (
              <div className="md:col-span-2 flex items-center gap-2 text-red-400 text-sm bg-red-400/10 p-3 rounded-lg border border-red-400/20">
                <AlertCircle className="w-4 h-4" /> {errorMessage}
              </div>
            )}

            <div className="md:col-span-2">
              <button 
                type="submit"
                disabled={status === 'submitting'}
                className="w-full py-4 rounded-xl bg-amber-400 text-zinc-950 font-bold flex items-center justify-center gap-2 hover:bg-amber-300 transition-all gold-glow group disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {status === 'submitting' ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Processing...
                  </>
                ) : (
                  <>
                    Send Inquiry <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </>
                )}
              </button>
            </div>
          </form>
          
          <div className="mt-12 flex flex-wrap justify-center gap-8 text-zinc-500 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-amber-400" />
              24-hour Response Time
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-blue-400" />
              Expert NDA Consultation
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-purple-400" />
              Free Initial Assessment
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
