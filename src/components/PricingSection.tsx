
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
        reveal-animation flex flex-col h-full rounded-2xl overflow-hidden transition-all duration-500
        ${isPopular ? 'border-2 border-blue-500 shadow-lg shadow-blue-500/10' : 'border border-white/10'}
      `}
      style={{ transitionDelay: `${delayFactor * 150}ms` }}
    >
      {isPopular && (
        <div className="bg-blue-500 text-white py-1.5 px-4 text-xs font-medium text-center">
          MOST POPULAR
        </div>
      )}
      
      <div className={`flex flex-col justify-between h-full p-6 ${isPopular ? 'bg-white/5' : 'bg-white/0'}`}>
        <div>
          <h3 className="text-xl font-bold mb-2">{title}</h3>
          <div className="mb-4">
            <span className="text-3xl font-bold">{price}</span>
            {price !== 'Custom' && <span className="text-muted-foreground"> / month</span>}
          </div>
          
          <p className="text-muted-foreground mb-6">{description}</p>
          
          <ul className="space-y-4 mb-8">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start gap-2">
                <Check className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <AnimatedButton
          variant={isPopular ? 'primary' : 'outline'}
          size="lg"
          className="w-full mt-auto"
        >
          Get Started
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
      title: "Starter",
      price: isYearly ? "$299" : "$399",
      description: "Perfect for small personal websites and portfolios.",
      features: [
        "5 Pages Custom Design",
        "Responsive Layout",
        "Basic SEO Setup",
        "Contact Form",
        "1 Month Support",
      ],
      isPopular: false
    },
    {
      title: "Professional",
      price: isYearly ? "$599" : "$799",
      description: "Ideal for businesses and organizations needing more features.",
      features: [
        "10 Pages Custom Design",
        "Advanced Animations",
        "Full SEO Optimization",
        "CMS Integration",
        "E-commerce Ready",
        "3 Months Support",
      ],
      isPopular: true
    },
    {
      title: "Enterprise",
      price: "Custom",
      description: "Tailored solutions for large organizations with custom requirements.",
      features: [
        "Unlimited Pages",
        "Custom Functionality",
        "Priority Support",
        "Advanced Security",
        "Performance Optimization",
        "Dedicated Account Manager",
        "12 Months Support",
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
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block py-1 px-3 rounded-full text-xs font-medium bg-secondary text-secondary-foreground mb-4 reveal-animation">
            Pricing Plans
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 reveal-animation" style={{ transitionDelay: '100ms' }}>
            Transparent Pricing for Every Need
          </h2>
          <p className="text-lg text-muted-foreground reveal-animation" style={{ transitionDelay: '200ms' }}>
            Choose the perfect plan for your project. All plans include our premium design standards.
          </p>
          
          <div className="mt-8 reveal-animation" style={{ transitionDelay: '300ms' }}>
            <div className="flex items-center justify-center space-x-4">
              <span className={`text-sm ${!isYearly ? 'font-medium' : 'text-muted-foreground'}`}>Monthly</span>
              <button
                className={`relative rounded-full w-14 h-7 transition-colors duration-300 focus:outline-none ${
                  isYearly ? 'bg-blue-500' : 'bg-gray-400'
                }`}
                onClick={() => setIsYearly(!isYearly)}
              >
                <span
                  className={`absolute left-1 top-1 bg-white rounded-full w-5 h-5 transition-transform duration-300 transform ${
                    isYearly ? 'translate-x-7' : ''
                  }`}
                />
              </button>
              <span className={`text-sm ${isYearly ? 'font-medium' : 'text-muted-foreground'}`}>Yearly <span className="text-xs text-green-500 font-normal">(Save 25%)</span></span>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
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
        <p className="text-muted-foreground">
          Not sure which plan is right for you? <a href="#contact" className="text-blue-500 underline hover:no-underline">Contact us</a> for a custom quote.
        </p>
      </div>
      
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-blue-400/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-purple-400/5 rounded-full blur-3xl -z-10"></div>
    </section>
  );
};

export default PricingSection;
