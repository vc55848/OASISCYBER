
import React from 'react';
import { Clock, BarChart, ShieldCheck } from 'lucide-react';

const courses = [
  {
    title: 'ISO 27001',
    duration: '4 Weeks',
    level: 'Professional',
    students: '1.2k+',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop',
    tag: 'Compliance'
  },
  {
    title: 'CEH (Ethical Hacking)',
    duration: '6 Weeks',
    level: 'Expert',
    students: '2.1k+',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop',
    tag: 'Offensive'
  },
  {
    title: 'ISO 42001',
    duration: '3 Weeks',
    level: 'Advanced',
    students: '450+',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070&auto=format&fit=crop',
    tag: 'AI Security'
  },
  {
    title: 'CYBER SECURITY',
    duration: '2 Weeks',
    level: 'Beginner',
    students: '3.5k+',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=2070&auto=format&fit=crop',
    tag: 'Fundamentals'
  }
];

export const TrainingSection: React.FC = () => {
  const handleEnquire = (e: React.MouseEvent) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="space-y-12">
      <div className="text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Upskill Your Defense</h2>
        <p className="text-zinc-400 max-w-xl mx-auto">
          Expert-led certification programs designed to transform your organizational security capabilities.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 max-w-5xl mx-auto gap-8">
        {courses.map((course, i) => (
          <div key={i} className="group relative bg-zinc-900/50 border border-zinc-800 rounded-3xl overflow-hidden hover:border-amber-400/50 transition-all duration-300 backdrop-blur-sm">
            <div className="h-48 relative overflow-hidden">
               <img 
                 src={course.image} 
                 alt={course.title} 
                 className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
               />
               <div className="absolute top-4 left-4 px-2 py-1 rounded bg-amber-400 text-[10px] font-bold text-zinc-950 uppercase tracking-widest">
                 {course.tag}
               </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-amber-400 transition-colors uppercase">{course.title}</h3>
              
              <div className="flex items-center gap-6 mb-6">
                <div className="flex items-center gap-2 text-xs text-zinc-500">
                  <Clock className="w-3.5 h-3.5" /> {course.duration}
                </div>
                <div className="flex items-center gap-2 text-xs text-zinc-500">
                  <BarChart className="w-3.5 h-3.5" /> {course.level}
                </div>
              </div>

              <div className="flex items-center justify-between pt-6 border-t border-zinc-800">
                 <div className="text-sm font-medium text-zinc-400">
                   <span className="text-white font-bold">{course.students}</span> Enrolled
                 </div>
                 <button 
                  onClick={handleEnquire}
                  className="text-xs font-bold text-amber-400 hover:text-white transition-colors flex items-center gap-1 group/btn"
                 >
                   Enquire Now <ShieldCheck className="w-3 h-3 group-hover/btn:scale-110 transition-transform" />
                 </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
