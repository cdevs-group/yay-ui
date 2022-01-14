import React from "react";
import { IRegisterProfileProps } from "./types";
import styled from "styled-components";
import Input from "./Input";
import { Button } from "../../../components/Button";
import { Text } from "../../../components/Text";

const RegisterProfile = ({
  title,
  description,
  inputName1,
  inputName2,
  inputError1,
  inputError2,
  onClick,
  texts,
  buttonProps,
  inputValue1,
  inputValue2,
  onChange,
  handleSubmit,
  loginInputDisabled,
  sponsorInputDisabled,
}: IRegisterProfileProps) => {
  return (
    <Wrapper>
      {title && <Title>{title}</Title>}
      {description && <Description>{description}</Description>}
      <Form onSubmit={handleSubmit}>
        <Input
          onChange={onChange}
          name={inputName1}
          value={inputValue1}
          title={texts.inputTitle1}
          placeholder={texts.inputPlaceholder1}
          inputError={inputError1}
          disabled={loginInputDisabled}
        />
        <Input
          margin="25px 0 0"
          onChange={onChange}
          name={inputName2}
          value={inputValue2}
          title={texts.inputTitle2}
          placeholder={texts.inputPlaceholder2}
          inputError={inputError2}
          disabled={sponsorInputDisabled}
        />
        <Button width="100%" variant="green" onClick={onClick} margin="30px 0 0 0" type="submit" {...buttonProps}>
          {texts.buttonText}
        </Button>
      </Form>
    </Wrapper>
  );
};

export default RegisterProfile;

const Wrapper = styled.form`
  max-width: 500px;
  margin: 0 auto;
`;
const Title = styled(Text)`
  text-align: center;
  font-weight: normal;
  font-size: 42px;
  line-height: 121.8%;
  letter-spacing: 0.01em;
`;
const Description = styled(Text)`
  margin-top: 30px;
  margin-bottom: 30px;
  font-size: 15px;
  line-height: 19px;
  text-align: center;
  letter-spacing: 0.17em;
`;
const Form = styled.div`
  padding: 15px 15px 25px;
  max-width: 500px;
  width: 100%;
  background: ${({ theme }) => theme.colors.bgGray};
  border-radius: 15px;
  ${({ theme }) => theme.mediaQueries.sm} {
    padding: 25px 30px 35px;
  }
`;
