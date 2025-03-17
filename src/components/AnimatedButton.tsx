
import React, { useState } from 'react';
import { cn } from '@/lib/utils';

interface AnimatedButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  className?: string;
}

const AnimatedButton: React.FC<AnimatedButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  className,
  ...props
}) => {
  const [isHovered, setIsHovered] = useState(false);
  
  const baseStyles = "relative overflow-hidden font-medium transition-all duration-300 ease-out flex items-center justify-center rounded-full";
  
  const variants = {
    primary: "bg-primary text-primary-foreground hover:opacity-90",
    secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
    outline: "border border-primary bg-transparent text-primary hover:bg-primary/10",
    ghost: "bg-transparent hover:bg-secondary text-primary"
  };
  
  const sizes = {
    sm: "text-xs px-4 py-1.5",
    md: "text-sm px-5 py-2",
    lg: "text-base px-8 py-3"
  };
  
  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);
  
  return (
    <button
      className={cn(
        baseStyles,
        variants[variant],
        sizes[size],
        className
      )}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      <span
        className={`absolute inset-0 bg-white/10 transform ${
          isHovered ? 'translate-x-full' : '-translate-x-full'
        } transition-transform duration-500 ease-out`}
      />
      <span className="relative z-10">{children}</span>
    </button>
  );
};

export default AnimatedButton;
