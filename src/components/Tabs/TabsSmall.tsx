import React from "react";
import styled from "styled-components";
import { TabsSmallProp } from "./types";

const TabsSmall = ({ tabValue, onClick, tabsList }: TabsSmallProp) => {
  return (
    <TabsWrap length={tabsList?.length}>
      {tabsList?.map((item, i) => (
        <Tab onClick={onClick} className={tabValue === item ? "active" : ""} key={i} value={item}>
          {item}
        </Tab>
      ))}
    </TabsWrap>
  );
};

const TabsWrap = styled.div<{ length?: number }>`
  display: grid;
  grid-template-columns: repeat(${({ length }) => length || 2}, 1fr);
  border-radius: 12px;
`;

const Tab = styled.button`
  padding: 6px;
  background: ${({ theme }) => theme.colors.whiteRgba};
  border-radius: 9px;
  border: none;
  color: ${({ theme }) => theme.colors.text};
  transition: 0.3s;
  margin-right: 12px;
  cursor: pointer;
  &:last-child {
    margin-right: 0;
  }
  &.active {
    background: ${({ theme }) => theme.colors.green};
  }
`;

export default TabsSmall;
