import React from "react";
import styled from "styled-components";
import { transparentize } from "polished";
import { TabsWithCommingSoonProp, Variant } from "./types";
import { variant } from "styled-system";
import { styleVariantsTab, styleVariantsTabs } from "./theme";

const TabsWithCommingSoon = ({
  tabValue,
  onClick,
  fontSize,
  tabsList,
  width,
  paddingTabs,
  colorActive,
  variant,
}: TabsWithCommingSoonProp) => {
  return (
    <TabsWrap width={width} length={tabsList?.length} variant={variant}>
      {tabsList?.map((item, i) => (
        <CommingSoonWrapper key={i} text={item.commingSoonText}>
          <Tab
            fontSize={fontSize}
            colorActive={colorActive}
            paddingTabs={paddingTabs}
            onClick={onClick}
            className={tabValue === i ? "active" : ""}
            value={i}
            variant={variant}
            disabled={item.disabled}
          >
            {item.title}
          </Tab>
        </CommingSoonWrapper>
      ))}
    </TabsWrap>
  );
};

export default TabsWithCommingSoon;

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
  width: 100%;
  border: none;
  background: ${({ theme }) => theme.colors.bgBlackTab};
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
    background: ${({ theme }) => theme.colors.bgGreyTab};
    color: ${({ theme, colorActive }) => colorActive || theme.colors.text};
  }
  ${({ theme }) => theme.mediaQueries.md} {
    padding: ${({ paddingTabs }) => paddingTabs || "15px 30px"};
  }
  ${variant({
    variants: styleVariantsTab,
  })}
  &:disabled {
    box-shadow: none;
    color: ${({ theme }) => transparentize(0.5, theme.colors.text)};
    cursor: not-allowed;
  }
`;

const CommingSoonWrapper = styled.div<{ text?: string }>`
  position: relative;
  width: 100%;
  z-index: 1;
  &::before {
    z-index: -1;
    white-space: nowrap;
    content: ${({ text }) => `"${text}"`};
    position: absolute;
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    top: -15px;
    width: 83px;
    display: ${({ text }) => (text ? "block" : "none")};
    padding: 5px 11px;
    background: ${({ theme }) => theme.colors.green};
    border-radius: 6px;
    font-weight: normal;
    font-size: 9px;
    line-height: 11px;
    color: ${({ theme }) => theme.colors.text};
  }
`;
