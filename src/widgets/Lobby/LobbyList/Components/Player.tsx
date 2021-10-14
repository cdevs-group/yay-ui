import { AVATAR_PLAYER } from "../../../../constants/images";
import { ellipsis } from "../../../../helpers/ellipsis";
import React, { ReactNode } from "react";
import { Icons, PlayerWrap, TextTitle, TextStyle } from "../styles";

const Player = ({ title, gamer, icon }: PlayerInterface) => {
  return (
    <>
      <Icons>{icon || <img src={AVATAR_PLAYER} />}</Icons>
      <PlayerWrap>
        <TextTitle>{title}</TextTitle>
        <TextStyle mb="5px">{ellipsis(gamer)}</TextStyle>
      </PlayerWrap>
    </>
  );
};

interface PlayerInterface {
  title?: string;
  gamer: string;
  icon?: ReactNode;
}

export default Player;
