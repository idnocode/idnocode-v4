
import React, { useEffect, useRef } from 'react';
import AnimatedButton from './AnimatedButton';
import AbstractShape from './AbstractShape';
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
      <AbstractShape />
      
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 z-10 py-24 md:py-36">
        <div className="text-center max-w-4xl mx-auto space-y-8">
          <div className="reveal-animation">
            <span className="inline-block py-1 px-3 rounded-full text-xs font-medium bg-secondary text-secondary-foreground mb-6">
              Premium Website Solutions
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight reveal-animation" style={{ transitionDelay: '100ms' }}>
            Designing the future, <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
              pixel by pixel
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto reveal-animation" style={{ transitionDelay: '200ms' }}>
            Elevate your online presence with our premium website designs that combine minimalist aesthetics with cutting-edge functionality.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 reveal-animation" style={{ transitionDelay: '300ms' }}>
            <AnimatedButton variant="primary" size="lg">
              Get Started
              <ArrowRight className="ml-2 h-4 w-4" />
            </AnimatedButton>
            <AnimatedButton variant="outline" size="lg">
              View Showcase
            </AnimatedButton>
          </div>
        </div>
        
        <div className="mt-16 md:mt-24 max-w-5xl mx-auto reveal-animation" style={{ transitionDelay: '400ms' }}>
          <div className="relative rounded-xl overflow-hidden border border-white/20 shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 to-purple-500/10 z-0"></div>
            
            {/* Browser Mockup Chrome Bar */}
            <div className="relative z-10 bg-gray-900/90 border-b border-white/10 p-2 flex items-center">
              <div className="flex space-x-1.5 mr-4">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div className="bg-gray-800 rounded-md flex-1 h-6 px-2 flex items-center justify-center">
                <span className="text-xs text-gray-400">premium-website.com</span>
              </div>
            </div>
            
            {/* Website Preview */}
            <div className="aspect-[16/9] bg-gray-950 flex items-center justify-center overflow-hidden">
              {/* Abstract Website Content */}
              <div className="flex flex-col items-center space-y-8 p-8 animate-float">
                <div className="w-32 h-6 bg-white/10 rounded-md"></div>
                <div className="w-full max-w-md h-16 bg-white/5 rounded-md"></div>
                <div className="flex space-x-4">
                  <div className="w-24 h-10 bg-blue-500/80 rounded-md"></div>
                  <div className="w-24 h-10 bg-white/10 rounded-md"></div>
                </div>
                <div className="grid grid-cols-3 gap-4 w-full max-w-xl mt-4">
                  <div className="aspect-square bg-white/5 rounded-md"></div>
                  <div className="aspect-square bg-white/5 rounded-md"></div>
                  <div className="aspect-square bg-white/5 rounded-md"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-0 right-0 flex justify-center animate-bounce">
        <a href="#features" className="text-sm opacity-70 flex flex-col items-center">
          <span className="mb-2">Scroll Down</span>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="12" y1="5" x2="12" y2="19" />
            <polyline points="19 12 12 19 5 12" />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
