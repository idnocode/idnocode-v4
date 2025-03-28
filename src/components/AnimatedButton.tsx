
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
    primary: "bg-gradient-to-r from-[#3ABEFF] to-[#2667FF] text-white hover:from-[#4361EE] hover:to-[#4CC9F0]",
    secondary: "bg-gradient-to-r from-[#F72585] to-[#B5179E] text-white hover:from-[#7209B7] hover:to-[#560BAD]",
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
