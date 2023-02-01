import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Text } from "../text/Text";
import { TextBlock } from "./TextBlock";

export default {
  title: "Atoms/TextBlock",
  component: TextBlock,
  argTypes: {
    children: {},
  },
} as ComponentMeta<typeof TextBlock>;

const Template: ComponentStory<typeof TextBlock> = (args) => (
  <TextBlock {...args} />
);

export const Default = Template.bind({});
Default.args = {
  type: "p",
  children: <Text name="I am a text inside a text block" />,
  classes: "p-5 ",
};
