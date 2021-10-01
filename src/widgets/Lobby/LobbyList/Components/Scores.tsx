import React from "react";
import { ScroreBlock, TextStyle, TextTitle } from "../styles";

const Scores = ({ titleYou, titleOpponent, yourScore, opponentScore }: ScoresInterface) => {
  return (
    <>
      <ScroreBlock>
        <TextTitle>{titleYou}</TextTitle>
        <TextStyle>{yourScore}</TextStyle>
      </ScroreBlock>
      <ScroreBlock>
        <TextTitle>{titleOpponent}</TextTitle>
        <TextStyle>{opponentScore}</TextStyle>
      </ScroreBlock>
    </>
  );
};

interface ScoresInterface {
  titleYou?: string;
  titleOpponent?: string;
  yourScore?: string | number;
  opponentScore?: string | number;
}
export default Scores;
