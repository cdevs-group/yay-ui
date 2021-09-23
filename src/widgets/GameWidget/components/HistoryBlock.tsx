import React, { useMemo, useState } from "react";
import styled from "styled-components";
import { Text } from "../../../components/Text";
import { Flex } from "../../../components/Box";
import { TabsWithMovingLine } from "../../..";

interface Props {
  children: React.ReactNode;
}

const HistoryBlock: React.FC<Props> = ({ children }) => {
  const tabsList = ["Live", "Round", "Your History"];
  const [tabActive, setTabActive] = useState<number>(0);

  const handleToggleTab = (e: any) => {
    setTabActive(+e.target.value);
  };

  return (
    <Block>
      <TabsWithMovingLine handleToggleTab={handleToggleTab} tabsList={tabsList} tabActive={tabActive} title="History" />

      {children}
    </Block>
  );
};

export default HistoryBlock;

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
