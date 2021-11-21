import React from "react";
import styled from "styled-components";
import { transparentize } from "polished";
import { TabsProp, Variant } from "./types";
import { variant } from "styled-system";
import { styleVariantsTab, styleVariantsTabs } from "./theme";

const Tabs = ({ tabValue, onClick, fontSize, tabsList, width, paddingTabs, colorActive, variant }: TabsProp) => {
  return (
    <TabsWrap width={width} length={tabsList?.length} variant={variant}>
      {tabsList?.map((item, i) => (
        <Tab
          fontSize={fontSize}
          colorActive={colorActive}
          paddingTabs={paddingTabs}
          onClick={onClick}
          className={tabValue === i ? "active" : ""}
          key={i}
          value={i}
          variant={variant}
        >
          {item}
        </Tab>
      ))}
    </TabsWrap>
  );
};

export default Tabs;

const TabsWrap = styled.div<{ length?: number; width?: string; variant?: Variant }>`
  display: grid;
  width: ${({ width }) => width || "auto"};
  grid-template-columns: ${({ length, variant }) => `repeat(${length || 2}, ${variant === "small" ? "auto" : "1fr"})`};
  background: ${({ theme }) => theme.colors.buttonBg};
  border-radius: 12px;
  box-shadow: ${({ theme }) => theme.colors.boxShadow4};
  ${variant({
    variants: styleVariantsTabs,
  })}
`;

const Tab = styled.button<{ paddingTabs?: string; colorActive?: string; fontSize?: string; variant?: Variant }>`
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
  ${variant({
    variants: styleVariantsTab,
  })}
`;
