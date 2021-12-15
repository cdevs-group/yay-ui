import React from "react";
import styled, { keyframes } from "styled-components";
import { Text } from "../../components/Text";
import { Button } from "../../components/Button";
import { InputSearch } from "../../components/InputSearch";
import { Flex, Box } from "../../components/Box";
import { BG_LINE, LOGO_FOOTER } from "../../constants/images";
import NavColumn from "./components/NavColumn";
import { aboutData, companyData, socialData, tokenData } from "./config";
import Social from "./components/Social";
import { LineIcon } from "../../components/Svg";

const Footer = () => {
  return (
    <Wrapper>
      <StayBlock alignItems="flex-end" justifyContent="space-between">
        <SignUpBlock>
          <Text fontSize="21px">Stay in the loop</Text>
          <InputBlock>
            <InputSearch
              height="50px"
              placeholder="Enter your email"
              value=""
              onChange={() => null}
              iconLess
              width="100%"
              name="email"
            />
            <Button variant="green" onClick={() => null} width="100%">
              Sign Up
            </Button>
          </InputBlock>
        </SignUpBlock>
        <BuyBlock justifyContent="flex-end" alignItems="baseline">
          <Icon>
            <LineIcon />
            <IconBg>
              <img src={BG_LINE} />
              {/*<LineIcon />*/}
            </IconBg>
          </Icon>

          <Button variant="green" onClick={() => null} width="100%">
            Buy YAY
          </Button>
        </BuyBlock>
      </StayBlock>
      <MainLine>
        <ColumnDescription>
          <img src={LOGO_FOOTER} alt="logo" />
          <Description>
            Join our mailing list to stay in the loop with our newest feature releases, NFT drops, and tips and tricks
            for navigating YAY Games.
          </Description>
        </ColumnDescription>
        <Column>
          <NavColumn data={aboutData} />
        </Column>
        <Column>
          <NavColumn data={tokenData} />
        </Column>
        <Column>
          <NavColumn data={companyData} />
        </Column>
        <ColumnSocial>
          <Social data={socialData} />
        </ColumnSocial>
      </MainLine>
      <TextFooter>© 2021 YAY Games | All Rights Reserved</TextFooter>
    </Wrapper>
  );
};

export default Footer;

const Wrapper = styled.div``;
const StayBlock = styled(Flex)`
  flex-direction: column;
  align-items: center;

  ${({ theme }) => theme.mediaQueries.md} {
    flex-direction: row;
    align-items: flex-end;
  }
`;
const SignUpBlock = styled(Box)`
  text-align: center;
  width: 100%;

  ${({ theme }) => theme.mediaQueries.md} {
    margin-right: 20px;
    text-align: left;
    width: 50%;
  }
`;
const InputBlock = styled(Flex)`
  align-items: center;
  margin-top: 30px;
  flex-direction: column;

  & button {
    width: 100%;
    margin-top: 20px;
  }

  ${({ theme }) => theme.mediaQueries.sm} {
    flex-direction: row;

    & button {
      margin-top: 0;
      width: 100%;
      max-width: 50%;
      margin-left: 20px;
    }
  }

  ${({ theme }) => theme.mediaQueries.md} {
    & button {
      margin-right: 20px;
      max-width: 170px;
    }
  }
`;
const BuyBlock = styled(Flex)`
  width: 100%;
  margin-top: 50px;
  flex-direction: column;

  & button {
    width: 100%;
    margin-top: 20px;
  }

  ${({ theme }) => theme.mediaQueries.sm} {
    flex-direction: row;

    & button {
      margin-top: 0;
      width: 100%;
      max-width: 50%;
      margin-left: 20px;
    }
  }

  ${({ theme }) => theme.mediaQueries.md} {
    width: 50%;
    margin-left: 20px;
    margin-top: 0;

    & button {
      margin-left: 40px;
      max-width: 170px;
    }
  }
`;
const MainLine = styled(Flex)`
  margin-top: 40px;
  padding-bottom: 100px;
  justify-content: space-between;
  border-bottom: 1px solid ${({ theme }) => theme.colors.whiteRgba};
  flex-wrap: wrap;
  ${({ theme }) => theme.mediaQueries.md} {
    flex-wrap: nowrap;
  }
`;
const Column = styled(Box)`
  width: 100%;
  text-align: center;
  margin-top: 30px;
  ${({ theme }) => theme.mediaQueries.xs} {
    width: auto;
    text-align: left;
    margin-top: 0;
  }
`;
const ColumnDescription = styled(Box)`
  width: 100%;
  text-align: center;
  margin-bottom: 20px;
  ${({ theme }) => theme.mediaQueries.md} {
    width: auto;
    max-width: 293px;
    text-align: left;
    margin-bottom: 0;
  }
`;
const ColumnSocial = styled(Box)`
  width: 100%;
  margin-top: 40px;
  ${({ theme }) => theme.mediaQueries.sm} {
    width: auto;
    margin-top: 0;
  }
`;
const Description = styled(Text)`
  margin-top: 20px;
  font-weight: normal;
  font-size: 15px;
  line-height: 24px;
  text-align: center;
  color: ${({ theme }) => theme.colors.textGray};
`;
const svgAnimation = keyframes`
  0% {
    stroke-dashoffset: 257;
    stroke-dasharray: 255;
  }
  100% {
    stroke-dashoffset: 257;
    stroke-dasharray: 522;
  }
`;
const Icon = styled.div`
  position: relative;
  margin: 0 auto;

  & svg {
    position: relative;
    z-index: 2;
    top: 0;
    fill: transparent;
    stroke-dasharray: 0;
    animation: ${svgAnimation} 3s infinite;
  }

  ${({ theme }) => theme.mediaQueries.sm} {
    & svg {
      top: 15px;
    }
  }

  ${({ theme }) => theme.mediaQueries.md} {
    margin: 0;
  }
`;
const IconBg = styled.div`
  position: absolute;
  left: 0;
  z-index: 1;
  top: 0;

  & img {
    position: relative;
    top: 0;
  }

  ${({ theme }) => theme.mediaQueries.sm} {
    & img {
      top: 15px;
    }
  }
`;
const TextFooter = styled(Text)`
  margin-top: 30px;
  opacity: 0.74;
  font-size: 14px;
  text-align: center;
`;
