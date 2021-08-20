import React, { useState } from "react";
import { TokenInfoProps } from "./types";
import styled from "styled-components";
import Text from "../Text/Text";
import { Metamask } from "../../constants/images";
import { ArrowLeft, CopyIcon } from "../Svg";
import { ellipsis } from "../../helpers/ellipsis";

const TokenInfo = ({ textsInfo, margin }: TokenInfoProps) => {
  const [isTooltipDisplayed, setIsTooltipDisplayed] = useState(false);
  return (
    <Wrapper margin={margin}>
      <LeftColumn>
        <Text marginBottom="10px" size="xs">
          {textsInfo.token}
        </Text>
        <Text size="xs">{ellipsis(textsInfo.address, 10)}</Text>
        <Tooltip isTooltipDisplayed={isTooltipDisplayed}>{textsInfo.textCopy}</Tooltip>
      </LeftColumn>
      <RightColumn>
        <Button onClick={() => {}}>
          <img src={Metamask} />
        </Button>
        <Button
          onClick={() => {
            if (navigator.clipboard) {
              navigator.clipboard.writeText(textsInfo.address);
              setIsTooltipDisplayed(true);
              setTimeout(() => {
                setIsTooltipDisplayed(false);
              }, 1000);
            }
          }}
        >
          <CopyIcon />
        </Button>
        <Button onClick={() => {}} className="arrow">
          <ArrowLeft />
        </Button>
      </RightColumn>
    </Wrapper>
  );
};

export default TokenInfo;

const Wrapper = styled.div<{ margin?: string }>`
  margin: ${({ margin }) => (margin ? margin : 0)};
  padding: 19px 22px 19px 16px;
  max-width: 331px;
  min-height: 77px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: ${({ theme }) => theme.colors.whiteRgba};
  border-radius: 12px;
`;
const LeftColumn = styled.div`
  position: relative;
`;
const RightColumn = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
const Button = styled.button`
  cursor: pointer;
  margin-left: 12px;
  width: 30px;
  height: 30px;
  background: ${({ theme }) => theme.colors.whiteRgba};
  border-radius: 7px;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  & img {
    width: 27px;
  }
  &.arrow {
    & svg {
      transform: rotate(125deg) translate(-2px, 3px);
    }
  }
`;
const Tooltip = styled.div<{ isTooltipDisplayed: boolean; left?: string }>`
  display: ${({ isTooltipDisplayed }) => (isTooltipDisplayed ? "block" : "none")};
  position: absolute;
  bottom: -22px;
  right: 0;
  left: ${({ left }) => left || 0};
  text-align: center;
  background-color: ${({ theme }) => theme.colors.contrast};
  color: ${({ theme }) => theme.colors.invertedContrast};
  border-radius: 16px;
  opacity: 0.7;
`;
