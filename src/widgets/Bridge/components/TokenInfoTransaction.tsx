import React, { useState } from "react";
import styled from "styled-components";
import { InfoWrapperTransactionHistoryProps } from "../types";
import { Text } from "../../../components/Text";
import { Metamask } from "../../../constants/images";
import { ArrowLeft, CopyIcon } from "../../../components/Svg";
import { ellipsis } from "../../../helpers/ellipsis";
import { getBalanceAmount } from "../../../helpers/bigNumber";

const TokenInfoTransaction = ({
  data,
  textCopy,
  addTokenHandler,
  addTokenIcon,
  textTransaction,
}: InfoWrapperTransactionHistoryProps) => {
  const [isTooltipDisplayed, setIsTooltipDisplayed] = useState(false);

  const ButtonsBlock = ({ type }: { type?: string }) => (
    <BlockInfo className={`${type}`}>
      <Button onClick={() => addTokenHandler(data?.network)} value={data?.network}>
        {addTokenIcon || <img src={Metamask} />}
      </Button>
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
      <Button as="a" href={data?.link} className="arrow" target="_blank">
        <ArrowLeft />
      </Button>
    </BlockInfo>
  );

  return (
    <WrapBlock>
      <Text>
        {textTransaction} {data?.network?.toLocaleUpperCase()}
      </Text>
      <WrapperInfo>
        <LeftColumnInfo>
          <Text marginBottom="10px" size="xs">
            {getBalanceAmount(data?.amount)} YAY
          </Text>
          <Text size="xs">{ellipsis(data?.hash || "", 10)}</Text>
          <Tooltip isTooltipDisplayed={isTooltipDisplayed}>{textCopy}</Tooltip>
        </LeftColumnInfo>
        <ButtonsBlock />
      </WrapperInfo>
      <ButtonsBlock type="mob" />
    </WrapBlock>
  );
};

export default TokenInfoTransaction;

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
