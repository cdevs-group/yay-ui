import React, { useState } from "react";
import { ProgressSteps } from "./index";
import styled from "styled-components";

export default {
  title: "Components/Progress",
};
const Block = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ProgressStepsBlock: React.FC = () => {
  const texts = {
    waiting: "Waiting for ",
    error: "Fatal Error",
    confirmations: "confirmations",
    checkIt: "Check it",
    start: "Start",
    step1: "1/35",
    step2: "2/35",
    finish: "Final",
  };

  return (
    <div style={{ width: "200px" }}>
      <Block>
        <ProgressSteps texts={texts} step={1} />
      </Block>
      <Block>
        <ProgressSteps texts={texts} step={2} />
      </Block>
      <Block>
        <ProgressSteps texts={texts} step={3} />
      </Block>
      <Block>
        <ProgressSteps texts={texts} step={4} />
      </Block>
      <Block>
        <ProgressSteps texts={texts} step={2} isError />
      </Block>
    </div>
  );
};
