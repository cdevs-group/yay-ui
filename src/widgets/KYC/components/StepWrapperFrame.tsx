import React from "react";
import styled from "styled-components";
import { ButtonProps } from "../../../components/Button/types";
import { Text } from "../../../components/Text";
import { Button } from "../../../components/Button";
import InputSearch from "../../../components/InputSearch/InputSearch";

interface StepWrapperFrameProps {
  texts: {
    title: string;
    description: string;
    button: string;
    placeholder: string;
  };
  onClick: () => void | Promise<void>;
  buttonProps?: ButtonProps;
  isFrame: boolean;

  onChange: (e: any) => void;
  name: string;
  value: string | number;
  textError?: string;
}

const StepWrapperFrame = ({
  texts,
  onClick,
  buttonProps,
  onChange,
  name,
  value,
  textError,
  isFrame,
}: StepWrapperFrameProps) => {
  return (
    <Wrapper isFrame={isFrame}>
      <Title>{texts.title}</Title>
      <Description>{texts.description}</Description>
      {isFrame ? (
        <IFrame>
          <iframe
            height="100%"
            width="100%"
            src="https://app.shuftipro.com/process/kyc/c3Ig59XTNl4kguRteqOoxrME0vdEVUjdpxV5HQstKOfHwGjvAIoSGu9i54Nk7ojZ"
            id="shuftipro-iframe"
            allow="camera"
            frameBorder="0"
          ></iframe>
        </IFrame>
      ) : (
        <>
          <InputWrap>
            <InputSearch width="100%" placeholder={texts.placeholder} value={value} onChange={onChange} name={name} />
            {textError && <ErrorMessage>{textError}</ErrorMessage>}
          </InputWrap>
          <Button onClick={onClick} variant="green" maxWidth="285px" width="100%" {...buttonProps}>
            {texts.button}
          </Button>
        </>
      )}
    </Wrapper>
  );
};

export default StepWrapperFrame;

const Wrapper = styled.div<{ isFrame: boolean }>`
  max-width: 666px;
  width: 100%;
  padding: ${({ isFrame }) => (isFrame ? "43px 0 0" : "43px 0 20px")};
  background: ${({ theme }) => theme.colors.cardBg};
  border-radius: 15px;
  text-align: center;
`;
const Title = styled(Text)`
  padding: 0 20px;
  margin-bottom: 37px;
  font-weight: normal;
  font-size: 21px;
  line-height: 27px;
  letter-spacing: 0.5px;
  ${({ theme }) => theme.mediaQueries.md} {
    padding: 0 80px;
  }
`;
const Description = styled(Title)`
  margin-bottom: 0;
  font-size: 15px;
  line-height: 19px;
`;
const InputWrap = styled.div`
  position: relative;
  margin: 44px 0;
  padding: 0 20px;
  & button {
    display: none;
  }
  ${({ theme }) => theme.mediaQueries.md} {
    padding: 0 80px;
  }
`;
const ErrorMessage = styled(Text)`
  position: absolute;
  bottom: -25px;
  font-weight: normal;
  font-size: 13px;
  line-height: 16px;
  letter-spacing: 0.05em;
  color: ${({ theme }) => theme.colors.darkPink};
`;
const IFrame = styled.div`
  margin-top: 30px;
  width: 100%;
  height: 600px;
`;
