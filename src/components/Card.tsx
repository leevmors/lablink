import React, { ReactNode } from 'react';
interface CardProps {
  children: ReactNode;
  className?: string;
  disabled?: boolean;
}
export const Card = ({
  children,
  className = '',
  disabled = false
}: CardProps) => {
  const baseClasses = "rounded-[32px] md:rounded-[64px] shadow-lg transition-[transform,box-shadow] duration-300 will-change-transform will-change-shadow";
  const hoverClasses = !disabled ? "hover:shadow-xl hover:scale-[1.02]" : "";

  return <div className={`${baseClasses} ${hoverClasses} ${className}`}>
      {children}
    </div>;
};