import React from "react";
import Flex from "../../components/Box/Flex";
import HistoryBlock from "./components/HistoryBlock";

export default {
  title: "Widgets/GameWidget",
  argTypes: {},
};

export const Block: React.FC = () => {
  return (
    <Flex>
      <HistoryBlock>
        <></>
      </HistoryBlock>
    </Flex>
  );
};
