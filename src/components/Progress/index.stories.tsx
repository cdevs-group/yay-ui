import React, { useState } from "react";
import { ProgressSteps, ProgressRange } from "./index";
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

export const ProgressRangeBlock = () => {
  const texts = {
    waiting: "Waiting for Binance Smart Chain",
    start: "Start",
    final: "Final",
  };

  return (
    <div style={{ padding: "32px", width: "500px" }}>
      <Block>
        <ProgressRange progress={10} texts={texts} />
      </Block>
      <Block>
        <ProgressRange progress={60} texts={texts} />
      </Block>
      <Block>
        <ProgressRange progress={90} texts={texts} />
      </Block>
    </div>
  );
};
