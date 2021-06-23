import React, {useState} from "react";
import styled from "styled-components";
import Timer from "../../Timer/Timer";
import { transparentize } from "polished";
import ArrowIcon from "../../Cards/ArrowIcon";
import { Button } from "../../Button";
import { StyledCardProps } from "../../Card/types";
import Tabs from "./Tabs";
import InputCard from "./InputCard";

const Wrap = styled.div`
  width: 308px;
`;

const TopContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const LeftContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  background: ${({ theme }) => transparentize(0.75, theme.colors.invertedContrast)};
  box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 12px;
  font-weight: 500;
  font-size: 12px;
  color: ${({ theme }) => theme.colors.text};
`;

const RightContent = styled(LeftContent)``;

const Content = styled.div`
  position: relative;
  margin-top: 28px;
  background: ${({ theme }) => theme.colors.bgCard};
  border-radius: 15px;
  transition: .3s;
  &.turn {
    transform: rotateY(180deg);
    & div.back {
      backface-visibility:visible;
      opacity: 1;
    }
    & div.front{
      backface-visibility: hidden;
      opacity: 0;
    }
  }
  & div.front {
    position: relative;
    top: 0;
    left: 0;
    z-index: 2;
    backface-visibility: visible;
    opacity: 1;
  }
  & div.back {
    position: absolute;
    border-radius: 15px;
    top: 0;
    left: 0;
    transform: rotateY(180deg);
    backface-visibility: hidden;
    z-index: 3;
    opacity: 0;
  }
`;

const Up = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 28px 20px 13px;
  font-weight: 500;
  font-size: 15px;
  line-height: 19px;
  color: ${({ theme }) => theme.colors.text};
`;

const RightText = styled.div`
  display: flex;
  & div.payout {
    margin-right: 9px;
    font-weight: normal;
    color: ${({ theme }) => theme.colors.textGray};
  }
`;

const MainBlock = styled.div`
  position: relative;
  left: -5%;
  z-index: 2;
  padding: 0 13px;
  width: 335px;
  background: ${({ theme }) => theme.colors.dark};
  box-sizing: border-box;
  box-shadow: ${({ theme }) => theme.colors.cardShadow};
  border-radius: 15px;
`;
const BackSide = styled.div`
    height: 100%;
    width: 100%;
    background: ${({ theme }) => theme.colors.dark};
    padding:20px 15px 25px;
`;
const ButtonBack = styled.button`
  height: 30px;
  width: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top:15px;
  right:15px;
  border:none;
  background: none;
  transform:rotateY(180deg);
  background: ${({theme})=>theme.colors.whiteRgba};
  border-radius: 7px;
  cursor: pointer;
`;
const Title  = styled.div`
  font-weight: 500;
  font-size: 21px;
  line-height: 27px;
  letter-spacing: 0.5px;
  color: #FFFFFF;
`;
const NoteBlock = styled.div`
  margin-top:17px;
  font-size: 11px;
  line-height: 14px;
  text-align: center;
  letter-spacing: 0.05em;
  color: #A3A3A3;
`;

const Down = styled(Up)``;

const StyledCard: React.FC<StyledCardProps> = ({setChoice,
  setConfirm,
  isAuth,
  setIsReturn, 
  isReturn, 
  children, 
  leftContent, 
  rightContent }) => {
    const tabsList = ["10%", "25%", "50%", "75%", "Max"];
    const [tabValue, setTabValue] = useState(0);
    const [ inputValue, setInputValue ] = useState('');
  
    const handleToggleTabs = (e: any) => {
      setTabValue(+e.currentTarget.value);
    };
    const handleInputChange = (e:any)=>{
      setInputValue(e.target.value)
    }

  return (
    <Wrap >
      <TopContent>
        <LeftContent>{leftContent}</LeftContent>
        <Timer time={2000} color="#fff" />
        <RightContent>{rightContent}</RightContent>
      </TopContent>
      <Content className={isReturn ? 'turn' : ''}>
        <div className='front'>
          <Up >
            UP
          <RightText>
              <div className="payout">Payout</div>
              <div>1,03x</div>
            </RightText>
          </Up>
          <MainBlock>{children}</MainBlock>
          <Down>
            DOWN
          <RightText>
              <div className="payout">Payout</div>
              <div>1,03x</div>
            </RightText>
          </Down>
        </div>
        <BackSide className='back'>
          <ButtonBack onClick={()=>setIsReturn('')}>
            <ArrowIcon/>
          </ButtonBack>
          <Title>Set Position</Title>
          <InputCard value={inputValue} onChange={handleInputChange}/>
          <Tabs 
            tabValue={tabValue}
            handleToggleTabs={handleToggleTabs}
            tabsList={tabsList}
          />
          <Button 
            onClick={()=>{setConfirm(true); setChoice(isReturn);setIsReturn('')}}
            marginTop='15px' width='100%' variant='green'
          >
            {isAuth&&isReturn==='up'
            ?'Confirm UP'
            :isAuth&&isReturn==='down'?
            'Confirm DOWN':'Unlock Wallet'}
          </Button>
          <NoteBlock>You won`t be able to remove or change your position once you enter it</NoteBlock>
        </BackSide>
      </Content>
    </Wrap>
  );
};

export default StyledCard;