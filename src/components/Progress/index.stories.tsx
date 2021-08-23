import React, { useState } from "react";
import ProgressAVAX from "./ProgressAVAX";
import Skeleton from "../Skeleton/Skeleton";

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
