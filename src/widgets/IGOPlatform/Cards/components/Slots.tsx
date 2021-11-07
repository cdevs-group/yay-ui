import ProgressRange from "./ProgressRange";
import { darkColors } from "../../../../theme/colors";
import React from "react";
import styled from "styled-components";
import { Flex } from "../../../../components/Box";

const Slots = ({ dataSlots }: { dataSlots: number[] }) => {
  return (
    <Flex>
      {dataSlots.map((item, i) => (
        <Slot key={i}>
          <ProgressRange
            counter={item.toString()}
            isError={item === 0}
            bgTrack={darkColors.buttonBg}
            progress={item === 0 ? 100 : item}
          />
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
