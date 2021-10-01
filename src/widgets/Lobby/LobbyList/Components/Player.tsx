import { AVATAR_PLAYER, AVATAR_PLAYER_2 } from "../../../../constants/images";
import { ellipsis } from "../../../../helpers/ellipsis";
import React from "react";
import { Icons, Icon1, Icon2, PlayerWrap, TextTitle, TextStyle } from "../styles";

const Player = ({ title, gamer }: PlayerInterface) => {
  return (
    <>
      <Icons>
        <Icon1>
          <img src={AVATAR_PLAYER} />
        </Icon1>
        <Icon2>
          <img src={AVATAR_PLAYER_2} />
        </Icon2>
      </Icons>
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
}
export default Player;
