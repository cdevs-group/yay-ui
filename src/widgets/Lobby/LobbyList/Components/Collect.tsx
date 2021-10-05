import React from "react";
import { ButtonStyle, ImgWrapper, TextButton, TextButtonMob, WinWrapper } from "../styles";
import { WINNER_MIN } from "../../../../constants/images";
import { ButtonProps } from "../../../../components/Button";

const Collect = ({ title, titleMob, handleButton, propsButton }: CollectInterface) => {
  return (
    <WinWrapper>
      <ImgWrapper hide={propsButton?.spin} claimed={false}>
        <img src={WINNER_MIN} />
      </ImgWrapper>
      <ButtonStyle onClick={handleButton} {...propsButton} width="100%" variant="green">
        <TextButton>{title}</TextButton>
        <TextButtonMob>{titleMob}</TextButtonMob>
      </ButtonStyle>
    </WinWrapper>
  );
};

interface CollectInterface {
  title?: string;
  titleMob?: string;
  handleButton?: (param: any) => void;
  propsButton?: ButtonProps;
}

export default Collect;
