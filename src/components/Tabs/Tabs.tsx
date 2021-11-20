import React from "react";
import styled from "styled-components";
import { transparentize } from "polished";
import { TabsProp } from "./types";

const Tabs = ({ tabValue, onClick, fontSize, tabsList, width, paddingTabs, colorActive }: TabsProp) => {
  return (
    <TabsWrap width={width} length={tabsList?.length}>
      {tabsList?.map((item, i) => (
        <Tab
          fontSize={fontSize}
          colorActive={colorActive}
          paddingTabs={paddingTabs}
          onClick={onClick}
          className={tabValue === i ? "active" : ""}
          key={i}
          value={i}
        >
          {item}
        </Tab>
      ))}
    </TabsWrap>
  );
};

export default Tabs;

const TabsWrap = styled.div<{ length?: number; width?: string }>`
  display: grid;
  width: ${({ width }) => width || "auto"};
  grid-template-columns: repeat(${({ length }) => length || 2}, 1fr);
  background: ${({ theme }) => theme.colors.buttonBg};
  border-radius: 12px;
  box-shadow: ${({ theme }) => theme.colors.boxShadow4};
`;

const Tab = styled.button<{ paddingTabs?: string; colorActive?: string; fontSize?: string }>`
  padding: ${({ paddingTabs }) => paddingTabs || "15px 16px"};
  border: none;
  background: transparent;
  border-radius: 12px;
  font-size: ${({ fontSize }) => fontSize || "15px"};
  line-height: 19px;
  font-weight: 500;
  text-align: center;
  letter-spacing: 0.5px;
  text-shadow: 0px 3px 4px rgba(0, 0, 0, 0.15);
  transition: 0.3s;
  cursor: pointer;
  color: ${({ theme }) => transparentize(0.3, theme.colors.text)};
  &.active {
    background: ${({ theme }) => transparentize(0.85, theme.colors.text)};
    color: ${({ theme, colorActive }) => colorActive || theme.colors.text};
  }
  ${({ theme }) => theme.mediaQueries.md} {
    padding: ${({ paddingTabs }) => paddingTabs || "15px 30px"};
  }
`;
