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
`;

const ArrowRight = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background: none;
  border: none;
  cursor: pointer;
  transform: scale(-1, 1);
`;

const BottomCard = styled.div`
  position: absolute;
  left: 35%;
  bottom: 1%;
  transform: rotate(-25deg);
  width: 45px;
  height: 61px;
  background: ${({ theme }) => theme.colors.lightGreyBg};
  box-shadow: ${({ theme }) => theme.colors.boxShadow3};
  border-radius: 10px;
`;

const TopCard = styled(BottomCard)`
  position: absolute;
  left: 45%;
  bottom: -8%;
  transform: rotate(20deg);
  background: ${({ theme }) => theme.colors.text};
`;

const ArrowSlider: React.FC<ArrowSliderProps> = ({ clsNameLeft, clsNameRight }) => {
  return (
    <Wrap>
      <BottomContent>
        <CenterBlock>
          <ArrowLeft className={clsNameLeft}>
            <GreenArrow stroke="#47DA3B" />
          </ArrowLeft>
          <BottomCard />
          <TopCard />
          <ArrowRight className={clsNameRight}>
            <GreenArrow stroke="#47DA3B" />
          </ArrowRight>
        </CenterBlock>
      </BottomContent>
    </Wrap>
  );
};

export default ArrowSlider;
