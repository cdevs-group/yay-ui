import ProgressRange from "../../../../components/Progress/ProgressRange";
import { baseColors } from "../../../../theme/colors";
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
            bgTrack={item === 0 ? baseColors.redRgba2 : baseColors.greenRgba3}
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
