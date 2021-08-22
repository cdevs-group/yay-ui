import React, { useState } from "react";
import { ProgressSteps, ProgressRange } from "./index";
import styled from "styled-components";
import ProgressAVAX from "./ProgressAVAX";

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
  };

  const stepsText = ["start", "1/25", "3/32", "finish"];

  return (
    <div style={{ width: "200px" }}>
      <Block>
        <ProgressSteps stepsText={stepsText} texts={texts} step={1} />
      </Block>
      <Block>
        <ProgressSteps stepsText={stepsText} texts={texts} step={2} />
      </Block>
      <Block>
        <ProgressSteps stepsText={stepsText} texts={texts} step={3} />
      </Block>
      <Block>
        <ProgressSteps stepsText={stepsText} texts={texts} step={4} />
      </Block>
      <Block>
        <ProgressSteps stepsText={stepsText} texts={texts} step={2} isError />
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

export const ProgressAVAXBlock = () => {
  const texts = {
    start: "START ROUND",
    end: "END ROUND",
    note: "Please note that the closing speed of one block depends on the network load and it’s indicated approximate time.",
  };

  return (
    <div style={{ padding: "32px", width: "500px" }}>
      <ProgressAVAX
        hour={0}
        min={20}
        sec={10}
        texts={texts}
        blockFrom={112232}
        blockCurrent={113930}
        blockTo={115231}
      />
    </div>
  );
};
