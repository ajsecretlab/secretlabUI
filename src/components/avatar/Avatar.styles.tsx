export type sizeType = "small" | "medium" | "large";

export const sizeStyles: {
  [K in sizeType]: { width: number; height: number };
} = {
  small: { width: 50, height: 50 },
  medium: { width: 75, height: 75 },
  large: { width: 100, height: 100 },
};
