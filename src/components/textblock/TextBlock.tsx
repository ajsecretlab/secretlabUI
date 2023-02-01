import React, { ReactElement } from "react";
import classnames from "classnames";

export interface TextBlockI {
  children: ReactElement | string;
  type?: "paragraph" | "p" | "div" | "d" | "span" | "s";
  classes?: string;
}

export const TextBlock = ({ type, children, classes }: TextBlockI) => {
  const attributes = {
    className: classnames("", classes),
    children,
  };

  switch (type) {
    case "paragraph":
    case "p":
      return <p data-testid="text-block-paragraph" {...attributes} />;
    case "div":
    case "d":
      return <div data-testid="text-block-div" {...attributes} />;
    case "span":
    case "s":
    default:
      return <span data-testid="text-block-span" {...attributes} />;
  }
};
