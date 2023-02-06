export type ColorType = "error" | "primary" | "success";
export const colorStyles: { [K in ColorType]: string } = {
  "error" : "bg-error",
  "primary" : "bg-primary",
  "success" : "bg-success"
}
