import React from "react";
import { LoaderWrap, TextStyle, WaitingBlock } from "../styles";
import { Loader } from "../../../../components/Loader";

const WaitingOpponent = ({ title }: WaitingOpponentInterface) => {
  return (
    <WaitingBlock>
      <TextStyle>{title}</TextStyle>
      <LoaderWrap>
        <Loader />
      </LoaderWrap>
    </WaitingBlock>
  );
};

interface WaitingOpponentInterface {
  title?: string;
}
export default WaitingOpponent;
