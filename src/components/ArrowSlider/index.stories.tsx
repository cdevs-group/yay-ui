import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import ArrowSlider from "./ArrowSlider";

export default {
  title: "Components/ArrowSlider",
  component: ArrowSlider,
  argTypes: {},
} as Meta;

export const ArrowsSlider: React.FC = () => {
  return <ArrowSlider />;
};
