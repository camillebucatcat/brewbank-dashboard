import React from 'react';
import Image from 'next/image';
import clsx from 'clsx';
import { useRouter } from 'next/router';

import * as icons from '@/assets/svg/index';
import './navigation.css';

type IconNameType = keyof typeof icons;

export interface NavigationLinkProps {
  id?: string;
  label?: string;
  href?: string;
  icon?: IconNameType;
}

/** Primary UI component for user interaction */
export const NavigationLink = ({
  id,
  label,
  href,
  icon,
}: NavigationLinkProps) => {
  const Icon = icon && icons[icon];
  const router = useRouter();
  const isActive = router.pathname === href;

  return (
    <>
      <li id={id} className={clsx(
        'hover:bg-light-brown-200 rounded-full cursor-pointer transition-all',
        isActive ? 'bg-light-brown-500' : null
      )}>
      {/* <li id={id} className="hover:bg-light-brown-200 rounded-full cursor-pointer transition-all"> */}
        <a href={href} className="flex items-center text-light-brown-800 hover:text-brand-500">
          <Image src={Icon} alt="" /> <span className="ml-2">{label}</span>
        </a>
      </li>
    </>
  );
};
