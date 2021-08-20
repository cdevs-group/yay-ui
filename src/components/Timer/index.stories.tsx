import React from "react";
import { Timer } from ".";
import TimerNotSolid from "./TimerNotSolid";
import TimerSimple from "./TimerSimple";

export default {
  title: "Components/Timer",
  component: [Timer, TimerSimple],
};

export const TimerBlock: React.FC = () => {
  return (
    <>
      <Timer time={180} color="green" />;
      <Timer isLoad time={180} color="green" />;
      <TimerNotSolid time={180} color="white" />;
      <TimerNotSolid isLoad />
      <TimerSimple
        time={180110}
        color="green"
        texts={{
          days: "d",
          hours: "h",
          minutes: "m",
          seconds: "s",
        }}
      />
    </>
  );
};
