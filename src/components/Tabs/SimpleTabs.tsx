import React from "react";
import styled from "styled-components";
import { TabsProp } from "./types";
import Text from "../Text/Text";
import { HistoryFilter } from "../../widgets/HistoryPanel/HistoryPanel";

const SimpleTabs = ({ historyFilter, onClick }: TabsProp) => {
    
  return (
    <TabsWrap>    
      <Tab
        as="button"
        onClick={onClick}
        className={historyFilter === HistoryFilter.ALL? "active" : ""}
        value={HistoryFilter.ALL}
      >
        All history
      </Tab>{" "}
      <Tab
        as="button"
        onClick={onClick}
        className={historyFilter === HistoryFilter.COLLECTED ? "active" : ""}
        value={HistoryFilter.COLLECTED}
      >
        Collected
      </Tab>
      <Tab
        as="button"
        onClick={onClick}
        className={historyFilter === HistoryFilter.UNCOLLECTED? "active" : ""}
        value={HistoryFilter.UNCOLLECTED}
      >
        Uncollected
      </Tab>
    </TabsWrap>
  );
};

SimpleTabs.defaultProps = {
  tabsList: [],
};

export default SimpleTabs;

const TabsWrap = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Tab = styled(Text)`
  border: none;
  padding-bottom: 5px;
  background: transparent;
  color: ${({ theme }) => theme.colors.textGray};
  text-shadow: ${({ theme }) => theme.colors.textShadow3};
  transition: 0.3s;
  cursor: pointer;
  border-bottom: 2px solid transparent;
  &.active {
    border-bottom: 2px solid ${({ theme }) => theme.colors.green};
    color: ${({ theme }) => theme.colors.text};
  }
`;
