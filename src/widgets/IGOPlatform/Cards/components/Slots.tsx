import ProgressRange from "./ProgressRange";
import { darkColors } from "../../../../theme/colors";
import React from "react";
import styled from "styled-components";
import { Flex } from "../../../../components/Box";

export interface ProgressRangeProps {
  dataSlots: { all: number; free: number }[];
}

const Slots = ({ dataSlots }: ProgressRangeProps) => {
  return (
    <Flex>
      {dataSlots.map((item, i) => (
        <Slot key={i}>
          <ProgressRange counter={item.toString()} bgTrack={darkColors.buttonBg} progress={item} />
        </Slot>
      ))}
    </Flex>
  );
};

export default Slots;

const Slot = styled.div`
  width: 100%;
  margin-right: 5px;

  &:last-child {
    margin-right: 0;
  }
`;
