import React from "react";
import styled from "styled-components";
import { Button } from "../../../components/Button";
import { CloseIcon } from "../../../components/Svg";
import { Flex, Box } from "../../../components/Box";
import { Text } from "../../../components/Text";
import { SimpleInput } from "../../../components/Input";
import { ButtonProps } from "../../../components/Button/types";

interface IProps {
  texts: {
    title: string;
    placeholder1: string;
    placeholder2: string;
    fee: string;
    receive: string;
    button: string;
    titleInput1: string;
    titleInput2: string;
  };
  onDismiss: () => void;
  count?: boolean;
  fee?: string;
  receive?: string;
  handleClick: () => void | Promise<void>;
  buttonProps?: ButtonProps;
  handleInput: (e: any) => void;
  inputValues: {
    price: string;
    count: string;
  };
}

const OrderModal = ({
  texts,
  onDismiss,
  count,
  fee,
  inputValues,
  receive,
  handleClick,
  buttonProps,
  handleInput,
}: IProps) => {
  return (
    <Wrapper>
      <Flex alignItems="center" justifyContent="space-between">
        <Text fontSize="21px">{texts.title}</Text>
        <ButtonClose onClick={onDismiss}>
          <CloseIcon />
        </ButtonClose>
      </Flex>
      <Box mt={40}>
        <SimpleInput
          onChange={handleInput}
          value={inputValues.price}
          placeholder={texts.placeholder1}
          title={texts.titleInput1}
          name="price"
        />
      </Box>
      {count && (
        <Box mt={20}>
          <SimpleInput
            onChange={handleInput}
            name="count"
            value={inputValues.count}
            placeholder={texts.placeholder2}
            title={texts.titleInput2}
          />
        </Box>
      )}
      <Flex justifyContent="space-between" mt={20}>
        <Text color="#A3A3A3">{texts.fee}</Text>
        <Text>{fee}</Text>
      </Flex>
      <Flex justifyContent="space-between" mt={20}>
        <Text color="#A3A3A3">{texts.receive}</Text>
        <Text>{receive}</Text>
      </Flex>
      <Button onClick={handleClick} variant="purple" width="100%" mt={50} {...buttonProps}>
        {texts.button}
      </Button>
    </Wrapper>
  );
};

export default OrderModal;

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
