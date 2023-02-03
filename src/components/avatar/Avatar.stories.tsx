import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Avatar } from "./Avatar";
import { sizeStyles } from "./Avatar.styles";

export default {
  title: "Atoms/Avatar",
  component: Avatar,
  argTypes: {
    src: {
      control: "text",
    },
    classes: {
      control: "text",
    },
    alt: {
      description: "Alternate text for accessiblity purposes",
      control: "text",
    },
    size: {
      defaultValue: "medium",
      option: Object.keys(sizeStyles),
      control: "radio",
    },
  },
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;

export const Default = Template.bind({});
Default.args = {
  src: "https://images.secretlab.co/theme/common/technology-review-portrait-2-min.jpg",
  classes: "lazy lazy-fade",
  alt: "Dr. James Goh",
  size: "medium",
};
