import React, { useLayoutEffect, useMemo, useState } from "react";
import styled from "styled-components";
import { Flex } from "../../..";
import { ITabsProps } from "./types";

const MarketTabs: React.FC<ITabsProps> = ({ tabsList, tabActive, tabBodyList, handleToggleTab }) => {
  const refTab: React.RefObject<HTMLButtonElement>[] = useMemo(() => tabsList.map(() => React.createRef()), []);
  const [widthTabsActive, setWidthTabsActive] = useState<number[]>([]);

  useLayoutEffect(() => {
    if (refTab) {
      refTab.forEach((el) => setWidthTabsActive((prev) => [...prev, el?.current?.clientWidth || 0]));
    }
  }, []);

  return (
    <>
      <TopLine allWidth={widthTabsActive.reduce((partial_sum, a) => partial_sum + a, 0)}>
        <Flex>
          {tabsList.map((el, i) => (
            <Tab active={tabActive === i} value={i} key={i} onClick={handleToggleTab} ref={refTab[i]}>
              {el}
            </Tab>
          ))}
        </Flex>
        <LineTab
          widthTabActive={widthTabsActive[tabActive] || 0}
          right={widthTabsActive.slice(tabActive + 1, tabsList.length).reduce((prev, acc) => prev + acc, 0)}
        />
      </TopLine>
      {tabBodyList[tabActive]}
    </>
  );
};

export default MarketTabs;

const TopLine = styled(Flex)<{ allWidth?: number }>`
  width: ${({ allWidth }) => `${allWidth}px`};
  position: relative;
  align-items: center;
  padding-bottom: 15px;
  border-bottom: 2px solid #1c1c1c;
`;

const Tab = styled.button<{
  active: boolean;
}>`
  position: relative;
  padding: 0 10px;
  background: none;
  border: none;
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  color: ${({ theme, active }) => (active ? theme.colors.whiteText : theme.colors.textGray)};
  cursor: pointer;
  transition: 0.3s;
`;

const LineTab = styled.span<{ widthTabActive?: number; right: number }>`
  position: absolute;
  display: block;
  height: 1.5px;
  background: ${({ theme }) => theme.colors.green};
  transition: 0.3s;
  width: ${({ widthTabActive }) => `${widthTabActive}px`};
  right: ${({ right }) => `${right}px`};
  bottom: -1px;
`;