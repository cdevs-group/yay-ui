import React from "react";
import styled from "styled-components";
import { TabsWithMovingLine } from "../../..";
import { TabsWithMovingLineProps } from "../../../components/Tabs/types";
import Today from "./Today";
import { TodayTabProps } from "./types";

interface Props extends TabsWithMovingLineProps, TodayTabProps {}

const WinnersBlock: React.FC<Props> = ({ handleToggleTab, tabsList, tabActive, title, dataToday }) => {
  return (
    <>
      <Block>
        <TabsWithMovingLine handleToggleTab={handleToggleTab} tabsList={tabsList} tabActive={tabActive} title={title} />
        {tabActive === 0 && <Today dataToday={dataToday} />}
      </Block>
    </>
  );
};

export default WinnersBlock;

const Block = styled.div`
  width: 100%;
  max-width: 367px;
  min-height: 362px;
  padding: 21px;
  border-radius: 15px;
  background: ${({ theme }) => theme.colors.bgCard2};
`;
