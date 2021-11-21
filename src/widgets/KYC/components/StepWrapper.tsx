import React, { ReactNode } from "react";
import styled from "styled-components";
import { Flex } from "../../../components/Box";
import { Text } from "../../../components/Text";
import { Button } from "../../../components/Button";
import { ButtonProps } from "../../../components/Button/types";

interface StepWrapperProps {
  texts: {
    title: string;
    button: string;
    description: string;
    description2?: string;
  };
  onClick: () => void | Promise<void>;
  buttonProps?: ButtonProps;
  content: ReactNode;
  href?: string;
}

const StepWrapper = ({ texts, onClick, buttonProps, href, content }: StepWrapperProps) => {
  return (
    <Wrapper>
      <Title>{texts.title}</Title>
      <Main>
        <Description>
          {content}
          {texts.description}
        </Description>
        {texts.description2 && (
          <Description2 target="_blank" as="a" href={href}>
            {texts.description2}
          </Description2>
        )}
      </Main>
      {texts.description2 ? (
        <Button as="a" target="_blank" href={href} variant="green" width="100%">
          {texts.button}
        </Button>
      ) : (
        <Button onClick={onClick} variant="green" width="100%" {...buttonProps}>
          {texts.button}
        </Button>
      )}
    </Wrapper>
  );
};

export default StepWrapper;

const Wrapper = styled(Flex)`
  width: 100%;
  max-width: 338px;
  min-height: 408px;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 30px;
  background: ${({ theme }) => theme.colors.cardBg};
  border-radius: 15px;
`;
const Main = styled.div``;
const Title = styled(Text)`
  width: 100%;
  font-weight: normal;
  font-size: 21px;
  line-height: 27px;
  letter-spacing: 0.5px;
  color: #ffffff;
  text-align: left;
`;
const Description = styled(Text)`
  font-weight: normal;
  font-size: 15px;
  line-height: 19px;
  text-align: center;
  letter-spacing: 0.05em;
`;
const Description2 = styled(Description)`
  display: block;
  margin-top: 15px;
  font-size: 11px;
  line-height: 14px;
`;
