import React from 'react';
import { NavigationLink, NavigationLinkProps } from './NavigationLink';

export interface NavigationProps {
  links: NavigationLinkProps[];
}

/** Primary UI component for user interaction */
export const Navigation = ({
  links,
}: NavigationProps) => {
  return (
    <nav>
      <ul>
        {links.map((link) => (
          <NavigationLink key={link.href} {...link} />
        ))}
      </ul>
    </nav>
  );
};
