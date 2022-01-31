import React from "react";
import { ImgWrapper, TextStyle, WinWrapper } from "../styles";
import { WINNER_MIN } from "../../../../constants/images";

const Win = ({ title }: WinInterface) => {
  return (
    <WinWrapper>
      <ImgWrapper claimed={true}>
        <img src={WINNER_MIN} />
      </ImgWrapper>
      <TextStyle mt="10px" textAlign="center" color="green" textTransform="uppercase">
        {title}
      </TextStyle>
    </WinWrapper>
  );
};

interface WinInterface {
  title?: string;
}

export default Win;
