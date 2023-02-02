import React from "react";
import classnames from "classnames";
import { variant } from "./Text.styles";

export interface TextI {
  component?: string;
  variant?: keyof typeof variant;
  ariaLabel?: string;
  children: React.ReactNode | string | number;
  classes?: string;
}

export const Text = ({
  ariaLabel,
  children,
  classes,
  component,
  variant,
}: TextI) => {
  let Children, Variant, Element;
  if (classes && !variant && !component) {
    Element = React.createElement(
      "span",
      { className: classes, "aria-label": ariaLabel },
      children
    );
  } else {
    Element = children;
  }

  if (variant) {
    Element = React.createElement(
      variant,
      !component ? { className: classes, "aria-label": ariaLabel } : {},
      Element
    );
  }

  if (component) {
    Element = React.createElement(
      component,
      { className: classes, "aria-label": ariaLabel },
      Element
    );
  }

  return Element;
};
