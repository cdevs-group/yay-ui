import React from "react";
import { ImgWrapper, TextStyle, WinWrapper } from "../styles";
import { baseColors } from "../../../../theme/colors";
import { WINNER_MIN } from "../../../../constants/images";

const Win = ({ title }: WinInterface) => {
  return (
    <WinWrapper>
      <ImgWrapper claimed={true}>
        <img src={WINNER_MIN} />
      </ImgWrapper>
      <TextStyle mt="10px" textAlign="center" color={baseColors.green} textTransform="uppercase">
        {title}
      </TextStyle>
    </WinWrapper>
  );
};

interface WinInterface {
  title?: string;
}

export default Win;
