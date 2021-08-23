import React from "react";
import { TitleBlock } from ".";
import { COINS2 } from "../../constants/images";
import ProgressAVAX from "../Progress/ProgressAVAX";
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

export const TitleProgressTimer: React.FC = () => {
  const texts = {
    start: "START ROUND",
    end: "END ROUND",
    currentBlock: "Current Block",
    note: "Please note that the closing speed of one block depends on the network load and it’s indicated approximate time.",
  };

  return (
    <TitleBlock
      childrenVisibleModile
      src={COINS2}
      title="Up or Down?"
      subtitle="Which coin will have better price perfomace in"
    >
      <ProgressAVAX isLoad={false} time={222} texts={texts} blockFrom={112232} blockCurrent={112290} blockTo={114940} />
    </TitleBlock>
  );
};
