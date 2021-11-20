import React from "react";
import styled from "styled-components";
import { Flex, Tabs } from "../../..";
import { IGOTopListProps } from "../types";
import { ellipsis } from "../../../helpers/ellipsis";

const IGOTopList: React.FC<IGOTopListProps> = ({ texts, topUsersList, myWallet, tabsList, toggleTab, activeTab }) => {
  return (
    <Wrapper>
      <Title>
        {texts.title}
        {tabsList && tabsList?.length && (
          <TabsWrap>
            <Tabs tabValue={activeTab} onClick={toggleTab} tabsList={tabsList} variant="small" />
          </TabsWrap>
        )}
      </Title>

      <LineHeader>
        <CellHeader>№</CellHeader>
        <CellHeader className="middle">{texts.wallet}</CellHeader>
        <CellHeader>{texts.staked}</CellHeader>
      </LineHeader>
      <Table>
        {topUsersList.map((item, i) => (
          <Line id={item.wallet} key={i} className={myWallet === item.wallet ? "active" : ""}>
            <Cell>{item.position}</Cell>
            <Cell>{ellipsis(item.wallet, 6)}</Cell>
            <Cell>
              {item.staked} {texts.tokenName}
            </Cell>
          </Line>
        ))}
      </Table>
    </Wrapper>
  );
};

export default IGOTopList;

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
`;
const Line = styled.div`
  display: grid;
  grid-template-columns: 20% 50% 30%;
  padding: 0 10px;
  transition: 0.3s;
  font-size: 11px;
  line-height: 14px;
  letter-spacing: 0.05em;
  &.active {
    filter: drop-shadow(0px 0px 20px rgba(0, 0, 0, 0.2));
    background: #292930;
  }
  ${({ theme }) => theme.mediaQueries.md} {
    font-size: 15px;
    line-height: 19px;
    grid-template-columns: 20% 50% 30%;
  }
`;
const LineHeader = styled.div`
  margin-top: 20px;
  display: none;
  padding: 0;
  ${({ theme }) => theme.mediaQueries.md} {
    display: grid;
    grid-template-columns: 20% 50% 30%;
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
