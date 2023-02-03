export type variantType = "paragraph" | "div" | "span";

export type shadowType = "default" | "primary";

export const variantStyles: { [K in variantType]: string } = {
  paragraph: "p",
  div: "div",
  span: "span",
};
