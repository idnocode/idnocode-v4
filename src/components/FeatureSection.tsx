
import React, { useEffect, useRef } from 'react';
import { Layers, Zap, Shield, Globe, Code, Palette } from 'lucide-react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delayIndex: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, delayIndex }) => {
  return (
    <div 
      className="glass-card rounded-xl p-6 transition-all duration-300 hover:shadow-lg hover:translate-y-[-5px] group reveal-animation" 
      style={{ transitionDelay: `${100 * delayIndex}ms` }}
    >
      <div className="mb-5 flex items-center justify-center w-12 h-12 rounded-lg bg-secondary text-primary-foreground group-hover:bg-primary group-hover:text-white transition-colors duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-muted-foreground leading-relaxed">{description}</p>
    </div>
  );
};

const FeatureSection: React.FC = () => {
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

  const features = [
    {
      icon: <Palette className="h-6 w-6" />,
      title: "Stunning Designs",
      description: "Beautifully crafted interfaces that create memorable experiences for your visitors."
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Lightning Fast",
      description: "Optimized for speed with cutting-edge technology that ensures swift load times."
    },
    {
      icon: <Layers className="h-6 w-6" />,
      title: "Modular Structure",
      description: "Flexible components that adapt to your content needs and future growth."
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Secure & Reliable",
      description: "Built with security best practices to protect your data and your customers."
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Global Reach",
      description: "SEO optimized with multi-language support to connect with audiences worldwide."
    },
    {
      icon: <Code className="h-6 w-6" />,
      title: "Clean Code",
      description: "Meticulously written code that is maintainable and ready for future expansion."
    }
  ];

  return (
    <section 
      id="features" 
      ref={sectionRef}
      className="py-24 md:py-32 relative overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <span className="inline-block py-1 px-3 rounded-full text-xs font-medium bg-secondary text-secondary-foreground mb-4 reveal-animation">
            Our Features
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 reveal-animation" style={{ transitionDelay: '100ms' }}>
            Crafted with Precision and Purpose
          </h2>
          <p className="text-lg text-muted-foreground reveal-animation" style={{ transitionDelay: '200ms' }}>
            Every feature is designed to elevate your digital presence and provide exceptional user experiences.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delayIndex={index}
            />
          ))}
        </div>
      </div>
      
      <div className="absolute top-1/4 right-0 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-purple-400/10 rounded-full blur-3xl -z-10"></div>
    </section>
  );
};

export default FeatureSection;
