import React from 'react';
import { NavigationLink, NavigationLinkProps } from './NavigationLink';
import './navigation.css';

export interface NavigationProps {
  links: NavigationLinkProps[];
  orientation?: string;
  selectedId?: string;
}

/** Primary UI component for user interaction */
export const Navigation = ({
  links,
  orientation = 'vertical',
  selectedId
}: NavigationProps) => {
  return (
    <nav className={`${orientation}`}>
      <ul className='nav-menu'>
        {links.map((link) => (
          <NavigationLink key={link.href} {...link} isActive={selectedId === link.href} />
        ))}
      </ul>
    </nav>
  );
};
