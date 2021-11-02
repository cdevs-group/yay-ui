import React from "react";
import styled from "styled-components";
import { Text } from "../../components/Text";
import BG from "./img/image-bg.png";
import { Button, ButtonProps } from "../../components/Button";

interface IProps {
  text: {
    title: string;
    description: string;
    button: string;
  };
  canClaim?: boolean;
  propsBtnClaimBlock?: ButtonProps;
}

const ClaimBlock = ({ text, canClaim, propsBtnClaimBlock }: IProps) => {
  return (
    <Card src={BG}>
      <StyledTitle>{text.title}</StyledTitle>
      <StyledDescription>{text.description}</StyledDescription>
      <StyledButton variant={canClaim ? "green" : "option"} {...propsBtnClaimBlock}>
        {text.button}
      </StyledButton>
    </Card>
  );
};

const Card = styled.a<{ src: string }>`
  position: relative;
  display: block;
  min-height: 250px;
  padding: 18px 24px;
  background: ${({ src }) => `url(${src}) no-repeat left center /cover`};
  background-color: ${({ theme }) => theme.colors.bgGray};
  border-radius: 20px;

  & img {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: 0;

    ${({ theme }) => theme.mediaQueries.sm} {
      right: -41px;
      left: auto;
      transform: none;
    }
  }
`;

const StyledTitle = styled(Text)`
  font-size: 22px;
  line-height: 32px;
  letter-spacing: -0.02em;
  font-weight: 400;
  text-align: center;

  ${({ theme }) => theme.mediaQueries.sm} {
    font-size: 24px;
  }
`;
const StyledDescription = styled(Text)`
  margin-top: 22px;
  text-align: center;
  font-size: 15px;
  line-height: 32px;
  letter-spacing: -0.02em;
`;
const StyledButton = styled(Button)`
  width: 100%;
  margin-top: 22px;
  border-radius: 10px;
  font-weight: normal;
  font-size: 15px;
  line-height: 19px;
  text-align: center;
  letter-spacing: 0.04em;
`;

export default ClaimBlock;
