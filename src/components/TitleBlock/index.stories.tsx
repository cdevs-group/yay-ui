import React from "react";
import { TitleBlock } from ".";
import { COINS2 } from "../../constants/images";
import TimerNotSolid from "../Timer/TimerNotSolid";

export default {
  title: "Components/TitleBlock",
  component: TitleBlock,
};

export const Title: React.FC = () => {
  return (
    <TitleBlock src={COINS2} title="Up or Down?" subtitle="Which coin will have better price perfomace in">
      <TimerNotSolid time={2000} color="green" />
    </TitleBlock>
  );
};
