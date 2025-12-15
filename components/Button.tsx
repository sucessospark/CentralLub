import React from 'react';
import { MessageCircle } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'whatsapp';
  fullWidth?: boolean;
  icon?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  fullWidth = false, 
  className = '',
  icon,
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center gap-2 px-6 py-3 rounded-md font-heading font-bold transition-all duration-300 shadow-md transform hover:-translate-y-0.5";
  
  const variants = {
    primary: "bg-skf text-white hover:bg-skf-dark",
    secondary: "bg-graphite text-white hover:bg-graphite-dark",
    outline: "border-2 border-skf text-skf hover:bg-skf hover:text-white",
    whatsapp: "bg-[#25D366] text-white hover:bg-[#128C7E]"
  };

  const widthClass = fullWidth ? "w-full" : "";

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${widthClass} ${className}`}
      {...props}
    >
      {variant === 'whatsapp' && !icon && <MessageCircle size={20} />}
      {icon}
      {children}
    </button>
  );
};