import React, { ReactNode } from 'react';
interface CardProps {
  children: ReactNode;
  className?: string;
}
export const Card = ({
  children,
  className = ''
}: CardProps) => {
  return <div className={`rounded-[64px] shadow-lg hover:shadow-xl transition-[transform,box-shadow] duration-300 hover:scale-[1.02] will-change-transform will-change-shadow ${className}`}>
      {children}
    </div>;
};