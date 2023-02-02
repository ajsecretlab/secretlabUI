import React from "react";
import classNames from "classnames";
import { variantStyles, colorStyles } from "./Text.styles";

export interface TextI {
  component?: string;
  variant?: keyof typeof variantStyles;
  color?: keyof typeof colorStyles;
  children?: React.ReactNode | string | number;
  classes?: string;
}

export const Text = ({
  children,
  classes,
  component,
  variant,
  color,
}: TextI) => {
  let Element;
  if ((classes || color) && !variant && !component) {
    Element = React.createElement(
      "span",
      {
        className: classNames(color && colorStyles[color], classes),
      },
      children
    );
  } else {
    Element = children;
  }

  if (variant) {
    Element = React.createElement(
      variant,
      !component
        ? {
            className: classNames(
              color && colorStyles[color],
              variantStyles[variant],
              classes
            ),
          }
        : {},
      Element
    );
  }

  if (component) {
    Element = React.createElement(component, { className: classes }, Element);
  }

  return <>{Element}</>;
};
