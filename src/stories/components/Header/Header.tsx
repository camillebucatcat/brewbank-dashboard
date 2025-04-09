'use client';
import { MenuLines } from '@/assets/svg';
import Image from 'next/image';
import React from 'react';

export interface HeaderProps {
  children?: React.ReactNode;
}

export const Header = ({
}: HeaderProps) => {
  return ( 
    <div className="container-fluid bg-white p-4 flex items-center justify-between">
      {/* TODO: update once Button component is setup */}
      <button type="button">
        <Image src={MenuLines} height="24" width="24" alt="icon" />
      </button>
      {/* TODO: update once Dropover component is setup */}
      <div>
        <p>side content</p>
      </div>
    </div>
   );
};
