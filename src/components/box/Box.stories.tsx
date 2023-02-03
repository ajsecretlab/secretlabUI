import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from ".";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Atoms/Box",
  component: Box,
  argTypes: {
    classes: {
      defaultValue: "",
    },
  },
} as ComponentMeta<typeof Box>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Box> = (args) => <Box {...args} />;

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  children: "This is within a span",
  classes: "p-5 border rounded",
};

export const Paragraph = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Paragraph.args = {
  children: "This is within a paragraph",
  classes: "p-5 border rounded",
  variant: "paragraph",
};

export const Div = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Div.args = {
  children: "This is within a div",
  classes: "p-5 border rounded",
  variant: "div",
};
