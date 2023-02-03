import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { colorStyles } from "./Text.styles";

import { Text } from "./Text";

export default {
  title: "Atoms/Text",
  component: Text,
  argTypes: {
    color: {
      defaultValue: "default",
      options: Object.keys(colorStyles),
      control: { type: "radio" },
    },
  },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: "This is a text component with type",
};

export const Header = Template.bind({});
Header.args = {
  children: (
    <>
      This is a header <Text color="primary">with primary text</Text>
    </>
  ),
  color: "default",
  variant: "h1",
};
