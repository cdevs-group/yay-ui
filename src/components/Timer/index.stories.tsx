import React from "react";
import { Timer } from ".";
import TimerNotSolid from "./TimerNotSolid";
import TimerText from "./TimerText";

export default {
  title: "Components/Timer",
  component: [Timer, TimerText],
};

export const TimerBlock: React.FC = () => {
  return (
    <>
      <Timer time={180} color="green" />;
      <Timer isLoad time={180} color="green" />;
      <TimerNotSolid time={180} color="white" />;
      <TimerNotSolid isLoad />
      <TimerText
        time={180110}
        color="green"
        texts={{
          days: "d",
          hours: "h",
          minutes: "m",
        }}
      />
    </>
  );
};
