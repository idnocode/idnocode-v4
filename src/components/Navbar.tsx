
import React, { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import AnimatedButton from './AnimatedButton';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4',
        isScrolled
          ? 'glass-card py-3 shadow-sm border-b border-white/10'
          : 'bg-transparent py-6'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a 
          href="#" 
          className="text-2xl font-display font-bold tracking-tighter"
        >
          SiteForge
        </a>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a 
            href="#features" 
            className="text-sm font-medium opacity-80 hover:opacity-100 transition-opacity"
          >
            Features
          </a>
          <a 
            href="#showcase" 
            className="text-sm font-medium opacity-80 hover:opacity-100 transition-opacity"
          >
            Showcase
          </a>
          <a 
            href="#pricing" 
            className="text-sm font-medium opacity-80 hover:opacity-100 transition-opacity"
          >
            Pricing
          </a>
          <a 
            href="#contact" 
            className="text-sm font-medium opacity-80 hover:opacity-100 transition-opacity"
          >
            Contact
          </a>
          <AnimatedButton variant="primary" size="md">
            Get Started
          </AnimatedButton>
        </nav>
        
        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden flex items-center justify-center"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
        
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 glass-card border-t border-white/10 shadow-lg md:hidden animate-fade-in">
            <nav className="flex flex-col space-y-4 p-6">
              <a 
                href="#features" 
                className="text-sm font-medium py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Features
              </a>
              <a 
                href="#showcase" 
                className="text-sm font-medium py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Showcase
              </a>
              <a 
                href="#pricing" 
                className="text-sm font-medium py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Pricing
              </a>
              <a 
                href="#contact" 
                className="text-sm font-medium py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </a>
              <AnimatedButton 
                variant="primary" 
                size="md" 
                className="w-full mt-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Get Started
              </AnimatedButton>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
