// src/components/Button.tsx
import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'social' | 'outline';
  className?: string;
  type?: "button" | "submit" | "reset";
}

const Button = ({ children, onClick, variant = 'primary', className = '', type = "button" }: ButtonProps) => {
  const base = "font-bold transition-all duration-200 active:scale-[0.98]";
  
  const variants = {
    // UPDATED: Uses your #058177 brand color from index.css
    primary: "bg-brand text-white hover:bg-brand-hover shadow-lg shadow-[#058177]/20",
    social: "bg-black text-white flex items-center justify-center gap-3 hover:bg-neutral-900",
    outline: "border border-neutral-300 text-neutral-700 hover:bg-neutral-50"
  };

  return (
    <button 
      type={type} 
      onClick={onClick} 
      className={`${base} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;