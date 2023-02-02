import "tailwindcss/tailwind.css";

export const parameters = {
  options: {
    storySort: {
      order: ["Atoms", "Examples"],
    },
  },
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
