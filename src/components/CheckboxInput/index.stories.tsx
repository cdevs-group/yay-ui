import React from "react";
import { BrowserRouter } from "react-router-dom";
import styled from "styled-components";
import CheckboxInput from "./CheckboxInput";

export default {
  title: "Components/CheckboxInput",
  component: CheckboxInput,
  argTypes: {},
};

const Row = styled.div`
  margin-bottom: 32px;
  & > button + button,
  & > a + a {
    margin-left: 16px;
  }
`;

export const Variants: React.FC = () => {
  return (
    <div>
      <CheckboxInput />
    </div>
  );
};
