export type variantType = "default" | "fit" | "background";

export const variantStyles: {
  [K in variantType]: string;
} = {
  default: "",
  fit: "object-cover w-full h-full",
  background: "object-cover w-full h-full absolute top-0 left-0",
};
