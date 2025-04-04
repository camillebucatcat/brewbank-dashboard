import React from 'react';
import { backgroundColors, foregroundColors } from "@/app/tokens";

export const Colors = ({
  // primary = false,
  // ...props
}) => {
  return (
    <div>
      {Object.entries(backgroundColors).map(([name, className]) => (
        <div key={name}>
          <div className={`p-10 rounded-lg shadow-md border ${className}`}>
            <p className="mt-2 text-sm font-medium">{name}</p>
          </div>
        </div>
      ))}
      {Object.entries(foregroundColors).map(([name, className]) => (
        <div key={name}>
          <p className={`mt-2 text-sm font-medium ${className}`}>{name}</p>
        </div>
      ))}
    </div>
  );
};
