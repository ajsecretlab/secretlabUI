import classNames from "classnames";
import { ReactNode, forwardRef } from "react";
import { colorStyles, ColorType } from "./Tag.styles";

export interface ITag {
  children: ReactNode;
  classes?: string;
  color?: ColorType; 
}

export type Ref = HTMLSpanElement;

export const Tag = forwardRef<Ref, ITag>(
  ({ children, classes, color = "success" }, ref) => {
    return (
      <span ref={ref} data-testid="tag" className={classNames("tag", colorStyles[color], classes)}>
        {children}
      </span>
    );
  }
);

Tag.displayName = "Tag";
