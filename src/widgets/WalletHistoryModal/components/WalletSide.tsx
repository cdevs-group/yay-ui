import React, { useState } from "react";
import styled from "styled-components";
import { Text } from "../../../components/Text";
import { Button } from "../../../components/Button";
import { CopyIcon } from "../../../components/Svg";
import { WalletSideProps } from "../types";

const WalletSide = ({ textsWallet }: WalletSideProps) => {
  const [isTooltipDisplayed, setIsTooltipDisplayed] = useState(false);
  return (
    <Wrapper>
      <Title>{textsWallet.title}</Title>
      <Address>
        <AddressTextWrapper>
          <AddressText>{textsWallet.address}</AddressText>
        </AddressTextWrapper>
        <CopyButton
          onClick={() => {
            if (navigator.clipboard) {
              navigator.clipboard.writeText(textsWallet.address);
              setIsTooltipDisplayed(true);
              setTimeout(() => {
                setIsTooltipDisplayed(false);
              }, 1000);
            }
          }}
        >
          <CopyIcon />
        </CopyButton>
        <Tooltip isTooltipDisplayed={isTooltipDisplayed}>{textsWallet.completeText}</Tooltip>
      </Address>
      <Line>
        <Key size="sm">{textsWallet.network}</Key>
        <Text size="sm">{textsWallet.newtworkName}</Text>
      </Line>
      <Line>
        <Key size="sm">{textsWallet.wallet}</Key>
        <Text size="sm">{textsWallet.walletName}</Text>
      </Line>
      <DisconnetButton>{textsWallet.button}</DisconnetButton>
    </Wrapper>
  );
};

export default WalletSide;

const Wrapper = styled.div`
  margin-top: 37px;
`;
const Title = styled(Text)`
  color: ${({ theme }) => theme.colors.greyText};
`;
const Key = styled(Title)``;
const Address = styled.div`
  height: 50px;
  position: relative;
  margin-top: 7px;
  padding: 17px 24px 17px 24px;
  background: ${({ theme }) => theme.colors.buttonBg};
  box-shadow: ${({ theme }) => theme.colors.boxShadow4};
  border-radius: 12px;
  &::after {
    position: absolute;
    content: "";
    top: 0;
    right: 0;
    display: block;
    background: linear-gradient(270deg, #1d1d22 53.6%, rgba(27, 27, 32, 0) 100%);
    height: 100%;
    width: 76px;
    border-radius: 0px 12px 12px 0;
  }
`;
const AddressText = styled(Text)`
  white-space: nowrap;
  font-size: 13px;
  position: absolute;
`;
const Line = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;
const DisconnetButton = styled(Button)`
  display: block;
  margin: 50px auto 0;
  width: 270px;
  color: ${({ theme }) => theme.colors.greenText2};
  border: 1px solid ${({ theme }) => theme.colors.greenText2};
  box-sizing: border-box;
  border-radius: 10px;
  background: none;
`;
const CopyButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 10px;
  cursor: pointer;
  margin-left: 12px;
  width: 30px;
  height: 30px;
  border-radius: 7px;
  border: none;
  display: flex;
  background: none;
  align-items: center;
  justify-content: center;
  z-index: 2;
  & svg {
    fill: ${({ theme }) => theme.colors.greenText2};
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
const AddressTextWrapper = styled.div`
  overflow: hidden;
  width: 100%;
`;
