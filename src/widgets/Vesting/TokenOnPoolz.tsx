import React from "react";
import styled from "styled-components";
import BG from "./img/link-bg.png";
import { Text } from "../../components/Text";
import { Button } from "../../components/Button";
import { StyledTitle } from "./ClaimTokens";

interface Iprops {
  images?: { bg: string };
  texts: {
    title: string;
    button: string;
    description: string;
  };
  linkClaimTokens?: string;
}

const TokenOnPoolz = ({ images, texts, linkClaimTokens }: Iprops) => {
  return (
    <Wrapper>
      <CardStyle src={images?.bg || BG}>
        <StyledTitle size="xl">{texts.title}</StyledTitle>
        <Text margin="42px 0">{texts.description}</Text>
        <StyledButton as="a" margin="0 auto" minWidth="204px" variant="green" href={linkClaimTokens || "#"}>
          {texts.button}
        </StyledButton>
      </CardStyle>
    </Wrapper>
  );
};

export default TokenOnPoolz;

const CardStyle = styled.div<{ src?: string }>`
  text-align: center;
  padding: 20px 50px 21px;
  height: 100%;
  background: ${({ src }) => `url(${src}) no-repeat left center /cover`};
`;
const Wrapper = styled.div`
  background: ${({ theme }) => theme.colors.dark};
  border-radius: 20px;
  ${({ theme }) => theme.mediaQueries.sm} {
    grid-column: 1/3;
  }
`;

const StyledButton = styled(Button)`
  display: block;
  width: 100%;
  padding: 14px;
  margin: 0 auto;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.text};
  background: ${({ theme }) => theme.colors.green};
  border-radius: 10px;
  max-width: 204px;
  font-size: 15px;
  line-height: 19px;
  text-align: center;
  letter-spacing: 0.04em;
`;
