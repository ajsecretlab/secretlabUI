import React from "react";
import classnames from "classnames";

export interface AvatarI {
  src: string;
  alt: string;
  classes?: string;
}

export const Avatar = ({ src, alt, classes = "" }: AvatarI) => {
  return (
    <img
      data-testid="avatar"
      data-source={src}
      alt={alt}
      src={src}
      className={classnames("rounded-full", classes)}
    />
  );
};
