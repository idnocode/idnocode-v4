
import React, { useEffect, useRef } from 'react';
import AnimatedButton from './AnimatedButton';
import { ArrowRight } from 'lucide-react';

const HeroSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
          }
        });
      },
      { threshold: 0.1 }
    );
    
    const elements = sectionRef.current?.querySelectorAll('.reveal-animation');
    elements?.forEach((el) => observer.observe(el));
    
    return () => {
      elements?.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0c0c12] via-[#13131e] to-[#1a1a2e]"></div>
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        </div>
      </div>
      
      <div className="container max-w-6xl mx-auto px-4 sm:px-6 z-10 py-24 md:py-36">
        <div className="text-center max-w-3xl mx-auto space-y-8">
          <div className="reveal-animation">
            <span className="tracking-widest uppercase text-xs font-light text-white/50 mb-6">
              Solutions Web Premium
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight reveal-animation text-gradient" style={{ transitionDelay: '100ms', letterSpacing: '-0.02em' }}>
            L'Excellence Numérique<br/>
            <span className="font-normal">Sans Compromis</span>
          </h1>
          
          <p className="text-base md:text-lg text-white/60 max-w-xl mx-auto reveal-animation font-light" style={{ transitionDelay: '200ms' }}>
            Créations web minimalistes pour les marques qui exigent l'excellence. Design, performance et expérience utilisateur à leur apogée.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8 reveal-animation" style={{ transitionDelay: '300ms' }}>
            <AnimatedButton variant="primary" size="lg" className="min-w-[180px] tracking-wider uppercase text-xs font-medium">
              Commencer
              <ArrowRight className="ml-2 h-4 w-4" />
            </AnimatedButton>
            <div className="h-px w-10 bg-white/10 hidden sm:block"></div>
            <AnimatedButton variant="ghost" size="lg" className="min-w-[180px] tracking-wider uppercase text-xs font-medium">
              Notre Portfolio
            </AnimatedButton>
          </div>
        </div>
        
        <div className="mt-24 max-w-4xl mx-auto reveal-animation" style={{ transitionDelay: '400ms' }}>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 text-center">
            <div className="p-6 neo-blur rounded-lg">
              <div className="mb-4 text-xl font-light">Design UI</div>
              <p className="text-sm text-white/60">Interfaces élégantes et intuitives</p>
            </div>
            <div className="p-6 neo-blur rounded-lg">
              <div className="mb-4 text-xl font-light">Design UX</div>
              <p className="text-sm text-white/60">Expériences utilisateur mémorables</p>
            </div>
            <div className="p-6 neo-blur rounded-lg">
              <div className="mb-4 text-xl font-light">Responsive</div>
              <p className="text-sm text-white/60">Parfait sur tous les appareils</p>
            </div>
            <div className="p-6 neo-blur rounded-lg">
              <div className="mb-4 text-xl font-light">SEO</div>
              <p className="text-sm text-white/60">Optimisé pour les moteurs de recherche</p>
            </div>
            <div className="p-6 neo-blur rounded-lg">
              <div className="mb-4 text-xl font-light">Vitesse</div>
              <p className="text-sm text-white/60">Performances exceptionnelles</p>
            </div>
            <div className="p-6 neo-blur rounded-lg">
              <div className="mb-4 text-xl font-light">Sécurité</div>
              <p className="text-sm text-white/60">Protection optimale des données</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-0 right-0 flex justify-center animate-bounce">
        <a href="#features" className="text-xs uppercase tracking-widest opacity-40 flex flex-col items-center">
          <span className="mb-2">Explorer</span>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
            <line x1="12" y1="5" x2="12" y2="19" />
            <polyline points="19 12 12 19 5 12" />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
