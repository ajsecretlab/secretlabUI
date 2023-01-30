import { addons } from "@storybook/addons";
import { themes } from "@storybook/theming";
import secretlabTheme from "./secretlabTheme.cjs";

addons.setConfig({
  theme: secretlabTheme,
});
