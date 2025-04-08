import React from 'react';
import { NavigationLink, NavigationLinkProps } from './NavigationLink';
import './navigation.css';

export interface NavigationProps {
  links: NavigationLinkProps[];
  orientation?: string;
}

export const Navigation = ({
  links,
  orientation = 'vertical',
}: NavigationProps) => {
  return (
    <nav className={`${orientation}`}>
      <ul className='nav-menu'>
        {links.map((link) => (
          <NavigationLink key={link.href} {...link} />
        ))}
      </ul>
    </nav>
  );
};
