import React, { JSX } from "react";

import "./textbox.css";
import * as icons from "@/assets/svg";
import Image from "next/image";

type IconNameType = keyof typeof icons;

export interface TextBoxProps {
  backgroundColor?: string;
  status?: string;
  size?: "small" | "medium" | "large";
  id?: string;
  label?: string;
  inputType?: "text" | "email" | "phone";
  placeholder?: string;
  maxLength?: number;
  icon?: IconNameType;
  iconPosition?: "start" | "end";
  onChange?: () => void;
}

export const TextBox = ({
  id,
  size = "medium",
  backgroundColor,
  label,
  inputType = "text",
  placeholder,
  status = "default",
  maxLength = 100,
  icon,
  iconPosition = "start",
  ...props
}: TextBoxProps) => {
  return (
    <div className="flex-col flex-auto">
      <label className="block text-gray-700 text-sm font-bold mb-2">
        {label}
      </label>
      <div
        className={[
          "storybook-textbox",
          `storybook-textbox--${size}`,
          iconPosition == "start" ? "flex-row" : "flex-row-reverse",
        ].join(" ")}
      >
        {icon && iconPosition && (
          <div className="icon">
            <Image src={icons[icon]} alt="" />
          </div>
        )}{" "}
        <input
          className={["input", "focus:outline-none", "block"].join(" ")}
          id={id}
          type={inputType}
          placeholder={placeholder}
          onChange={props?.onChange}
          maxLength={maxLength}
        ></input>
      </div>
    </div>
  );
};
