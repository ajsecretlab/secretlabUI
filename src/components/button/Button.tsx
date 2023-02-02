import classNames from "classnames";
import React, { ReactNode, forwardRef } from "react";
import { colorStyles, sizeStyles, variantStyles } from "./Button.styles";

export interface IButton {
  children: ReactNode;
  disabled: boolean;
  color: keyof typeof colorStyles;
  variant: keyof typeof variantStyles;
  size: keyof typeof sizeStyles;
  onClick?: () => void;
  classes: string;
}

export type Ref = HTMLButtonElement;

export const Button = forwardRef<Ref, IButton>(
  (
    {
      children,
      variant = "contained",
      color = "default",
      size = "medium",
      classes,
      onClick,
      disabled,
    }: IButton,
    ref
  ) => {
    return (
      <>
        <button
          ref={ref}
          onClick={onClick}
          className={classNames(
            "rounded-full text-white hover:opacity-80 ",
            variantStyles[variant],
            colorStyles[color],
            sizeStyles[size],
            disabled && "disabled:opacity-50 cursor-not-allowed",
            classes
          )}
          disabled={disabled}
        >
          {children}
        </button>
      </>
    );
  }
);
