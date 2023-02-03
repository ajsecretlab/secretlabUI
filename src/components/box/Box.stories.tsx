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
  children: "This is inside a span",
  classes: "p-5 border",
};

export const Paragraph = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Paragraph.args = {
  children: "This is inside a paragraph",
  classes: "p-5 border",
  variant: "paragraph",
};

export const Div = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Div.args = {
  children: "This is inside a div",
  classes: "p-5 border",
  variant: "div",
};

export const Border = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Border.args = {
  children: "This is a bordered div using the border attribute",
  classes: "p-5",
  border: true,
  variant: "div",
};

export const Shadow = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Shadow.args = {
  children: "This is a div with a shadow using the shadow attribute",
  classes: "p-5",
  shadow: true,
  variant: "div",
};

export const Rounded = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Rounded.args = {
  children: "This is a rounded div using the rounded attribute",
  classes: "p-5 border",
  rounded: true,
  variant: "div",
};
