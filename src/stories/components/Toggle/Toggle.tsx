'use client'
import React, { useState } from "react";

import './toggle.css';
import clsx from "clsx";

export interface ToggleProps {
  label?: string;
  checked?: boolean;
  disabled?: boolean;
  labelCSS?: string;
  onChange?: () => void;
}

export const Toggle = ({
  label,
  checked,
  disabled,
  labelCSS,
}: ToggleProps) => {
  const [isChecked, setChecked] = useState(checked);

  const handleToggle = () => {
    setChecked(!isChecked);
  };

  return (
    <>
      <label className="flex items-center">
        <div className={clsx("toggle-input-container", isChecked ? "checked" : " ", disabled ? "disabled" : "")}>
          <div className={clsx("toggle-indicator")}></div>
          <input
            type="checkbox"
            onChange={handleToggle}
            disabled={disabled}
            checked={checked}
            tabIndex={-1}
          />
        </div>
        <label onClick={handleToggle} className={clsx("font-medium ml-3 text-sm cursor-pointer", disabled ? "opacity-50" : "", labelCSS)}>{label}</label>
      </label>
    </>
  );
};