import React from 'react';
interface CardProps {
  children: ReactNode;
  className?: string;
}
export const Card = ({
  children,
  className = ''
}: CardProps) => {
  return <div className={`rounded-[64px] shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] ${className}`}>
      {children}
    </div>;
};