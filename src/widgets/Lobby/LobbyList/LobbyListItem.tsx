import React from "react";
import { LobbyListItemProps, Status } from "../types";
import { lightColors, baseColors } from "../../../theme/colors";
import TimerNotSolidWithoutBg from "../../../components/Timer/TimerNotSolidWithoutBg";
import { Player, Bet, Timer, Scores, Lose, WaitingOpponent, Win, Collect } from "./Components";
import { TimerMob, Wrapper, TextStyle, ButtonStyle, TextButton } from "./styles";

const LobbyListItem = ({
  epoch,
  creator,
  open,
  bet,
  startTime,
  claimed,
  status,
  texts,
  handleButton,
  history,
  yourScore,
  opponentScore,
  winner,
  isLoad,
  lose,
  isEnoughYay,
  propsButton,
}: LobbyListItemProps) => {
  return (
    <>
      <TimerMob show={![Status.PLAY].find((el) => el === status)}>
        <TimerNotSolidWithoutBg
          color={lightColors.text}
          marginPoint="0 18px"
          width="186px"
          borderRadius="7px"
          background={lightColors.buttonBg}
          height="30px"
          time={startTime}
          widthWrapper="100%"
          margin="0 auto"
        />
      </TimerMob>
      <Wrapper
        history={!![Status.COLLECT, Status.WAITINGOPPONENT, Status.WIN, Status.LOSE].find((el) => el === status)}
      >
        <Player title={texts.player} gamer={creator} />
        <Bet title={texts.bet} red={status === Status.LOSE} bet={bet} />

        {[Status.COLLECT, Status.WAITINGOPPONENT, Status.WIN, Status.LOSE].find((el) => el === status) ? (
          <Scores
            titleYou={texts.yourScore}
            titleOpponent={texts.opportunScore}
            yourScore={yourScore}
            opponentScore={status === Status.WAITINGOPPONENT ? "-" : opponentScore}
          />
        ) : (
          <Timer
            title={texts.time}
            color={![Status.PLAY].find((el) => el === status) ? baseColors.whiteRgba2 : lightColors.text}
            time={startTime}
          />
        )}
        {status === Status.PLAY && (
          <ButtonStyle variant="green" onClick={handleButton} {...propsButton}>
            <TextStyle>{texts.play}</TextStyle>
          </ButtonStyle>
        )}
        {status === Status.WAITINGJOIN && (
          <ButtonStyle style={{ opacity: 1 }} disabled variant="option">
            <TextStyle>{texts.waitPlayer}</TextStyle>
          </ButtonStyle>
        )}
        {status === Status.JOIN && (
          <ButtonStyle onClick={handleButton} variant="green" {...propsButton}>
            <TextButton style={{ display: "block" }}>{texts.join}</TextButton>
          </ButtonStyle>
        )}

        {status === Status.ENOUGH && (
          <ButtonStyle style={{ opacity: 1 }} disabled variant="option">
            <TextStyle color={baseColors.darkPink}>{texts.notEnoughYAY}</TextStyle>
          </ButtonStyle>
        )}

        {status === Status.COLLECT && (
          <Collect
            title={texts.winner}
            titleMob={texts.winnerMob}
            handleButton={handleButton}
            propsButton={propsButton}
          />
        )}
        {status === Status.WAITINGOPPONENT && <WaitingOpponent title={texts.waitResult} />}
        {status === Status.WIN && <Win title={texts.win} />}
        {status === Status.LOSE && <Lose title={texts.lose} />}
      </Wrapper>
    </>
  );
};

export default LobbyListItem;
