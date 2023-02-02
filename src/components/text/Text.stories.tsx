import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Text } from "./Text";

export default {
  title: "Atoms/Text",
  component: Text,
  argTypes: {},
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Default = Template.bind({});
Default.args = {
  variant: "",
  children: "This is a text component with type",
  classes: "p-5",
};
