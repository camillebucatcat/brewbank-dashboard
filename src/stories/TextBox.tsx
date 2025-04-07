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
  iconStart?: IconNameType;
  iconEnd?: IconNameType;
  disabled?: boolean;
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
  iconStart,
  iconEnd,
  disabled,
  ...props
}: TextBoxProps) => {
  return (
    <div className="storybook-textbox-container flex-col flex-auto">
      <label className="label ">{label}</label>
      <div
        className={["storybook-textbox", `storybook-textbox--${size}`].join(
          " "
        )}
      >
        {iconStart && (
          <div className="icon-start">
            <Image src={icons[iconStart]} alt="" />
          </div>
        )}{" "}
        <input
          className={["input", "focus:outline-none", "block"].join(" ")}
          id={id}
          type={inputType}
          placeholder={placeholder}
          onChange={props?.onChange}
          maxLength={maxLength}
          disabled={disabled}
        ></input>
        {iconEnd && (
          <div className="icon-end">
            <Image src={icons[iconEnd]} alt="" />
          </div>
        )}{" "}
      </div>
    </div>
  );
};
