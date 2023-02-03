export type variantType = "paragraph" | "div" | "span";

export const variantStyles: { [K in variantType]: string } = {
  paragraph: "p",
  div: "div",
  span: "span",
};
