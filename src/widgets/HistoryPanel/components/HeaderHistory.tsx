import React from "react";
import styled from "styled-components";
import { CloseIcon } from "../../../components/Svg";
import { Text } from "../../../components/Text";
import TabsHistory from "./TabsHistory";

export enum HistoryTabs {
  ROUNDS,
  PNL,
}
export enum HistoryFilter {
  ALL = "all",
  COLLECTED = "collected",
  UNCOLLECTED = "uncollected",
}

interface HeaderProps {
  activeTab: HistoryTabs;
  setActiveTab: (value: HistoryTabs) => void;
  handleClose: () => void;
  switchTab: (e: any) => Promise<void>;
  handleChangeTab: (newFilter: HistoryFilter) => any;
  historyFilter: string;
  isFetchingHistory: boolean;
  account: string;
  tabsList: Array<string>;
  texts: any;
}

const HeaderHistory: React.FC<HeaderProps> = ({
  activeTab,
  handleClose,
  switchTab,
  handleChangeTab,
  historyFilter,
  isFetchingHistory,
  account,
  texts,
  tabsList,
}) => {
  return (
    <>
      <ButtonClose onClick={handleClose}>
        <CloseIcon />
      </ButtonClose>
      <Title>
        <Text size="lg" mr={1}>
          {texts?.history || "History"}
        </Text>
      </Title>
      <TabsBaseWrap>
        <TabsHistory tabsList={tabsList} tabValue={activeTab} onClick={switchTab} />
      </TabsBaseWrap>

      {activeTab === HistoryTabs.ROUNDS && (
        <>
          <SimpleTabsWrap>
            <TabsWrap>
              <Tab
                as="button"
                onClick={handleChangeTab(HistoryFilter.ALL)}
                className={historyFilter === HistoryFilter.ALL ? "active" : ""}
                value={HistoryFilter.ALL}
                disabled={isFetchingHistory || !account}
              >
                {texts.all || "All history"}
              </Tab>{" "}
              <Tab
                as="button"
                onClick={handleChangeTab(HistoryFilter.COLLECTED)}
                className={historyFilter === HistoryFilter.COLLECTED ? "active" : ""}
                value={HistoryFilter.COLLECTED}
                disabled={isFetchingHistory || !account}
              >
                {texts.collected || "Collected"}
              </Tab>
              <Tab
                as="button"
                onClick={handleChangeTab(HistoryFilter.UNCOLLECTED)}
                className={historyFilter === HistoryFilter.UNCOLLECTED ? "active" : ""}
                value={HistoryFilter.UNCOLLECTED}
                disabled={isFetchingHistory || !account}
              >
                {texts?.uncollected || "Uncollected"}
              </Tab>
            </TabsWrap>
          </SimpleTabsWrap>
        </>
      )}
    </>
  );
};

export default HeaderHistory;

const SimpleTabsWrap = styled.div`
  margin-bottom: 33px;
  padding: 0 20px;
`;

const Title = styled.div`
  display: flex;
  margin-bottom: 22px;
  margin-top: -40px;
  padding: 0 20px;

  ${({ theme }) => theme.mediaQueries.sm} {
    margin-top: 0;
  }
`;

const TabsBaseWrap = styled.div`
  margin-bottom: 30px;
  padding: 0 20px;
`;

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

const ButtonClose = styled.button`
  display: block;
  margin-left: auto;
  padding: 13px 13px 0;
  border: none;
  background: none;
  cursor: pointer;
  ${({ theme }) => theme.mediaQueries.sm} {
    margin-bottom: 50px;
  }
`;
