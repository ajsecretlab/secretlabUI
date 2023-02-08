import React, { forwardRef } from "react";
import classNames from "classnames";
import { variantStyles, colorStyles } from "./Text.styles";

export interface IText {
  component?: string;
  variant?: keyof typeof variantStyles;
  color?: keyof typeof colorStyles;
  children?: React.ReactNode | string | number;
  classes?: string;
}

export type Ref = HTMLSpanElement | HTMLHeadingElement;

export const Text = forwardRef<Ref, IText>(
  ({ children, classes, component, variant, color }, ref) => {
    let Element;
    if ((classes || color) && !variant && !component) {
      Element = React.createElement(
        "span",
        {
          ref,
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
          ref,
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
  }
);
