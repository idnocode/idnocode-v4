
import React, { useEffect, useRef, useState } from 'react';
import AnimatedButton from './AnimatedButton';
import { Check } from 'lucide-react';

interface PricingTierProps {
  title: string;
  price: string;
  description: string;
  features: string[];
  isPopular?: boolean;
  delayFactor?: number;
}

const PricingTier: React.FC<PricingTierProps> = ({
  title,
  price,
  description,
  features,
  isPopular = false,
  delayFactor = 0
}) => {
  return (
    <div 
      className={`
        reveal-animation flex flex-col h-full rounded-xl overflow-hidden transition-all duration-500 neo-blur
        ${isPopular ? 'border border-white/20' : 'border border-white/5'}
      `}
      style={{ transitionDelay: `${delayFactor * 150}ms` }}
    >
      {isPopular && (
        <div className="bg-white/10 backdrop-blur-lg text-white py-1.5 px-4 text-xs tracking-widest uppercase font-light text-center">
          Recommandé
        </div>
      )}
      
      <div className="flex flex-col justify-between h-full p-6">
        <div>
          <h3 className="text-lg font-light tracking-wide mb-2">{title}</h3>
          <div className="mb-4">
            <span className="text-3xl font-light">{price}</span>
            {price !== 'Sur Mesure' && <span className="text-white/60 text-sm"> / mois</span>}
          </div>
          
          <p className="text-white/60 mb-8 text-sm">{description}</p>
          
          <ul className="space-y-4 mb-8">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start gap-3 text-sm">
                <Check className="h-4 w-4 text-white/40 mt-0.5 flex-shrink-0" />
                <span className="text-white/80">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <AnimatedButton
          variant={isPopular ? 'primary' : 'outline'}
          size="lg"
          className="w-full mt-auto tracking-wider uppercase text-xs font-medium"
        >
          Commencer
        </AnimatedButton>
      </div>
    </div>
  );
};

const PricingSection: React.FC = () => {
  const [isYearly, setIsYearly] = useState(false);
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

  const pricing = [
    {
      title: "Essentiel",
      price: isYearly ? "299€" : "399€",
      description: "Idéal pour les sites personnels et portfolios.",
      features: [
        "5 Pages Personnalisées",
        "Design Responsive",
        "Configuration SEO de Base",
        "Formulaire de Contact",
        "1 Mois de Support",
      ],
      isPopular: false
    },
    {
      title: "Professionnel",
      price: isYearly ? "599€" : "799€",
      description: "Parfait pour les entreprises nécessitant plus de fonctionnalités.",
      features: [
        "10 Pages Personnalisées",
        "Animations Avancées",
        "Optimisation SEO Complète",
        "Intégration CMS",
        "Prêt pour l'E-commerce",
        "3 Mois de Support",
      ],
      isPopular: true
    },
    {
      title: "Entreprise",
      price: "Sur Mesure",
      description: "Solutions sur mesure pour les grandes organisations.",
      features: [
        "Pages Illimitées",
        "Fonctionnalités Personnalisées",
        "Support Prioritaire",
        "Sécurité Avancée",
        "Optimisation des Performances",
        "Gestionnaire de Compte Dédié",
        "12 Mois de Support",
      ],
      isPopular: false
    }
  ];

  return (
    <section 
      id="pricing" 
      ref={sectionRef}
      className="py-24 md:py-32 relative"
    >
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block py-1 px-2 text-xs tracking-widest uppercase text-white/50 mb-4 reveal-animation font-light">
            Tarification
          </span>
          <h2 className="text-2xl md:text-3xl font-light mb-6 reveal-animation tracking-wide" style={{ transitionDelay: '100ms', letterSpacing: '-0.02em' }}>
            <span className="text-gradient">Tarifs Transparents</span>
          </h2>
          <p className="text-sm md:text-base text-white/60 reveal-animation font-light" style={{ transitionDelay: '200ms' }}>
            Choisissez le forfait parfait pour votre projet. Tous nos forfaits incluent nos standards de design premium.
          </p>
          
          <div className="mt-8 reveal-animation" style={{ transitionDelay: '300ms' }}>
            <div className="flex items-center justify-center space-x-4">
              <span className={`text-xs uppercase tracking-widest ${!isYearly ? 'text-white' : 'text-white/40'}`}>Mensuel</span>
              <button
                className={`relative rounded-full w-12 h-6 transition-colors duration-300 focus:outline-none ${
                  isYearly ? 'bg-white/20' : 'bg-white/10'
                }`}
                onClick={() => setIsYearly(!isYearly)}
              >
                <span
                  className={`absolute left-1 top-1 bg-white rounded-full w-4 h-4 transition-transform duration-300 transform ${
                    isYearly ? 'translate-x-6' : ''
                  }`}
                />
              </button>
              <span className={`text-xs uppercase tracking-widest ${isYearly ? 'text-white' : 'text-white/40'}`}>Annuel <span className="text-[10px] text-green-400 font-normal normal-case">(-25%)</span></span>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-5">
          {pricing.map((tier, index) => (
            <PricingTier
              key={index}
              title={tier.title}
              price={tier.price}
              description={tier.description}
              features={tier.features}
              isPopular={tier.isPopular}
              delayFactor={index}
            />
          ))}
        </div>
      </div>
      
      <div className="mt-16 text-center reveal-animation" style={{ transitionDelay: '600ms' }}>
        <p className="text-white/60 text-sm">
          Besoin d'une solution personnalisée ? <a href="#contact" className="text-white underline hover:no-underline">Contactez-nous</a> pour un devis sur mesure.
        </p>
      </div>
    </section>
  );
};

export default PricingSection;
