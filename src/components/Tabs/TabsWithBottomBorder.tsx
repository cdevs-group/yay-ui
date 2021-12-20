import React, { useLayoutEffect, useMemo, useState } from "react";
import styled from "styled-components";
import { Flex } from "../Box";
import { TabsWithMovingLineProps } from "./types";

const TabsWithBottomBorder: React.FC<TabsWithMovingLineProps> = ({ tabsList, tabActive, handleToggleTab }) => {
  const refTab: React.RefObject<HTMLButtonElement>[] = useMemo(() => tabsList.map(() => React.createRef()), []);
  const [widthTabsActive, setWidthTabsActive] = useState<number[]>([]);

  useLayoutEffect(() => {
    if (refTab) {
      refTab.forEach((el) => setWidthTabsActive((prev) => [...prev, el?.current?.clientWidth || 0]));
    }
  }, []);

  return (
    <TopLine>
      <Tabs>
        {tabsList.map((el, i) => (
          <Tab active={tabActive === i} value={i} key={i} onClick={handleToggleTab} ref={refTab[i]}>
            {el}
          </Tab>
        ))}
      </Tabs>
      <LineTab
        widthTabActive={widthTabsActive[tabActive] || 0}
        right={widthTabsActive.slice(tabActive + 1, tabsList.length).reduce((prev, acc) => prev + acc, 0)}
      />
    </TopLine>
  );
};

export default TabsWithBottomBorder;

const TopLine = styled(Flex)`
  width: fit-content;
  position: relative;
  align-items: center;
  padding-bottom: 15px;
`;
const Tabs = styled(Flex)``;

const Tab = styled.button<{
  active: boolean;
}>`
  position: relative;
  padding: 0 10px;
  background: none;
  border: none;
  font-weight: normal;
  font-size: 15px;
  line-height: 19px;
  color: ${({ theme, active }) => (active ? theme.colors.text : theme.colors.textGray)};
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
