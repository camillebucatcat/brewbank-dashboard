'use client'
import React from 'react';
import clsx from 'clsx';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

import * as icons from '@/assets/svg/index';
import './navigation.css';

type IconNameType = keyof typeof icons;

export interface NavigationLinkProps {
  id?: string;
  label?: string;
  href?: string;
  icon: IconNameType;
}

export const NavigationLink = ({
  id,
  label,
  href,
  icon,
}: NavigationLinkProps) => {
  const Icon = icon && icons[icon];
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <>
      <li id={id} className={clsx(
        "hover:bg-light-brown-200 rounded-full cursor-pointer transition-all",
        isActive ? "bg-light-brown-500" : null
      )}>
        <a href={href} className="flex items-center text-light-brown-800 hover:text-brand-500">
          {Icon && (<Image width={16} height={16} src={Icon === "" ? null : Icon} alt="image icon" />)} <span className="ml-2">{label}</span>
        </a>
      </li>
    </>
  );
};
