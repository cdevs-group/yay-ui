import React, { ReactNode } from "react";
import styled from "styled-components";
import { Flex } from "../../../components/Box";
import { Text } from "../../../components/Text";
import { CloseIcon } from "../../../components/Svg";
import { Button } from "../../../components/Button";
import { ButtonProps } from "../../../components/Button/types";

interface IProps {
  onDismiss: () => void;
  texts: {
    title: string;
    balance: string;
    pay: string;
    button: string;
  };
  description: ReactNode;
  balance: string;
  pay: string;
  handleClick: () => void | Promise<void>;
  buttonProps?: ButtonProps;
}

const OrderConformition = ({ texts, onDismiss, description, balance, pay, handleClick, buttonProps }: IProps) => {
  return (
    <Wrapper>
      <Flex alignItems="center" justifyContent="space-between">
        <Text fontSize="21px">{texts.title}</Text>
        <ButtonClose onClick={onDismiss}>
          <CloseIcon />
        </ButtonClose>
      </Flex>
      <Text mt={36}>{description}</Text>
      <Flex justifyContent="space-between" mt={20}>
        <Text color="#A3A3A3">{texts.balance}</Text>
        <Text>{balance}</Text>
      </Flex>
      <Flex justifyContent="space-between" mt={20}>
        <Text color="#A3A3A3">{texts.pay}</Text>
        <Text>{pay}</Text>
      </Flex>
      <Button onClick={handleClick} variant="purple" width="100%" mt={50} {...buttonProps}>
        {texts.button}
      </Button>
    </Wrapper>
  );
};

export default OrderConformition;

const Wrapper = styled.div`
  position: relative;
  padding: 28px 27px 20px;
  max-width: 404px;
  max-height: 100vh;
  min-width: 303px;
  width: 100%;
  background: ${({ theme }) => theme.colors.bgGray};
  box-shadow: 0px 20px 36px -8px rgba(14, 14, 44, 0.1), 0px 1px 1px rgba(0, 0, 0, 0.05);
  border-radius: 15px;
  z-index: ${({ theme }) => theme.zIndices.modal};
  overflow-y: auto;

  ${({ theme }) => theme.mediaQueries.xs} {
    min-width: 360px;
    width: 100%;
  }

  ${({ theme }) => theme.mediaQueries.sm} {
    min-width: 404px;
    width: 100%;
  }
`;
const ButtonClose = styled(Button)`
  background: none;
  padding: 0;
  box-shadow: none;
  position: absolute;
  right: 10px;
  top: 15px;
`;
