import React from "react";
import styled from "styled-components";
import { Text } from "../../../../components/Text";
import { IBlurStatus } from "../../types";

const BlurBlock = ({ statusText }: IBlurStatus) => {
  return (
    <Wrap>
      <TextStyle>{statusText}</TextStyle>
    </Wrap>
  );
};

export default BlurBlock;

const Wrap = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background: ${({ theme }) => theme.colors.bgGray};
  z-index: 2;
`;

const TextStyle = styled(Text)`
  font-size: 15px;
  line-height: 19px;
  letter-spacing: 0.13em;
  text-transform: uppercase;
  width: 100%;
  text-align: center;
  & span {
    color: ${({ theme }) => theme.colors.green};
  }
`;
