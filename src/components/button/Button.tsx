import classNames from "classnames";
import { ReactNode, forwardRef } from "react";
import {
  colorStyles,
  sizeStyles,
  variantStyles,
  VariantType,
  SizeType,
  ColorType,
} from "./Button.styles";

export interface IButton {
  children: ReactNode;
  disabled: boolean;
  color: ColorType;
  size: SizeType;
  variant: VariantType;
  onClick?: () => void;
  type: string;
  classes: string;
}

export type Ref = HTMLButtonElement;
type RequiredOne<T, K extends keyof T> = Pick<T, K> & Partial<T>;

export const Button = forwardRef<Ref, RequiredOne<IButton, "children">>(
  (
    {
      children,
      variant = "contained",
      color = "default",
      size = "medium",
      type,
      classes,
      onClick,
      disabled,
    },
    ref
  ) => {
    return (
      <button
        type="button"
        ref={ref}
        onClick={onClick}
        className={classNames(
          "rounded-full text-white hover:opacity-80 ",
          colorStyles[color],
          sizeStyles[size],
          variantStyles(variant, color),
          disabled && "disabled:opacity-50 cursor-not-allowed",
          classes
        )}
        disabled={disabled}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
