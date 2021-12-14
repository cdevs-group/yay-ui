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
        <Box marginRight="20px" width="50%">
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
            <Button variant="green" onClick={() => null} maxWidth="170px" width="100%" marginLeft="20px">
              Sign Up
            </Button>
          </InputBlock>
        </Box>
        <Flex justifyContent="flex-end" marginLeft="20px" alignItems="baseline" width="50%">
          <Icon>
            <LineIcon />
            <IconBg>
              <img src={BG_LINE} />
              {/*<LineIcon />*/}
            </IconBg>
          </Icon>

          <Button variant="green" onClick={() => null} maxWidth="170px" width="100%" marginLeft="40px">
            Buy YAY
          </Button>
        </Flex>
      </StayBlock>
      <MainLine>
        <Column maxWidth="293px">
          <img src={LOGO_FOOTER} alt="logo" />
          <Description>
            Join our mailing list to stay in the loop with our newest feature releases, NFT drops, and tips and tricks
            for navigating YAY Games.
          </Description>
        </Column>
        <Column>
          <NavColumn data={aboutData} />
        </Column>
        <Column>
          <NavColumn data={tokenData} />
        </Column>
        <Column>
          <NavColumn data={companyData} />
        </Column>
        <Column>
          <Social data={socialData} />
        </Column>
      </MainLine>
      <TextFooter>© 2021 YAY Games | All Rights Reserved</TextFooter>
    </Wrapper>
  );
};

export default Footer;

const Wrapper = styled.div``;
const StayBlock = styled(Flex)``;
const InputBlock = styled(Flex)`
  align-items: center;
  margin-top: 30px;
`;
const MainLine = styled(Flex)`
  margin-top: 40px;
  padding-bottom: 100px;
  justify-content: space-between;
  border-bottom: 1px solid ${({ theme }) => theme.colors.whiteRgba};
`;
const Column = styled(Box)``;
const Description = styled(Text)`
  margin-top: 20px;
  font-weight: normal;
  font-size: 15px;
  line-height: 24px;
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
  //51%{
  //  stroke-dashoffset: 0;
  //  stroke-dasharray: 255;
  //}
  //100%{
  //  stroke-dashoffset: -255;
  //  stroke-dasharray: 255;
  //}
`;
const Icon = styled.div`
  position: relative;
  & svg {
    position: relative;
    z-index: 2;
    top: 15px;
    fill: transparent;
    stroke-dasharray: 0;
    animation: ${svgAnimation} 3s infinite;
  }
`;
const IconBg = styled.div`
  position: absolute;
  left: 0;
  z-index: 1;
  top: 0;
  & img {
    position: relative;
    top: 15px;
  }
`;
const TextFooter = styled(Text)`
  margin-top: 30px;
  opacity: 0.74;
  font-size: 14px;
  text-align: center;
`;
