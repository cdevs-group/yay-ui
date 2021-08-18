import React from "react";
import styled from "styled-components";
import { Text } from "../../components/Text";
import BG from "./img/link-bg.png";
import MP from "./img/mp.png";

interface IProps {
  link: string;
  text: string;
  images?: {
    bg: string;
    mp: string;
  };
}

const MarketplaceLink = ({ link, text, images }: IProps) => {
  return (
    <Card src={images?.bg || BG} href={link}>
      <StyledTitle>{text}</StyledTitle>
      <img alt="" src={images?.mp || MP} />
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
  ${({ theme }) => theme.mediaQueries.sm} {
    font-size: 24px;
  }
`;

export default MarketplaceLink;
