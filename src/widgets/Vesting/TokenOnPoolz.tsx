import React from "react";
import styled from "styled-components";
import BG from "./img/link-bg.png";
import { Text } from "../../components/Text";
import { Button } from "../../components/Button";
import { StyledButton, StyledTitle } from "./ClaimTokens";

interface Ipros {
  images?: { bg: string };
  texts: {
    title: string;
    button: string;
    description: string;
  };
}

const TokenOnPoolz = ({ images, texts }: Ipros) => {
  return (
    <Wrapper>
      <CardStyle src={images?.bg || BG}>
        <StyledTitle size="xl">{texts.title}</StyledTitle>
        <Text margin="42px 0">{texts.description}</Text>
        <StyledButton margin="0 auto" minWidth="204px" variant="green">
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
