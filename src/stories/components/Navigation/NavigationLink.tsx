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

/** Primary UI component for user interaction */
export const NavigationLink = ({
  id,
  label,
  href,
  icon,
}: NavigationLinkProps) => {
  const Icon = icon && icons[icon];
  const pathname = usePathname();
  const isActive = pathname === href;

  // const renderIcon = (iconName: IconNameType) => {
  //   const Icon = icons[iconName];
  // console.log(Icon)

  //   return (
  //     <Icon
  //       width={20}
  //       height={20}
  //       fill="red"
  //     />
  //   );

  // };

  return (
    <>
      <li id={id} className={clsx(
        'hover:bg-light-brown-200 rounded-full cursor-pointer transition-all',
        isActive ? 'bg-light-brown-500' : null
      )}>
      {/* <li id={id} className="hover:bg-light-brown-200 rounded-full cursor-pointer transition-all"> */}
        <a href={href} className="flex items-center text-light-brown-800 hover:text-brand-500">
          {Icon && (<Image width={16} height={16} src={Icon === "" ? null : Icon} alt="image icon" />)} <span className="ml-2">{label}</span>
          {/* <Image src={Icon || null} alt="My Icon" width={50} height={50} /> <span className="ml-2">{label}</span>  */}
          {/* {icon && renderIcon(icon)} 
           <span className="ml-2">{label}</span> */}
        </a>
      </li>
    </>
  );
};
