export type variantType =
  | "default"
  | "small"
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6";
export type colorType = "default" | "primary" | "secondary" | "disabled";

export const variantStyles: { [K in variantType]: string } = {
  default: "",
  small: "text-sm",
  h1: "text-5xl font-bold",
  h2: "text-4xl font-bold",
  h3: "text-3xl font-bold",
  h4: "text-2xl font-bold",
  h5: "text-xl font-bold",
  h6: "text-lg font-bold",
};

export const colorStyles: { [K in colorType]: string } = {
  default: "",
  primary: "text-primary",
  secondary: "text-secondary",
  disabled: "text-disabled",
};
