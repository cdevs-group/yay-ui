import React from "react";
import { LoseBlock, TextStyle } from "../styles";
import { baseColors } from "../../../../theme/colors";
import { LOSE } from "../../../../constants/images";

const Lose = ({ title }: LoseInterface) => {
  return (
    <LoseBlock>
      <TextStyle mt="10px" textAlign="center" color={baseColors.textGray} textTransform="uppercase">
        {title}
      </TextStyle>
      <img src={LOSE} />
    </LoseBlock>
  );
};

interface LoseInterface {
  title?: string;
}
export default Lose;
