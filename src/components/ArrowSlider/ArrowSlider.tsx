import React from "react";
import styled from "styled-components";
import { ArrowSliderProps } from "./types";
import { transparentize } from "polished";
import { GreenArrow } from "../Svg";

const Wrap = styled.div`
  /* height: 470px; */
`;

const BottomContent = styled.div`
  display: flex;
  justify-content: space-between;
`;

const CenterBlock = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 198px;
  padding: 17px;
  background: ${({ theme }) => transparentize(0.85, theme.colors.text)};
  border-radius: 12px;
`;
const ArrowLeft = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
`;

const ArrowRight = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background: none;
  border: none;
  cursor: pointer;
  transform: scale(-1, 1);
  padding: 0;
`;

const BottomCard = styled.div`
  position: absolute;
  left: 0;
  bottom: 10px;
  transform: rotate(-25deg);
  width: 45px;
  height: 61px;
  background: ${({ theme }) => theme.colors.lightGreyBg};
  box-shadow: ${({ theme }) => theme.colors.boxShadow3};
  border-radius: 10px;
`;

const TopCard = styled(BottomCard)`
  position: absolute;
  right: 0;
  left: auto;
  bottom: 5px;
  transform: rotate(20deg);
  background: ${({ theme }) => theme.colors.text};
`;

const Center = styled.button`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background: none;
  border: none;
  width: 76px;
  height: 76px;
  cursor: pointer;
`

const ArrowSlider: React.FC<ArrowSliderProps> = ({
  clsNameLeft,
  clsNameRight,
  handlePrevSlide,
  handleNextSlide,
  handleSlideToLive,
}) => {
  return (
    <Wrap>
      <BottomContent>
        <CenterBlock>
          <ArrowLeft className={clsNameLeft || ""} onClick={handlePrevSlide}>
            <GreenArrow stroke="#47DA3B" />
          </ArrowLeft>
          <Center onClick={handleSlideToLive}>
            <BottomCard />
            <TopCard />
          </Center>
          <ArrowRight className={clsNameRight || ""} onClick={handleNextSlide}>
            <GreenArrow stroke="#47DA3B" />
          </ArrowRight>
        </CenterBlock>
      </BottomContent>
    </Wrap>
  );
};

export default ArrowSlider;
