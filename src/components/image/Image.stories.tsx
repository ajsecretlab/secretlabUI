import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Image } from "./Image";
import { variantStyles } from "./Image.styles";

export default {
  title: "Atoms/Image",
  component: Image,
  argTypes: {
    src: {
      description: "Image url source",
      control: "text",
    },
    classes: {
      control: "text",
    },
    alt: {
      description: "Alternate text for accessiblity purposes",
      control: "text",
    },
  },
} as ComponentMeta<typeof Image>;

const Template: ComponentStory<typeof Image> = (args) => <Image {...args} />;

export const Default = Template.bind({});
Default.args = {
  src: "https://images.secretlab.co/theme/common/homepage-bg-esports-manufacturing.jpg",
  classes: "",
  alt: "World-class manufacturing",
};
