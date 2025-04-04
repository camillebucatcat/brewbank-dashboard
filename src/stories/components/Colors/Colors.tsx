import React from 'react';
import { backgroundColors } from "@/styles/tokens";

export const Colors = ({}) => {
  return (
    <>
      <h4 className='my-4 font-bold'>Colors</h4>
      <div className='grid grid-cols-12 mb-10'>
        {Object.entries(backgroundColors).map(([name, className]) => (
          <div key={name} className='mb-4'>
            <div className={`w-30 h-15 ${className}`} />
            <p className="mt-2 text-xs text-center font-medium">{name}</p>
          </div>
        ))}
      </div>
      {/* <h4 className='my-4 font-bold'>Text colors</h4>
      {Object.entries(foregroundColors).map(([name, className]) => (
        <div key={name}>
          <p className={`mt-2 text-sm font-medium ${className}`}>{name}</p>
        </div>
      ))} */}
    </>
  );
};
