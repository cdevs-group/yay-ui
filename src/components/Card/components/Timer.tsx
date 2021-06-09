import React from "react";
import styled from "styled-components";

const Wrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

const Block = styled.div`
  padding: 15px 13px;
  background: rgba(0, 0, 0, 0.25);
  box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 12px;
  color: #fff;
`

const Dots = styled.div`
  margin: 0 12px;
  color: #fff;
`

const Timer: React.FC = () => {

  return (
    <Wrap >
      <Block>
        00
      </Block>
      <Dots>:</Dots>
      <Block>
        00
      </Block>
      <Dots>:</Dots>
      <Block>
        00
      </Block>
    </Wrap>
  );
};
export default Timer;
