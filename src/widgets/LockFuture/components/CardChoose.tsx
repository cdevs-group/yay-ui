import React from "react";
import styled from "styled-components";
import { Button } from "../../..";
import { Flex } from "../../../components/Box";
import { Text } from "../../../components/Text";
import { AccountIcon } from "../../../constants/images";
import { ICardChoose } from "../types";

const CardChoose = ({
  texts,
  tabs,
  valueInput,
  buttonLeft,
  buttonRight,
  onUserInput,
  balance,
  iconCurrency,
}: ICardChoose) => {
  return (
    <Card>
      <Text mb="16px" fontSize="21px" lineHeight="27px" fontWeight="400">
        {texts.title}
      </Text>
      <Hr />
      <Flex mb="16px" alignItems="center">
        <Icon>
          {iconCurrency || <img src={AccountIcon} alt="logo" />}
          {texts?.currency || "YAY"}
        </Icon>
        <div>
          <Text fontSize="14px" lineHeight="18px" letterSpacing="0.05em">
            {texts.balance}
          </Text>
          <Text fontSize="14px" lineHeight="18px" letterSpacing="0.05em" color="green">
            {balance}
          </Text>
        </div>
      </Flex>
      <Text mb="10px" color="greyText" fontSize="14px" lineHeight="24px" letterSpacing="-0.02em" fontWeight="400">
        {texts.choose}
      </Text>
      <Flex justifyContent="space-between" mb="32px">
        {tabs.map((el: { value: number; disabled: boolean }, i: number) => (
          <Tab
            key={i}
            scale="sm"
            disabled={el.disabled}
            variant={el.value === valueInput ? "green" : "option"}
            onClick={() => onUserInput(el.value)}
          >
            {el.value / 1000}K
          </Tab>
        ))}
      </Flex>
      <Flex justifyContent="space-between">
        {buttonLeft}
        {buttonRight}
      </Flex>
    </Card>
  );
};

export default CardChoose;

const Card = styled.div`
  padding: 25px;
  background: ${({ theme }) => theme.colors.dark};
  box-shadow: ${({ theme }) => theme.colors.boxShadow2};
  border-radius: 20px;
  color: ${({ theme }) => theme.colors.text};
`;

const Tab = styled(Button)`
  width: 31%;
  padding: 4px 16px;
  border-radius: 9px;
  font-weight: 400;
  transition: 0.3s;
  &:disabled {
    background: ${({ theme }) => theme.colors.whiteRgba};
    opacity: 0.5;
  }
`;

const Hr = styled.div`
  height: 2px;
  width: 100%;
  opacity: 0.5;
  margin-bottom: 16px;
  background: ${({ theme }) => theme.colors.dark2};
`;

const Icon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 7px 15px;
  margin-right: 19px;
  background: ${({ theme }) => theme.colors.bgOpacitY3};
  border-radius: 12px;
  font-size: 11px;
  line-height: 14px;
  letter-spacing: 0.5px;
  color: ${({ theme }) => theme.colors.text};
  & img {
    margin-bottom: 7px;
  }
`;
