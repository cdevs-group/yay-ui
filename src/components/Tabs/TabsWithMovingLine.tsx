import React, { useLayoutEffect, useMemo, useState } from "react";
import styled from "styled-components";
import { Text } from "../Text";
import { Flex } from "../Box";
import { TabsWithMovingLineProps } from "./types";

const TabsWithMovingLine: React.FC<TabsWithMovingLineProps> = ({ title, tabsList, tabActive, handleToggleTab }) => {
  const refTab: React.RefObject<HTMLButtonElement>[] = useMemo(() => tabsList.map(() => React.createRef()), []);
  const [widthTabsActive, setWidthTabsActive] = useState<number[]>([]);

  useLayoutEffect(() => {
    if (refTab) {
      refTab.forEach((el) => setWidthTabsActive((prev) => [...prev, el?.current?.clientWidth || 0]));
    }
  }, []);

  return (
    <TopLine>
      <Title>{title}</Title>
      <Tabs>
        {tabsList.map((el, i) => (
          <Tab active={tabActive === i} value={i} key={i} onClick={handleToggleTab} ref={refTab[i]}>
            {el}
          </Tab>
        ))}
        <LineTab
          widthTabActive={widthTabsActive[tabActive] || 0}
          left={widthTabsActive.slice(0, tabActive).reduce((prev, acc) => prev + acc, 0)}
        />
      </Tabs>
    </TopLine>
  );
};

export default TabsWithMovingLine;

const Block = styled.div`
  padding: 21px;
  border-radius: 15px;
  background: ${({ theme }) => theme.colors.bgCard2};
`;

const TopLine = styled(Flex)`
  padding-bottom: 17px;
  border-bottom: 2px solid #1c1c1c;
`;
const Title = styled(Text)`
  flex-grow: 1;
  margin-right: 20px;
  font-weight: 600;
  font-size: 21px;
  line-height: 26px;
`;

const Tabs = styled(Flex)`
  position: relative;
`;

const Tab = styled.button<{
  active: boolean;
}>`
  position: relative;
  padding: 0 13px;
  background: none;
  border: none;
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  color: ${({ theme, active }) => (active ? theme.colors.green : theme.colors.textGray)};
  cursor: pointer;
  transition: 0.3s;
`;

const LineTab = styled.span<{ widthTabActive?: number; left: number }>`
  position: absolute;
  display: block;
  height: 1.5px;
  background: ${({ theme }) => theme.colors.green};
  transition: 0.3s;
  width: ${({ widthTabActive }) => `${widthTabActive}px`};
  left: ${({ left }) => `${left}px`};
  bottom: -19px;
`;
