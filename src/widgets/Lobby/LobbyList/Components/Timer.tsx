import React from "react";
import { TextTitle, Time } from "../styles";
import TimerNotSolidWithoutBg from "../../../../components/Timer/TimerNotSolidWithoutBg";
import { lightColors } from "../../../../theme";

const Timer = ({ title, color, time }: TimeInterface) => {
  return (
    <Time>
      <TextTitle>{title}</TextTitle>
      <TimerNotSolidWithoutBg
        color={color}
        marginPoint="0 18px"
        width="186px"
        borderRadius="7px"
        background={lightColors.buttonBg}
        height="30px"
        time={time}
        widthWrapper="186px"
      />
    </Time>
  );
};

interface TimeInterface {
  title?: string;
  color?: string;
  time: number;
}
export default Timer;
