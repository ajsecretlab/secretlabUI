export type VariantType = "outlined" | "contained";
export type ColorType =
  | "default"
  | "primary"
  | "secondary"
  | "success"
  | "error"
  | "info"
  | "warning";
export type SizeType = "small" | "medium" | "large";

export const variantStyles = (variant: VariantType, color: ColorType) => {
  if (variant === "outlined")
    return `border border-${color} bg-transparent text-gray-900`;
  return "";
};

export const colorStyles: { [K in ColorType]: string } = {
  default: `bg-default border-default`,
  primary: "bg-primary border-primary",
  secondary: "bg-secondary border-secondary",
  success: "bg-success border-success",
  error: "bg-error border-error",
  info: "bg-info border-info",
  warning: "bg-warning border-warning",
};

export const sizeStyles: { [K in SizeType]: string } = {
  small: "py-1 px-3",
  medium: "py-2 px-4",
  large: "py-4 px-8",
};
