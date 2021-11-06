import React, { useState } from "react";
import ProgressAVAX from "./ProgressAVAX";
import ProgressRange from "./ProgressRange";
import ProgressSteps from "./ProgressSteps";
import ProgressWithText from "./ProgressWithText";

export default {
  title: "Components/Progress",
  argTypes: {},
};

export const ProgressAVAXBlock = () => {
  const texts = {
    start: "START ROUND",
    end: "END ROUND",
    currentBlock: "Current Block",
    note: "Please note that the closing speed of one block depends on the network load and it’s indicated approximate time.",
  };

  return (
    <div>
      <ProgressAVAX isLoad time={222} texts={texts} blockFrom={112232} blockCurrent={112290} blockTo={114940} />
      <h5>Text test</h5>
    </div>
  );
};

export const ProgressRangeBlock = () => {
  const texts = {
    waiting: "START ROUND",
    networkWaiting: "END ROUND",
    start: "Current Block",
    final:
      "Please note that the closing speed of one block depends on the network load and it’s indicated approximate time.",
  };

  return (
    <div style={{ maxWidth: 800 }}>
      <ProgressRange texts={texts} progress={50} />
    </div>
  );
};

export const ProgressStepsBlock = () => {
  const texts = {
    waiting: "START ROUND",
    error: "END ROUND",
    checkIt: "Current Block",
    confirmations:
      "Please note that the closing speed of one block depends on the network load and it’s indicated approximate time.",
  };

  return (
    <>
      <div style={{ maxWidth: 800, marginBottom: 50 }}>
        <ProgressSteps texts={texts} progress={50} isError stepsText={[]} />
      </div>
      <div style={{ maxWidth: 800 }}>
        <ProgressSteps texts={texts} progress={50} stepsText={[]} />
      </div>
    </>
  );
};

export const ProgressWithTextBlock = () => {
  return (
    <>
      <div style={{ maxWidth: 800, marginBottom: 50 }}>
        <ProgressWithText text="Whitelist Phase" progress={0} />
      </div>
      <div style={{ maxWidth: 800 }}>
        <ProgressWithText text="700 BNB/ 700 BNB" progress={50} />
      </div>
    </>
  );
};
