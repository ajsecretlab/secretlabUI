import classNames from "classnames";
import React, { ReactNode } from "react";
import { variantStyles, variantType } from "./Box.styles";

export interface IBox {
  border?: boolean;
  children: ReactNode;
  classes?: string;
  rounded?: boolean;
  shadow?: boolean;
  variant?: variantType;
}

export const Box = ({
  border,
  children,
  classes,
  rounded,
  shadow,
  variant = "span",
}: IBox) => {
  return React.createElement(
    variantStyles[variant],
    {
      className: classNames(
        border && "border",
        rounded && "rounded",
        shadow && "shadow-lg",
        classes
      ),
      role: variant,
    },
    children
  );
};
