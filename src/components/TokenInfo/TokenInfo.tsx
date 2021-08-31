import React, { useState } from "react";
import { TokenInfoProps } from "./types";
import styled from "styled-components";
import Text from "../Text/Text";
import { Metamask } from "../../constants/images";
import { ArrowLeft, CopyIcon } from "../Svg";
import { ellipsis } from "../../helpers/ellipsis";

const TokenInfo = ({ addTokenIcon, textsInfo, supple, BSCSkanHandler, addTokenHandler }: TokenInfoProps) => {
  const [isTooltipDisplayed, setIsTooltipDisplayed] = useState(false);

  const ButtonsBlock = ({ type }: { type?: string }) => (
    <RightColumn className={`${type} ${supple ? "supple" : ""}`}>
      <Button className={supple ? "supple" : ""} onClick={addTokenHandler}>
        {addTokenIcon || <img src={Metamask} />}
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
      <Button onClick={BSCSkanHandler} className="arrow">
        <ArrowLeft />
      </Button>
    </RightColumn>
  );

  return (
    <WrapBlock supple={supple}>
      <Text>{textsInfo.title}</Text>
      <Wrapper>
        <LeftColumn>
          <Text marginBottom="10px" size="xs">
            {textsInfo.token}
          </Text>
          <Text size="xs">{ellipsis(textsInfo.address, 10)}</Text>
          <Tooltip isTooltipDisplayed={isTooltipDisplayed}>{textsInfo.textCopy}</Tooltip>
        </LeftColumn>
        <ButtonsBlock />
      </Wrapper>
      <ButtonsBlock type="mob" />
    </WrapBlock>
  );
};

export default TokenInfo;

const WrapBlock = styled.div<{ supple?: boolean }>`
  margin: ${({ supple }) => (supple ? "20px 0 0" : 0)};
`;
const Wrapper = styled.div`
  width: 206px;
  margin: 7px 0 0;
  padding: 19px 12px 19px 11px;
  max-width: 331px;
  min-height: 77px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: ${({ theme }) => theme.colors.whiteRgba};
  border-radius: 12px;
  &:first-child {
    margin: 0;
  }
  ${({ theme }) => theme.mediaQueries.lg} {
    padding: 19px 22px 19px 16px;
  }
  ${({ theme }) => theme.mediaQueries.md} {
    padding: 19px 22px 19px 16px;
  }
  ${({ theme }) => theme.mediaQueries.xs} {
    width: auto;
  } ;
`;
const LeftColumn = styled.div`
  position: relative;
`;
const RightColumn = styled.div`
  display: none;
  align-items: center;
  justify-content: flex-end;
  ${({ theme }) => theme.mediaQueries.xs} {
    display: flex;
  }
  &.mob {
    display: flex;
    margin-top: 15px;
    justify-content: space-between;
    &.supple {
      justify-content: space-around;
    }
    ${({ theme }) => theme.mediaQueries.xs} {
      display: none;
    }
  }
`;
const Button = styled.button`
  cursor: pointer;
  margin-left: 0;
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
      transform: rotate(135deg) translate(-1px, 2px);
    }
  }
  ${({ theme }) => theme.mediaQueries.xs} {
    margin-left: 12px;
  }
  &.supple {
    display: none;
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
