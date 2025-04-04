import React from 'react';
import { colors } from "@/app/tokens";

export const Colors = ({
  // primary = false,
  // ...props
}) => {
  return (
    <div>
      {Object.entries(colors).map(([name, className]) => (
        <div key={name}>
          <div className={`p-10 rounded-lg shadow-md border bg-${className}`}>
            <p className="mt-2 text-sm font-medium">{name}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
