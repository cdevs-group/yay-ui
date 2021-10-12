import React, { useState } from "react";
import styled from "styled-components";
import { InfoWrapperProps, InfoWrapperTransactionHistoryProps } from "../types";
import YAYIcon from "../../../components/Svg/Icons/YAYIcon";
import { Text } from "../../../components/Text";
import { ClipIcon } from "../../../components/Svg";
import { Metamask } from "../../../constants/images";
import { ArrowLeft, CopyIcon } from "../../../components/Svg";
import { ellipsis } from "../../../helpers/ellipsis";

const InfoWrapperTransactionHistory = ({
  tokenLogo,
  data,
  textCopy,
  addTokenHandler,
  addTokenIcon,
  tokenName,
  textTransaction,
}: InfoWrapperTransactionHistoryProps) => {
  const [isTooltipDisplayed, setIsTooltipDisplayed] = useState(false);

  const ButtonsBlock = ({ type }: { type?: string }) => (
    <BlockInfo className={`${type}`}>
      <Button onClick={addTokenHandler}>{addTokenIcon || <img src={Metamask} />}</Button>
      <Button
        onClick={() => {
          if (navigator.clipboard) {
            navigator.clipboard.writeText(data?.hash || "");
            setIsTooltipDisplayed(true);
            setTimeout(() => {
              setIsTooltipDisplayed(false);
            }, 1000);
          }
        }}
      >
        <CopyIcon />
      </Button>
      <Button as="a" href={data?.anotherHash || ""} className="arrow">
        <ArrowLeft />
      </Button>
    </BlockInfo>
  );

  return (
    <Wrapper>
      <TokenLogo>
        <TokenImg>{tokenLogo || <YAYIcon />}</TokenImg>
        <Text>{tokenName || "YAY"}</Text>
      </TokenLogo>
      <MainBlock>
        <LeftColumn>
          <WrapBlock>
            <Text>
              {textTransaction} {data?.network?.toLocaleUpperCase()}
            </Text>
            <WrapperInfo>
              <LeftColumnInfo>
                <Text marginBottom="10px" size="xs">
                  {data?.amount || ""} YAY
                </Text>
                <Text size="xs">{ellipsis(data?.hash || "", 10)}</Text>
                <Tooltip isTooltipDisplayed={isTooltipDisplayed}>{textCopy}</Tooltip>
              </LeftColumnInfo>
              <ButtonsBlock />
            </WrapperInfo>
            <ButtonsBlock type="mob" />
          </WrapBlock>
        </LeftColumn>
        <MiddleColumn>
          <ClipIcon />
        </MiddleColumn>
        <RightColumn>
          <WrapBlock>
            <Text>
              {textTransaction} {data?.network === "avax" ? "BSC" : "AVAX"}
            </Text>
            <WrapperInfo>
              <LeftColumnInfo>
                <Text marginBottom="10px" size="xs">
                  {data?.amount || ""} YAY
                </Text>
                <Text size="xs">{ellipsis(data?.anotherHash || "", 10)}</Text>
                <Tooltip isTooltipDisplayed={isTooltipDisplayed}>{textCopy}</Tooltip>
              </LeftColumnInfo>
              <ButtonsBlock />
            </WrapperInfo>
            <ButtonsBlock type="mob" />
          </WrapBlock>
        </RightColumn>
      </MainBlock>
    </Wrapper>
  );
};

export default InfoWrapperTransactionHistory;

const Wrapper = styled.div`
  margin-top: 30px;
  padding: 22px 13px 27px 13px;
  background: ${({ theme }) => theme.colors.buttonBg};
  border-radius: 12px;
  &:first-child {
    margin-top: 0;
  }
  &:last-child {
    margin-bottom: 30px;
  }
  ${({ theme }) => theme.mediaQueries.lg} {
    padding: 22px 23px 27px 23px;
  } ;
`;
const TokenLogo = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 26px;
`;
const TokenImg = styled.div`
  width: 38px;
  height: 38px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.colors.bgOpacitY3};
  border-radius: 9px;
  margin: 0 10px 0 0;
`;
const MainBlock = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  ${({ theme }) => theme.mediaQueries.md} {
    flex-direction: row;
    align-items: center;
  } ;
`;
const LeftColumn = styled.div``;
const RightColumn = styled(LeftColumn)``;
const MiddleColumn = styled.div`
  position: relative;
  top: 0;
  width: 30px;
  height: 30px;
  display: flex;
  margin: 30px 0 20px;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.colors.whiteRgba};
  border-radius: 7px;
  ${({ theme }) => theme.mediaQueries.lg} {
    margin: 0 30px;
  }
  ${({ theme }) => theme.mediaQueries.md} {
    margin: 0 15px;
    top: 15px;
  } ;
`;

const BlockInfo = styled.div`
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
`;
const WrapBlock = styled.div<{ supple?: boolean }>`
  margin: ${({ supple }) => (supple ? "20px 0 0" : 0)};
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

const WrapperInfo = styled.div`
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

const LeftColumnInfo = styled.div`
  position: relative;
`;
