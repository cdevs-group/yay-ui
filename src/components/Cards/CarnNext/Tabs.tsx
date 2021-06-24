import React, { useState } from "react";
import styled from "styled-components";
import { transparentize } from "polished";
import { TabsProps } from "../types";

const TabsBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
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
  &.active {
    border: 1px solid #47da3b;
    transition: 0.3s;
  }
`;
const tabsList = ["10%", "25%", "50%", "75%", "Max"];

const Tabs = ({ tabValue, handleToggleTabs }: TabsProps) => {
  return (
    <TabsBlock>
      {tabsList.map((item, i) => (
        <Tab key={i} value={i} onClick={handleToggleTabs} className={tabValue === i ? "active" : ""}>
          {item}
        </Tab>
      ))}
    </TabsBlock>
  );
};

export default Tabs;
