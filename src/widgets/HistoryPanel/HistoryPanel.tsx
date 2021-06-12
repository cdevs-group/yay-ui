import React, { useState } from 'react';
import styled from 'styled-components';
import { ClosedPrice } from '../../components/ClosedPrice';
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
import TabsHistory from './components/TabsHistory';
import PnlHistoryPanel from './PnlHistoryPanel';
import { ICardAccordeon, InjectedProps } from './types';

interface Props extends InjectedProps {}

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
      value: (
        <>
          <Text>#0022</Text>
          <Flex>
            <Text mr={15}>Starting soon</Text>
            <WatchIcon />
          </Flex>
        </>
      ),
      content: (
        <>
          <Text mb={17}>Round History </Text>
          <ClosedPrice price="$ 400`597" rightText="56.3%"/>
        </>
      ),
    },
    {
      id: 2,
      value: (
        <>
          <Text>#0023</Text>
          <Flex>
            <Text mr={15} color="green">
              Live now
            </Text>
            <PlayIcon />
          </Flex>
        </>
      ),
      content: (
        <>
          <Text mb={17}>Round History </Text>
        </>
      ),
    },
    {
      id: 3,
      value: (
        <>
          <Text>#0024</Text>
          <Flex>
            <Text mr={15} color="redBg">
              -0,001 BNB
            </Text>
            <ArrowDownIcon />
          </Flex>
        </>
      ),
      content: (
        <>
          <Text mb={17}>Round History </Text>
        </>
      ),
    },
    {
      id: 4,
      value: (
        <>
          <Text>#0025</Text>
          <Flex>
            <Text mr={15} color="green">
              +2,001 BNB
            </Text>
            <ArrowDownIcon />
          </Flex>
        </>
      ),
      content: (
        <>
          <Text mb={17}>Round History </Text>
        </>
      ),
    },
  ];
  const tabsListSimple = ['All history', 'Collected', 'Uncollected'];
  const [tabValueSimple, setTabValueSimple] = useState(0);

  return (
    <Panel open={open}>
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
          <Accordeon
            value={valueAccordeon}
            setValue={setValueAccordeon}
            cards={cardsAccordeon}
          />
        </>
      )}
      {tabValue === 1 && <PnlHistoryPanel />}
    </Panel>
  );
};

export default HistoryPanel;

HistoryPanel.defaultProps = {
  open: true,
  setOpen: () => {},
};

const Panel = styled.div<{ open: boolean }>`
  position: fixed;
  right: 0;
  top: 0;
  height: 100vh;
  background: ${({ theme }) => theme.colors.panel};
  width: ${({ open }) => (open ? '436px' : '8px')};
  transition: 0.3s;
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
  padding: 25px 20px 0;
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
  margin-bottom: 33px;
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
