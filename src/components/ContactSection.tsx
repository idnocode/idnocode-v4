
import React, { useEffect, useRef, useState } from 'react';
import AnimatedButton from './AnimatedButton';
import { Send, CheckCircle } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

const ContactSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const { toast } = useToast();
  
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
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate form submission
    console.log({ name, email, message });
    
    // Show success message
    toast({
      title: "Message envoyé !",
      description: "Nous vous répondrons très bientôt.",
    });
    
    // Reset form and show success state
    setSubmitted(true);
    setName('');
    setEmail('');
    setMessage('');
    
    // Reset the success state after 3 seconds
    setTimeout(() => {
      setSubmitted(false);
    }, 3000);
  };

  return (
    <section 
      id="contact" 
      ref={sectionRef}
      className="py-24 md:py-32 relative overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          <div>
            <span className="inline-block py-1 px-3 rounded-full text-xs font-medium bg-secondary text-secondary-foreground mb-4 reveal-animation">
              Contactez-nous
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 reveal-animation" style={{ transitionDelay: '100ms' }}>
              Créons Ensemble Quelque Chose d'Exceptionnel
            </h2>
            <p className="text-lg text-muted-foreground mb-8 reveal-animation" style={{ transitionDelay: '200ms' }}>
              Vous avez un projet en tête ou des questions sur nos services ? Nous sommes là pour transformer votre vision en réalité.
            </p>
            
            <div className="space-y-6 reveal-animation" style={{ transitionDelay: '300ms' }}>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">Téléphone</h3>
                  <p className="text-muted-foreground">+33 (0)1 23 45 67 89</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">Email</h3>
                  <p className="text-muted-foreground">contact@idnocode.com</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">Adresse</h3>
                  <p className="text-muted-foreground">123 Avenue du Design, 75001 Paris</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="reveal-animation" style={{ transitionDelay: '400ms' }}>
            <div className="glass-card rounded-2xl p-8 transition-all duration-300">
              <h3 className="text-2xl font-bold mb-6">Envoyez-nous un message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Nom
                  </label>
                  <input
                    id="name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="w-full px-4 py-3 bg-secondary/50 focus:bg-secondary border border-transparent focus:border-primary rounded-lg transition-colors duration-300 focus:outline-none"
                    placeholder="Votre nom"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full px-4 py-3 bg-secondary/50 focus:bg-secondary border border-transparent focus:border-primary rounded-lg transition-colors duration-300 focus:outline-none"
                    placeholder="votre@email.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    rows={4}
                    className="w-full px-4 py-3 bg-secondary/50 focus:bg-secondary border border-transparent focus:border-primary rounded-lg transition-colors duration-300 focus:outline-none"
                    placeholder="Comment pouvons-nous vous aider ?"
                  />
                </div>
                
                <AnimatedButton 
                  type="submit" 
                  variant="primary" 
                  size="lg" 
                  className="w-full"
                >
                  {submitted ? (
                    <>
                      <CheckCircle className="mr-2 h-4 w-4" />
                      Message Envoyé
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-4 w-4" />
                      Envoyer
                    </>
                  )}
                </AnimatedButton>
              </form>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-blue-400/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-1/4 left-1/4 w-72 h-72 bg-purple-400/5 rounded-full blur-3xl -z-10"></div>
    </section>
  );
};

export default ContactSection;
