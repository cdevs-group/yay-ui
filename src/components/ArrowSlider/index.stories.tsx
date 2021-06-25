import React, { useState, useEffect } from "react";
import styled from "styled-components";
import noop from "lodash/noop";
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
