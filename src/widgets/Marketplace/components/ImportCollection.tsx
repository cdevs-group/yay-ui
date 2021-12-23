import React from "react";
import styled from "styled-components";
import { CloseIcon } from "../../../components/Svg";
import { Button } from "../../../components/Button";
import InputWithArea from "../../../components/Input/InputWithArea";
import { ButtonProps } from "../../../components/Button/types";
import { Text } from "../../../components/Text";

const ImportCollection = ({
  title,
  description,
  inputTitle,
  placeholder,
  inputValue,
  inputHandler,
  inputError,
  button,
  buttonHandler,
  buttonProps,
  handleClick,
}: {
  title: string;
  description: string;
  inputTitle: string;
  placeholder: string;
  inputValue: string;
  inputHandler: (e: any) => void;
  inputError: string;
  button: string;
  buttonHandler: () => void | Promise<void>;
  buttonProps?: ButtonProps;
  handleClick: () => void;
}) => {
  return (
    <Wrapper>
      <ButtonClose onClick={handleClick}>
        <CloseIcon />
      </ButtonClose>
      <Title>{title}</Title>
      <Description>{description}</Description>
      <InputWithArea
        fontSize="13px"
        margin="35px 0 0"
        title={inputTitle}
        placeholder={placeholder}
        value={inputValue}
        onChange={inputHandler}
        inputError={inputError}
        name="import"
      />
      <Button width="100%" marginTop="65px" onClick={buttonHandler} variant="green" {...buttonProps}>
        {button}
      </Button>
    </Wrapper>
  );
};

export default ImportCollection;

const Wrapper = styled.div`
  padding: 28px;
  position: relative;
  max-width: 404px;
  max-height: 100vh;
  min-width: 303px;
  width: 100%;
  background: ${({ theme }) => theme.colors.bgGray};
  box-shadow: 0px 20px 36px -8px rgba(14, 14, 44, 0.1), 0px 1px 1px rgba(0, 0, 0, 0.05);
  border-radius: 15px;
  //z-index: ${({ theme }) => theme.zIndices.modal};
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
  right: 15px;
  top: 0;
`;
const Title = styled(Text)`
  font-size: 21px;
  line-height: 27px;
  letter-spacing: 0.5px;
`;
const Description = styled(Text)`
  margin-top: 35px;
  font-weight: normal;
  font-size: 17px;
  line-height: 150%;
  letter-spacing: 0.5px;
  color: ${({ theme }) => theme.colors.whiteRgba4};
`;
