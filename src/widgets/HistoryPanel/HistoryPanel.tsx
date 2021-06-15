import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import {
  ArrowPanel,
  BtnPanel,
  CloseIcon,
  ArrowDownIcon,
  PlayIcon,
  WatchIcon,
} from '../../components/Svg';
import { SimpleTabs } from '../../components/Tabs';
import { Text } from '../../components/Text';
import Accordeon from './components/Accordeon';
import RoundHistory from './components/RoundHistory';
import TabsHistory from './components/TabsHistory';
import YourHistory from './components/YourHistory';
import PnlHistoryPanel from './PnlHistoryPanel';
import { ICardAccordeon, InjectedProps } from './types';

interface Props extends InjectedProps { }

const HistoryPanel: React.FC<Props> = ({ setOpen, open, children }) => {
  const handleToggle = () => {
    if (setOpen) setOpen(!open);
  };
  const [tabValue, setTabValue] = useState(0);
  const [valueAccordeon, setValueAccordeon] = useState<
    number | null | undefined
  >();

  const cardsAccordeon: Array<ICardAccordeon> = [
    {
      id: 1,
      number: '#0022',
      color: 'text',
      text: 'Starting soon',
      icon: <WatchIcon />,
      content: [
        <RoundHistory
          price="$ 400`597"
          priceRightText="56.3%"
          up="2x Playout  0,281 BNB"
          down="2x Playout  0,791 BNB"
          prizePool="$ 3`500"
        />,
      ],
    },
    {
      id: 2,
      number: '#0023',
      color: 'green',
      text: 'Live now',
      icon: <PlayIcon />,
      content: [
        <RoundHistory
          price="$ 400`597"
          priceRightText="56.3%"
          up="2x Playout  0,281 BNB"
          down="2x Playout  0,791 BNB"
          prizePool="$ 3`500"
          openingBlock="4542"
        />,
      ],
    },
    {
      id: 3,
      number: '#0024',
      color: 'redBg',
      text: '-0,001 BNB',
      icon: <ArrowDownIcon />,
      content: [
        <RoundHistory
          price="$ 400`597"
          priceRightText="$1,57"
          up="2x Playout  0,281 BNB"
          down="2x Playout  0,791 BNB"
          prizePool="$ 3`500"
          openingBlock="483029"
          closingBlock="457442"
          negative
        />,
        <YourHistory
          price="+0,001 BNB"
          priceRightText="UP"
          result="$0.391"
          yourPosition="0,001 BNB"
          win={false}
          negative
        />,
      ],
    },
    {
      id: 4,
      number: '#0025',
      color: 'green',
      text: '+2,001 BNB',
      icon: <ArrowDownIcon />,
      collect: true,
      content: [
        <RoundHistory
          price="$ 400`597"
          priceRightText="$1,57"
          up="2x Playout  0,281 BNB"
          down="2x Playout  0,791 BNB"
          prizePool="$ 3`500"
          openingBlock="483029"
          closingBlock="457442"
        />,
        <YourHistory
          price="+0,001 BNB"
          priceRightText="UP"
          result="$0.391"
          yourPosition="0,001 BNB"
          win
          collect
        />,
      ],
    },
  ];
  const tabsListSimple = ['All history', 'Collected', 'Uncollected'];
  const [tabValueSimple, setTabValueSimple] = useState(0);

  return (
    <Panel open={open}>
      <Wrap>
        <ButtonToggle
          onClick={handleToggle}
          open={open}
          color={valueAccordeon ? 'dark' : 'panel'}
        >
          <BtnPanel className="button" />
          <ArrowPanel className="arrow" />
        </ButtonToggle>
        <ButtonClose onClick={handleToggle}>
          <CloseIcon />
        </ButtonClose>
        <Title>
          <Text size="lg" mr={1}>
            History{' '}
          </Text>
          <Text color="green" size="lg">
            (0)
          </Text>
        </Title>
        <TabsWrap>
          <TabsHistory tabValue={tabValue} setTabValue={setTabValue} />
        </TabsWrap>
        {tabValue === 0 && (
          <>
            <SimpleTabsWrap>
              <SimpleTabs
                tabsList={tabsListSimple}
                tabValue={tabValueSimple}
                setTabValue={setTabValueSimple}
              />
            </SimpleTabsWrap>
            {tabValueSimple === 0 && (
              // <NoHistory>
              //   <Text mb={15}>No prediction history available</Text>
              //   <Text size="sm" fontWeight={400} letterSpacing="0.05em">
              //     If you are sure you should see history here, make sure you`re
              //     connected to the correct wallet and try again
              //   </Text>
              // </NoHistory>
              <Accordeon
                value={valueAccordeon}
                setValue={setValueAccordeon}
                cards={cardsAccordeon}
              />
            )}
            {tabValueSimple === 1 && (
              <Accordeon
                value={valueAccordeon}
                setValue={setValueAccordeon}
                cards={cardsAccordeon.filter((el) => el.id === 4)}
              />
            )}
            {tabValueSimple === 2 && (
              <Accordeon
                value={valueAccordeon}
                setValue={setValueAccordeon}
                cards={cardsAccordeon.filter((el) => el.id === 3)}
              />
            )}
          </>
        )}
        {tabValue === 1 && <PnlHistoryPanel />}
      </Wrap>
    </Panel>
  );
};

export default HistoryPanel;

HistoryPanel.defaultProps = {
  open: true,
  setOpen: () => { },
};

const Panel = styled.div<{ open: boolean }>`
  position: fixed;
  right: 0;
  top: 0; 
  padding-left: 20px;  
  width: ${({ open }) => (open ? '436px' : '8px')};
  transition: all 0.3s ease, overflow-y 0ms;
  overflow-y: ${({ open }) => (open ? 'auto' : 'none')};
`;
const Wrap = styled.div`
  position: relative; 
  background: ${({ theme }) => theme.colors.panel}; 
  height: 100vh;
  width: 416px;
`;

const ButtonToggle = styled.button<{ open: boolean; color: string }>`
  position: absolute;
  left: -20px;
  top: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100px;
  padding: 10px 8px 10px;
  background: none;
  transform: translateY(-50%);
  border: none;
  cursor: pointer;
  & .arrow {
    transform: ${({ open }) => (open ? 'scale(-1,1)' : 'scale(1,1)')};
    transition: 0.3s;
    margin-left: 5px;
  }
  & .button {
    position: absolute;
    left: 4px;
    & path {
      transition: 0.3s;
      fill: ${({ theme, color }) =>
    color === 'panel' ? theme.colors.panel : theme.colors.dark};
    }
  }
`;

const ButtonClose = styled.button`
  display: block;
  margin-left: auto;
  margin-bottom: 50px;
  padding: 13px 13px 0;
  border: none;
  background: none;
  cursor: pointer;
`;

const Title = styled.div`
  display: flex;
  margin-bottom: 22px;
  padding: 0 20px;
`;
const TabsWrap = styled.div`
  margin-bottom: 30px;
  padding: 0 20px;
`;

const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const SimpleTabsWrap = styled.div`
  margin-bottom: 33px;
  padding: 0 20px;
`;

const NoHistory = styled.div`
  max-width: 340px;
  margin: 0 auto;
  padding: 170px 20px;
  text-align: center;
`;
