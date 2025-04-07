import React from 'react';
import * as icons from '@/assets/svg/index';

import Image from 'next/image';

type IconNameType = keyof typeof icons;

export interface NavigationLinkProps {
  label: string;
  href: string;
  icon?: IconNameType;
}

/** Primary UI component for user interaction */
export const NavigationLink = ({
  label,
  href,
  icon
}: NavigationLinkProps) => {
  const Icon = icon && icons[icon];

  return (
    <>
      <li>
        <a href={href} className="flex items-center">
          <Image src={Icon} alt="" className="mr-2" /> {label}
        </a>
      </li>
    </>
  );
};
