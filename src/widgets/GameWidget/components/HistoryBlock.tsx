import React from "react";
import styled from "styled-components";
import { TabsWithMovingLine } from "../../..";
import Live from "./Live";
import { TabsWithMovingLineProps } from "../../../components/Tabs/types";
import { LiveTabProps } from "./types";

interface Props extends TabsWithMovingLineProps, LiveTabProps {}

const HistoryBlock: React.FC<Props> = ({
  handleToggleTab,
  tabsList,
  tabActive,
  title,
  dataLive,
  prizePoolText,
  prizePool,
}) => {
  return (
    <>
    <Block>
      <TabsWithMovingLine handleToggleTab={handleToggleTab} tabsList={tabsList} tabActive={tabActive} title={title} />
      {tabActive === 0 && <Live dataLive={dataLive} prizePoolText={prizePoolText} prizePool={prizePool} />}
    </Block>
    </>
  );
};

export default HistoryBlock;

const Block = styled.div`
  width: 100%;
  max-width: 367px;
  min-height: 362px;
  padding: 21px;
  border-radius: 15px;
  background: ${({ theme }) => theme.colors.bgCard2};
`;
