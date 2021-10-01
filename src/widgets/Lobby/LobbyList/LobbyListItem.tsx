import React from "react";
import styled from "styled-components";
import { LobbyListItemProps } from "../types";
import { Text } from "../../../components/Text";
import { ellipsis } from "../../../helpers/ellipsis";
import { darkColors, lightColors, baseColors } from "../../../theme/colors";
import { Button } from "../../../components/Button";
import TimerNotSolidWithoutBg from "../../../components/Timer/TimerNotSolidWithoutBg";
import { Loader } from "../../../components/Loader";
import { AVATAR_PLAYER, AVATAR_PLAYER_2, WINNER_MIN, LOSE, Winner } from "../../../constants/images";
import { Flex } from "../../../components/Box";

const LobbyListItem = ({
  epoch,
  creator,
  bet,
  startTime,
  claimed,
  status,
  texts,
  handleButton,
  history,
  yourScore,
  apponentScore,
  winner,
  isLoad,
  lose,
  isEnoughYay,
  propsButtonJoin,
}: LobbyListItemProps) => {
  console.log(history, !startTime, yourScore !== "");
  return (
    <>
      {startTime !== 0 && (
        <TimerMob show={startTime !== undefined && startTime === 0}>
          <TimerNotSolidWithoutBg
            color={startTime && startTime === 0 ? baseColors.whiteRgba2 : lightColors.text}
            marginPoint="0 18px"
            width="186px"
            borderRadius="7px"
            background={lightColors.buttonBg}
            height="30px"
            time={startTime || 0}
            widthWrapper="100%"
            margin="0 auto"
          />
        </TimerMob>
      )}
      <Wrapper history={history && yourScore !== ""}>
        <Icons>
          <Icon1>
            <img src={AVATAR_PLAYER} />
          </Icon1>
          <Icon2>
            <img src={AVATAR_PLAYER_2} />
          </Icon2>
        </Icons>
        <Player>
          <TextTitle>{texts.player}</TextTitle>
          <TextStyle mb="5px">{ellipsis(creator)}</TextStyle>
        </Player>
        <Bet>
          <TextTitle>{texts.bet}</TextTitle>
          <BetValue lose={lose}>{bet}</BetValue>
        </Bet>
        {history && yourScore !== "" ? (
          <>
            <ScroreBlock>
              <TextTitle>{texts.yourScore}</TextTitle>
              <TextStyle>{yourScore}</TextStyle>
            </ScroreBlock>
            <ScroreBlock>
              <TextTitle>{texts.opportunScore}</TextTitle>
              <TextStyle>{apponentScore === "" ? "-" : apponentScore}</TextStyle>
            </ScroreBlock>
          </>
        ) : (
          <Time>
            <TextTitle>{texts.time}</TextTitle>
            <TimerNotSolidWithoutBg
              color={!startTime || startTime < 1 ? baseColors.whiteRgba2 : lightColors.text}
              marginPoint="0 18px"
              width="186px"
              borderRadius="7px"
              background={lightColors.buttonBg}
              height="30px"
              time={startTime || 0}
              widthWrapper="186px"
            />
          </Time>
        )}

        {!history && isEnoughYay ? (
          <ButtonStyle onClick={handleButton} variant="green" {...propsButtonJoin}>
            <TextButton style={{ display: "block" }}>{texts.join}</TextButton>
          </ButtonStyle>
        ) : (
          <>
            {isLoad ? (
              <WaitingBlock>
                <TextStyle>{texts.waitResult}</TextStyle>
                <LoaderWrap>
                  <Loader />
                </LoaderWrap>
              </WaitingBlock>
            ) : (
              <>
                {!isEnoughYay && (
                  <ButtonStyle style={{ opacity: 1 }} disabled variant="option">
                    <TextStyle color={baseColors.darkPink}>{texts.notEnoughYAY}</TextStyle>
                  </ButtonStyle>
                )}

                {winner && (
                  <WinWrapper>
                    <ImgWrapper claimed={claimed}>
                      <img src={WINNER_MIN} />
                    </ImgWrapper>
                    {!claimed ? (
                      <ButtonStyle onClick={handleButton} width="100%" variant="green">
                        <TextButton>{texts.winner}</TextButton>
                        <TextButtonMob>{texts.winnerMob}</TextButtonMob>
                      </ButtonStyle>
                    ) : (
                      <TextStyle mt="10px" textAlign="center" color={baseColors.green} textTransform="uppercase">
                        {texts.win}
                      </TextStyle>
                    )}
                  </WinWrapper>
                )}
                {!apponentScore && isEnoughYay && (
                  <ButtonStyle style={{ opacity: 1 }} disabled variant="option">
                    <TextStyle>{texts.waitPlayer}</TextStyle>
                  </ButtonStyle>
                )}

                {lose && (
                  <LoseBlock>
                    <TextStyle mt="10px" textAlign="center" color={baseColors.textGray} textTransform="uppercase">
                      {texts.lose}
                    </TextStyle>
                    <img src={LOSE} />
                  </LoseBlock>
                )}
                {yourScore === "" && (
                  <ButtonStyle variant="green">
                    <TextStyle>{texts.play}</TextStyle>
                  </ButtonStyle>
                )}
              </>
            )}
          </>
        )}
      </Wrapper>
    </>
  );
};

export default LobbyListItem;

const Wrapper = styled.div<{ history?: boolean }>`
  display: grid;
  grid-template-columns: 2fr 1.5fr 3fr;
  gap: 0 10px;
  align-items: flex-end;
  padding: 10px 14px 14px;
  background: ${({ theme }) => lightColors.cardBg};
  border-radius: 15px;
  box-sizing: border-box;
  margin-bottom: 15px;
  &:last-child {
    margin-bottom: 0;
  }
  ${({ theme }) => theme.mediaQueries.sm} {
    padding: 18px 33px 18px 38px;
  }
  ${({ theme }) => theme.mediaQueries.md} {
    gap: 0 20px;
    grid-template-columns: ${({ history }) => (history ? " 1.5fr 1fr 1fr 1fr 2fr" : " 1.5fr 1fr 2fr 2fr")};
    gap: 0 15px;
    align-items: flex-start;
    margin-bottom: 10px;
  }
  ${({ theme }) => theme.mediaQueries.lg} {
    grid-template-columns: ${({ history }) =>
      history ? " 0.7fr 2fr 2fr 1.7fr 1.7fr 2.5fr" : " 0.7fr 2fr 2fr 3.5fr 2.5fr"};
    gap: 0 15px;
  } ;
`;
const Icons = styled.div`
  width: 48px;
  height: 48px;
  position: relative;
  display: none;
  ${({ theme }) => theme.mediaQueries.lg} {
    display: block;
  }
`;
const Icon1 = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  box-shadow: ${({ theme }) => lightColors.boxShadow3};
  border-radius: 9px;
`;
const Icon2 = styled(Icon1)`
  left: auto;
  bottom: 0;
  top: auto;
  right: 0;
`;
const Player = styled(Flex)`
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;
const TextTitle = styled(Text)`
  font-size: 13px;
  line-height: 16px;
  letter-spacing: 0.05em;
  margin-bottom: 3px;
  color: ${({ theme }) => theme.colors.greyText};
`;
const Bet = styled.div``;
const Time = styled.div`
  display: none;
  ${({ theme }) => theme.mediaQueries.md} {
    display: block;
  } ;
`;
const WinWrapper = styled.div<{ win?: boolean | undefined }>`
  width: 100%;
  position: relative;
  justify-self: end;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row-reverse;
`;
const ImgWrapper = styled.div<{ claimed?: boolean | undefined }>`
  display: ${({ claimed }) => (claimed ? "block" : "none")};
  position: ${({ claimed }) => (claimed ? "relative" : "absolute")};
  right: -10px;
  z-index: 2;
  ${({ theme }) => theme.mediaQueries.md} {
    display: block;
  }
  &:after {
    display: ${({ claimed }) => (claimed ? "block" : "none")};
    width: 60%;
    height: 60%;
    top: 15px;
    left: 11px;
    content: "";
    position: absolute;
    background: ${({ theme }) => theme.colors.green};
    border-radius: 7px;
    z-index: -1;
  }
`;

const ButtonStyle = styled(Button)`
  padding: 8px;
  height: 30px;
  width: 100%;
  ${({ theme }) => theme.mediaQueries.sm} {
    padding: 16px;
    height: 50px;
  } ;
`;
const TextStyle = styled(Text)`
  font-size: 11px;
  ${({ theme }) => theme.mediaQueries.sm} {
    font-size: 15px;
  } ;
`;
const BetValue = styled(TextStyle)<{ lose?: boolean }>`
  padding: 6px;
  width: 57px;
  height: 30px;
  background: ${({ lose, theme }) => (lose ? theme.colors.redRgba : darkColors.gradients.greenGradient)};
  color: ${({ lose, theme }) => (lose ? theme.colors.darkPink : theme.colors.green)};
  border-radius: 7px;
  text-align: center;
`;
const TextButton = styled(Text)`
  display: none;
  ${({ theme }) => theme.mediaQueries.sm} {
    display: block;
  } ;
`;
const TextButtonMob = styled(Text)`
  display: block;
  font-size: 11px;
  ${({ theme }) => theme.mediaQueries.sm} {
    display: none;
  } ;
`;
const LoadResult = styled.div`
  min-width: 120px;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  flex-direction: column-reverse;
  height: 100%;
  flex: none;
  ${({ theme }) => theme.mediaQueries.sm} {
    flex-direction: row;
    align-items: center;
    min-width: 210px;
  } ;
`;
const LoaderWrap = styled.div`
  width: 0;
  margin-left: -20px;
  height: 40px;
  margin-top: -10px;
  transform: scale(0.4);
  align-self: center;
  ${({ theme }) => theme.mediaQueries.sm} {
    align-self: baseline;
    margin-left: 10px;
  }
`;
const TimerMob = styled.div<{ show?: boolean }>`
  display: flex;
  justify-content: center;
  display: ${({ show }) => (show ? "none" : "block")};
  margin: 0 auto 7px;
  ${({ theme }) => theme.mediaQueries.md} {
    display: none;
  }
`;
const WaitingBlock = styled(Flex)`
  flex-direction: column-reverse;
  align-items: center;
  ${({ theme }) => theme.mediaQueries.sm} {
    align-items: center;
    justify-content: center;
    flex-direction: row;
    margin-top: 10px;
    font-weight: normal;
    text-shadow: ${({ theme }) => theme.colors.textShadow3};
  }
`;
const ScroreBlock = styled(Bet)`
  display: none;
  ${({ theme }) => theme.mediaQueries.md} {
    display: block;
  }
`;
const LoseBlock = styled(Flex)`
  justify-content: center;
  align-items: center;
`;
