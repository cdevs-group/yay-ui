import React from "react";
import { ButtonStyle, ImgWrapper, TextButton, TextButtonMob, WinWrapperCollect } from "../styles";
import { WINNER_MIN } from "../../../../constants/images";
import { ButtonProps } from "../../../../components/Button";

const Collect = ({ title, titleMob, handleButton, propsButton }: CollectInterface) => {
  return (
    <WinWrapperCollect>
      <ImgWrapper hide={propsButton?.spin} claimed={false}>
        <img src={WINNER_MIN} />
      </ImgWrapper>
      <ButtonStyle onClick={handleButton} {...propsButton} width="100%" variant="green">
        <TextButton>{title}</TextButton>
        <TextButtonMob>{titleMob}</TextButtonMob>
      </ButtonStyle>
    </WinWrapperCollect>
  );
};

interface CollectInterface {
  title?: string;
  titleMob?: string;
  handleButton?: (param: any) => void;
  propsButton?: ButtonProps;
}

export default Collect;
