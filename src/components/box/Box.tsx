import classNames from "classnames";
import React, { ReactNode } from "react";
import { variantStyles, variantType } from "./Box.styles";

export interface IBox {
  children: ReactNode;
  classes?: string;
  variant?: variantType;
}

export const Box = ({ children, classes, variant = "span" }: IBox) => {
  return React.createElement(
    variantStyles[variant],
    { className: classes, role: variant },
    children
  );
};
