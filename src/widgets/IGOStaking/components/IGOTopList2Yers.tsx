import React from "react";
import { Flex, Tabs } from "../../../index";
import { ellipsis } from "../../../helpers/ellipsis";
import Web3Utils from "web3-utils";
import styled from "styled-components";
import BigNumber from "bignumber.js";

interface IGOTopList2YersProps {
  texts: {
    title: string;
    wallet: string;
    staked: string;
    tokenName: string;
    allocation: string;
    tier: string;
    allocationCurrency: string;
  };
  topUsersList: Array<{
    position: string | number;
    tier: string;
    wallet: string;
    stake: string;
    allocation: string | number;
  }>;
  myWallet: string;
  tabsList?: string[];
  activeTab?: number;
  toggleTab?: (val: string) => void;
}

const IGOTopList2Yers = ({ topUsersList, texts, activeTab, toggleTab, tabsList, myWallet }: IGOTopList2YersProps) => {
  return (
    <Wrapper>
      <Title>
        {texts.title}
        <TabsWrap>
          <Tabs tabValue={activeTab} onClick={toggleTab} tabsList={tabsList} variant="small" />
        </TabsWrap>
      </Title>

      <LineHeader>
        <CellHeader>№</CellHeader>
        <CellHeader>{texts.tier}</CellHeader>
        <CellHeader>{texts.wallet}</CellHeader>
        <CellHeader>{texts.staked}</CellHeader>
        <CellHeader>{texts.allocation}</CellHeader>
      </LineHeader>
      <Table>
        {topUsersList.map((item, i) => (
          <Line
            exclude={i > 199}
            last={i === 199}
            id={item.wallet}
            key={i}
            className={myWallet === item.wallet ? "active" : ""}
          >
            <Cell>{item.position}</Cell>
            <Cell>{item.tier}</Cell>
            <Cell>{ellipsis(item.wallet, 6)}</Cell>
            <Cell>
              {new BigNumber(Web3Utils.fromWei(item.stake)).toFixed(2)} {texts.tokenName}
            </Cell>
            <Cell>
              {texts.allocationCurrency}
              {item.allocation}
            </Cell>
          </Line>
        ))}
      </Table>
    </Wrapper>
  );
};

export default IGOTopList2Yers;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 21px 0;
  border-radius: 10px;
  background: ${({ theme }) => theme.colors.bgGray};

  ${({ theme }) => theme.mediaQueries.md} {
    padding: 30px 0;
  }
`;
const Title = styled(Flex)`
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  padding: 0 10px;
  color: ${({ theme }) => theme.colors.text2};
  text-shadow: ${({ theme }) => theme.colors.textShadow};
  font-size: 15px;
  line-height: 19px;

  ${({ theme }) => theme.mediaQueries.md} {
    font-size: 15px;
    line-height: 32px;
    padding: 0 30px;
    flex-wrap: nowrap;
  }
`;
const Table = styled.div`
  overflow-y: auto;
  max-height: 301px;
  overflow-x: auto;
`;
const Line = styled.div<{ last: boolean; exclude: boolean }>`
  min-width: 500px;
  position: relative;
  display: grid;
  grid-template-columns: 10% 20% 40% 15% 15%;

  padding: 0 10px;
  transition: 0.3s;
  font-size: 11px;
  line-height: 14px;
  letter-spacing: 0.05em;
  opacity: ${({ exclude }) => exclude && 0.5};

  &.active {
    filter: drop-shadow(0px 0px 20px rgba(0, 0, 0, 0.2));
    background: #292930;
  }

  ${({ theme }) => theme.mediaQueries.md} {
    font-size: 15px;
    line-height: 19px;
    grid-template-columns: 10% 25% 25% 20% 20%;
  }

  ${({ last }) =>
    last &&
    `
    &:after{
      position: absolute;
      bottom: 0;
      left: 20px;
      content: '';
      display: block;
      width: calc(100% - 40px);
      height: 1px;
      background: #fff;
      opacity: 0.1;

    }
  `}
  ${({ theme }) => theme.mediaQueries.md} {
    &:after {
      width: calc(100% - 60px);
      left: 30px;
    }
  }
`;
const LineHeader = styled.div`
  margin-top: 20px;
  display: none;
  padding: 0;
  grid-template-columns: 10% 20% 40% 15% 15%;
  ${({ theme }) => theme.mediaQueries.md} {
    display: grid;
    grid-template-columns: 10% 25% 25% 20% 20%;
    padding: 0 10px;
  }
`;
const Cell = styled.div`
  display: flex;
  align-items: center;
  padding: 8px 10px;
  color: ${({ theme }) => theme.colors.text};
  transition: 0.3s;
  letter-spacing: 0.05em;

  ${Line}.active & {
    color: ${({ theme }) => theme.colors.green};
  }

  ${({ theme }) => theme.mediaQueries.md} {
    padding: 12px 20px;
  }
`;

const CellHeader = styled(Cell)`
  font-size: 13px;
  line-height: 16px;
  color: ${({ theme }) => theme.colors.whiteRgba};
`;

const TabsWrap = styled.div`
  width: 100%;
  margin-top: 20px;

  ${({ theme }) => theme.mediaQueries.md} {
    width: auto;
    margin-top: 0;
  }
`;
