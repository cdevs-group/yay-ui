import React, { useState } from "react";
import styled from "styled-components";
import { transparentize } from 'polished';

const TabsBlock = styled.div`
  display: flex;
  align-items: center;
  margin-top: 15px;
  height: 30px;
`;

const Tab = styled.button`
  padding: 7px 10px;
  border: none;
  background: ${({ theme }) => transparentize(0.85, theme.colors.text)};
  border-radius: 7px; 
  font-weight: 500;
  font-size: 13px;
  line-height: 16px;
  color: ${({ theme }) => theme.colors.text};
  transition: 0.3s;
  cursor: pointer;
  border: 1px solid transparent;
  &:not(:last-child) {
    margin-right: 12px;
  }
  &.active {
    border: 1px solid #47DA3B;
    transition: 0.3s;
  }
`;

const Tabs: React.FC = () => {
  const tabsList = ["10%", "25%", "50%", "75%", "Max"];
  const [tabValue, setTabValue] = useState(0);

  const handleToggleTabs = (e: any) => {
    setTabValue(+e.currentTarget.value);
  };


  return (
    <TabsBlock>
      {tabsList.map((item, i) => (
        <Tab
          key={i}
          value={i}
          onClick={handleToggleTabs}
          className={tabValue === i ? "active" : ""}
        >
          {item}
        </Tab>
      ))}
    </TabsBlock>
  );
};

export default Tabs;
