import React from 'react';
import * as icons from '@/assets/svg/index';
import './navigation.css';

import Image from 'next/image';

type IconNameType = keyof typeof icons;

export interface NavigationLinkProps {
  id?: string;
  label?: string;
  href?: string;
  icon?: IconNameType;
  selectedId?: string;
}

/** Primary UI component for user interaction */
export const NavigationLink = ({
  id,
  label,
  href,
  icon,
  selectedId,
}: NavigationLinkProps) => {
  const Icon = icon && icons[icon];

  return (
    <>
      <li id={id} className="hover:bg-light-brown-500 rounded-full cursor-pointer transition-all">
        <a href={href} className="flex items-center text-light-brown-800 hover:text-brand-500">
          <Image src={Icon} alt="" /> <span className="ml-2">{label}</span>
        </a>
      </li>
    </>
  );
};
