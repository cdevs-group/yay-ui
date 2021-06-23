import React from "react";
import styled from "styled-components";
import { CardUpDownProps } from "../../Card/types";
import { ChartIcon, GreenArrow, HistoryIcon } from "../../Svg";
import StyledCard from "./StyledCard";

const BottomContent = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  width: 308px;
  transition: 0.3s;
  @media (max-width: 767px) {
    width: 278px;
  }
`;
const Button = styled.button`
  background: none;
  border: none;
  cursor: pointer;
`;
const CenterBlock = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  width: 198px;
  height: 50px;
  background: rgba(255, 255, 255, 0.15);
  border-radius: 12px;
  & button {
    display: flex;
    align-items: center;
  }
  & button.arrowLeft {
    position: absolute;
    z-index: 1;
    background: none;
    border: none;
    left: 3%;
    top: 35%;
    cursor: pointer;
  }
  & button.arrowRight {
    position: absolute;
    z-index: 1;
    background: none;
    border: none;
    right: 3%;
    top: 35%;
    transform: rotate(180deg);
    cursor: pointer;
  }
`;

const CardNext: React.FC<CardUpDownProps> = ({
  setChoice,
  setConfirm,
  isAuth,
  setIsReturn,
  isReturn,
  children,
  upValue,
  downValue,
  tabValue,
  handleToggleTabs,
  tabsList,
  inputValue,
  handleInputChange,
  leftContent,
  rightContent,
}) => {
  return (
    <>
      <StyledCard
        setChoice={setChoice}
        setConfirm={setConfirm}
        isAuth={isAuth}
        setIsReturn={setIsReturn}
        isReturn={isReturn}
        upValue={upValue}
        downValue={downValue}
        tabValue={tabValue}
        handleToggleTabs={handleToggleTabs}
        tabsList={tabsList}
        inputValue={inputValue}
        handleInputChange={handleInputChange}
        leftContent={leftContent}
        rightContent={rightContent}
      >
        {children}
      </StyledCard>
      {/* <BottomContent>
        <Button>
          <ChartIcon />
        </Button>
        <CenterBlock>
          <button className="arrowLeft">
            <GreenArrow color="#47DA3B" />
          </button>
          <BottomCard />
          <TopCard />
          <button className="arrowRight">
            <GreenArrow color="#47DA3B" />
          </button>
        </CenterBlock>
        <Button>
          <HistoryIcon />
        </Button>
      </BottomContent> */}
    </>
  );
};
export default CardNext;
