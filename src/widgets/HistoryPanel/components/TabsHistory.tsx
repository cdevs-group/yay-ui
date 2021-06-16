import React from 'react';
import styled from 'styled-components';
import { transparentize } from 'polished';

interface TabsProp {
  tabValue: number;
  setTabValue: (val: number) => void;
}

const TabsHistory = ({ tabValue, setTabValue }: TabsProp) => {
  const tabsList = ['Rounds', 'PNL'];

  const handleTabToggle = (e: any) => {
    setTabValue(+e.target.value);
  };

  return (
    <TabsWrap>
      {tabsList.map((item, i) => (
        <Tab
          onClick={handleTabToggle}
          className={tabValue === i ? 'active' : ''}
          key={i}
          value={i}
        >
          {item}
        </Tab>
      ))}
    </TabsWrap>
  );
};

export default TabsHistory;

const TabsWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  background: ${({ theme }) => theme.colors.buttonBg};
  border-radius: 12px;
  box-shadow: ${({ theme }) => theme.colors.boxShadow4};  
`;
const Tab = styled.button`
  padding: 15px 30px;
  border: none;
  background: transparent;
  border-radius: 12px;
  font-size: 15px;
  line-height: 19px;
  font-weight: 500;
  text-align: center;
  letter-spacing: 0.5px;
  text-shadow: 0px 3px 4px rgba(0, 0, 0, 0.15);
  transition: 0.3s;
  cursor: pointer;
  color: ${({ theme }) => transparentize(0.30, theme.colors.text)};
  &.active {
    background: ${({ theme }) => transparentize(0.85, theme.colors.text)};
    color: ${({ theme }) => theme.colors.text};
  }
`;