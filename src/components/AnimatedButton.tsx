
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
  
  const baseStyles = "relative overflow-hidden font-light transition-all duration-300 ease-out flex items-center justify-center rounded-full";
  
  const variants = {
    primary: "bg-gradient-to-r from-[#9b87f5] to-[#7E69AB] text-white hover:from-[#8B5CF6] hover:to-[#9b87f5]",
    secondary: "bg-gradient-to-r from-white/10 to-white/5 text-white hover:from-white/20 hover:to-white/15",
    outline: "border border-white/20 bg-transparent text-white hover:bg-white/10",
    ghost: "bg-transparent hover:bg-white/5 text-white"
  };
  
  const sizes = {
    sm: "text-xs px-4 py-2",
    md: "text-sm px-5 py-2.5",
    lg: "text-xs px-8 py-3.5"
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
        } transition-transform duration-500 ease-out rounded-full`}
      />
      <span className="relative z-10">{children}</span>
    </button>
  );
};

export default AnimatedButton;
