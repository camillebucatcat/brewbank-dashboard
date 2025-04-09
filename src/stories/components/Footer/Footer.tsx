'use client';
import React from 'react';

export interface FooterProps {
  children?: React.ReactNode;
}

export const Footer = ({
  children
}: FooterProps) => {
  return ( 
    <div className="container-fluid bg-white p-4 flex items-center justify-between gap-4">
      <div className="text-sm font-semibold text-neutral-700">© 2025 Brewbank</div>
      <div className="flex-1">
        {children}
      </div>
    </div>
   );
};
