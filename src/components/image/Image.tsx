import classNames from "classnames";
import { forwardRef } from "react";
import { variantStyles, variantType } from "./Image.styles";

export interface IImage {
  alt: string;
  classes?: string;
  lazyLoad?: boolean;
  src: string;
  variant?: variantType;
}

export type Ref = HTMLImageElement;

export const Image = forwardRef<Ref, IImage>(
  ({ alt, classes, lazyLoad, variant = "default", src }, ref) => {
    return (
      <img
        ref={ref}
        src={src}
        alt={alt}
        className={classNames(
          lazyLoad ? "lazy lazy-fade" : "",
          variantStyles[variant],
          classes
        )}
      />
    );
  }
);
