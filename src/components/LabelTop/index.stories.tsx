import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import LabelTop from "./LabelTop";

export default {
  title: "Components/LabelTop",
  component: LabelTop,
  argTypes: {},
} as Meta;

export const Default: React.FC = () => {
  return <LabelTop text="My profile" label="Coming Soon" />;
};
