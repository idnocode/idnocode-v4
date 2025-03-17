
import React, { useEffect, useRef } from 'react';
import { Shield, Zap, Smartphone, Search, MousePointer, Settings } from 'lucide-react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delayIndex: number;
  gradient: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, delayIndex, gradient }) => {
  return (
    <div 
      className={`neo-blur rounded-xl p-6 transition-all duration-300 hover:translate-y-[-5px] group reveal-animation backdrop-blur-xl`}
      style={{ 
        transitionDelay: `${100 * delayIndex}ms`,
        background: `linear-gradient(135deg, rgba(20, 20, 25, 0.7) 0%, ${gradient} 100%)`,
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)'
      }}
    >
      <div className="mb-6 flex items-center justify-center w-12 h-12 rounded-full bg-white/5 text-white group-hover:bg-white/10 transition-colors duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-light mb-3 tracking-wide">{title}</h3>
      <p className="text-white/60 leading-relaxed text-sm">{description}</p>
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

  const gradients = [
    'rgba(78, 84, 200, 0.1)',
    'rgba(111, 76, 255, 0.1)',
    'rgba(84, 170, 255, 0.1)',
    'rgba(116, 58, 213, 0.1)',
    'rgba(33, 138, 227, 0.1)',
    'rgba(76, 110, 245, 0.1)'
  ];

  const features = [
    {
      icon: <MousePointer className="h-5 w-5" />,
      title: "Design UI",
      description: "Interfaces visuelles épurées et élégantes qui reflètent l'excellence de votre marque."
    },
    {
      icon: <Zap className="h-5 w-5" />,
      title: "Vitesse Optimale",
      description: "Performance exceptionnelle garantissant des temps de chargement quasi instantanés."
    },
    {
      icon: <Smartphone className="h-5 w-5" />,
      title: "100% Responsive",
      description: "Adaptation parfaite à tous les appareils, du mobile au grand écran."
    },
    {
      icon: <Shield className="h-5 w-5" />,
      title: "Sécurité Maximale",
      description: "Protection de vos données et de vos clients avec les meilleures pratiques de sécurité."
    },
    {
      icon: <Search className="h-5 w-5" />,
      title: "SEO Optimisé",
      description: "Visibilité accrue dans les moteurs de recherche pour atteindre votre audience."
    },
    {
      icon: <Settings className="h-5 w-5" />,
      title: "Gestion Facile",
      description: "Interface d'administration intuitive permettant des mises à jour sans effort."
    }
  ];

  return (
    <section 
      id="features" 
      ref={sectionRef}
      className="py-24 md:py-32 relative overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-24">
          <span className="inline-block py-1 px-2 text-xs tracking-widest uppercase text-white/50 mb-4 reveal-animation font-light">
            Nos Services
          </span>
          <h2 className="text-2xl md:text-3xl font-light mb-6 reveal-animation tracking-wide" style={{ transitionDelay: '100ms', letterSpacing: '-0.02em' }}>
            <span className="text-gradient">L'Excellence dans Chaque Détail</span>
          </h2>
          <p className="text-sm md:text-base text-white/60 reveal-animation font-light" style={{ transitionDelay: '200ms' }}>
            Chaque fonctionnalité est conçue pour sublimer votre présence numérique et garantir une expérience utilisateur exceptionnelle.
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
              gradient={gradients[index]}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
