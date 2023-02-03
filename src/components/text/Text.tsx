import React from "react";
import classNames from "classnames";
import { variantStyles, colorStyles } from "./Text.styles";

export interface IText {
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
}: IText) => {
  let Element;
  if ((classes || color) && !variant && !component) {
    Element = React.createElement(
      "span",
      {
        className: classNames(color && colorStyles[color], classes),
        "data-testid": "span",
      },
      children
    );
  } else {
    Element = children;
  }

  if (variant) {
    Element = React.createElement(
      variant !== "default" ? variant : "span",
      {
        className: classNames(
          color && colorStyles[color],
          variantStyles[variant],
          classes
        ),
        "data-testid": variant !== "default" ? variant : "span",
      },
      Element
    );
  }

  if (component) {
    Element = React.createElement(component, {}, Element);
  }

  return <>{Element}</>;
};
