import React from "react";
import { Timer } from ".";
import TimerNotSolid from "./TimerNotSolid";

export default {
  title: "Components/Timer",
  component: [Timer],
};

export const TimerBlock: React.FC = () => {
  return (
    <>
      <Timer time={180} color="green" />;
      <Timer isLoad time={180} color="green" />;
      <TimerNotSolid time={180} color="white" />;
      <TimerNotSolid isLoad />
    </>
  );
};
