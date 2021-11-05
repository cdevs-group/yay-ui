import React from "react";
import styled from "styled-components";
import { CardStatus } from "../../types";
import { Text } from "../../../../components/Text";
import { Flex } from "../../../../components/Box";

const BlurBlock = ({
  status,
  isLive,
  success,
  sale,
}: {
  status: CardStatus;
  sale: string;
  isLive: string;
  success: string;
}) => {
  if (status === CardStatus.COMPLETED) {
    return (
      <BlurWrapper>
        <TextStyle>
          <span>{success}</span> {sale}
        </TextStyle>
      </BlurWrapper>
    );
  }
  if (status === CardStatus.OPEN_WHITELIST) {
    return null;
  }
  return (
    <BlurWrapper>
      <TextStyle>
        {status} <span>{isLive}</span>
      </TextStyle>
    </BlurWrapper>
  );
};

export default BlurBlock;
const BlurWrapper = styled(Flex)`
  justify-content: center;
  align-items: center;
  position: absolute;
  left: -25px;
  top: -10px;
  width: calc(100% + 50px);
  height: calc(100% + 20px);
  background: rgba(38, 38, 45, 0.3);
  backdrop-filter: blur(5px);
`;
const TextStyle = styled(Text)`
  font-size: 15px;
  line-height: 19px;
  letter-spacing: 0.13em;
  text-transform: uppercase;
  & span {
    color: ${({ theme }) => theme.colors.green};
  }
`;
