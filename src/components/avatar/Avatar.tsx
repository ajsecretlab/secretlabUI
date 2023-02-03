import React from "react";
import classnames from "classnames";
import { sizeType, sizeStyles } from "./Avatar.styles";

export interface AvatarI {
  src: string;
  alt: string;
  classes?: string;
  size?: sizeType;
}

export const Avatar = ({
  src,
  alt,
  classes = "",
  size = "medium",
}: AvatarI) => {
  return (
    <img
      data-testid="avatar"
      data-source={src}
      alt={alt}
      src={src}
      className={classnames("rounded-full", sizeStyles[size], classes)}
      {...sizeStyles[size]}
    />
  );
};
