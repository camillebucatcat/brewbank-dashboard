import React from 'react';
import { colors } from "@/styles/tokens";

export const Colors = ({
  // primary = false,
  // ...props
}) => {
  return (
    <>
      <h4 className='my-4 font-bold'>Surface colors</h4>
      <div className='grid grid-cols-7 mb-10'>
        {Object.entries(colors).map(([name, className]) => (
          <div key={name}>
            <div className={`w-20 h-20 bg-${name}`} />
            <p className="text-sm font-medium">{name}</p>
          </div>
        ))}
        
      </div>

      <h4 className='my-4 font-bold'>Text colors</h4>
      {Object.entries(colors).map(([name, className]) => (
        <div key={name}>
          <p className={`mt-2 text-sm font-medium text-${className}`}>{name}</p>
        </div>
      ))}
    </>
  );
};
