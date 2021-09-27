import React from "react";
import styled from "styled-components";
import { LobbyListItemProps } from "../types";
import { Text } from "../../../components/Text";
import { ellipsis } from "../../../helpers/ellipsis";
import { darkColors, lightColors, baseColors } from "../../../theme/colors";
import { Button } from "../../../components/Button";
import { Winner } from "../../../constants/images";
import TimerNotSolidWithoutBg from "../../../components/Timer/TimerNotSolidWithoutBg";
import { Loader } from "../../../components/Loader";
import { AVATAR_PLAYER, AVATAR_PLAYER_2 } from "../../../constants/images";

const LobbyListItem = ({ epoch, creator, bet, startTime, status, texts, handleButton }: LobbyListItemProps) => {
  const textButton = (mob: string, type: string) => {
    switch (type) {
      case "winner":
        return mob === "mob" ? texts.winnerMob : texts.winner;
      case "join":
        return texts.join;
      case "waitPlayer":
        return texts.waitPlayer;
      case "withApponent":
        return texts.withApponent;
      default:
        return texts.waitPlayer;
    }
  };

  // {
  //   "epoch": 4,
  //   "creator": "0x049900f4204604c52BF76Ba61e72a43e04B0AA54",
  //   "bet": "10000000000000000",
  //   "startTime": null,
  //   "status": "CREATED"
  // },

  return (
    <>
      {/*<TimerMob type={(data.startTime !== undefined && data.startTime < 1) || data?.type === "join"}>*/}
      {/*  <TimerNotSolidWithoutBg*/}
      {/*    color={data.startTime && data.startTime < 1 ? baseColors.whiteRgba2 : lightColors.text}*/}
      {/*    marginPoint="0 18px"*/}
      {/*    width="186px"*/}
      {/*    borderRadius="7px"*/}
      {/*    background={lightColors.buttonBg}*/}
      {/*    height="30px"*/}
      {/*    time={data.timer}*/}
      {/*    widthWrapper='186px'*/}
      {/*  />*/}
      {/*</TimerMob>*/}
      <Wrapper>
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
          <TextStyle>{ellipsis(creator)}</TextStyle>
        </Player>
        <Bet>
          <TextTitle>{texts.bet}</TextTitle>
          <BetValue>{bet}</BetValue>
        </Bet>
        <Time>
          <TextTitle>{texts.time}</TextTitle>
          <TimerNotSolidWithoutBg
            color={!startTime || startTime < 1 ? baseColors.whiteRgba2 : lightColors.text}
            marginPoint="0 18px"
            width="186px"
            borderRadius="7px"
            background={lightColors.buttonBg}
            height="30px"
            time={0}
            widthWrapper="186px"
          />
        </Time>
        <ButtonStyle onClick={handleButton} variant="green">
          <TextButton>{texts.join}</TextButton>
        </ButtonStyle>
        {/*{data.type === "waitResult" ? (*/}
        {/*  <LoadResult>*/}
        {/*    <TextStyle>{texts.waitResult}</TextStyle>*/}
        {/*    <LoaderWrap>*/}
        {/*      <Loader />*/}
        {/*    </LoaderWrap>*/}
        {/*  </LoadResult>*/}
        {/*) : (*/}
        {/*  <WinWrapper win={data.type === "winner"}>*/}
        {/*    <img src={Winner} />*/}
        {/*    <ButtonStyle*/}
        {/*      onClick={handleButton}*/}
        {/*      width="100%"*/}
        {/*      variant={*/}
        {/*        data.type === "winner" || data.type === "withApponent" || data.type === "join" ? "green" : "option"*/}
        {/*      }*/}
        {/*    >*/}
        {/*      <TextButton>{textButton("desc", data.type)}</TextButton>*/}
        {/*      <TextButtonMob>{textButton("mob", data.type)}</TextButtonMob>*/}
        {/*    </ButtonStyle>*/}
        {/*  </WinWrapper>*/}
        {/*)}*/}
      </Wrapper>
    </>
  );
};

export default LobbyListItem;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 2.5fr 2fr 2.5fr;
  gap: 0 20px;
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
    grid-template-columns: 1.5fr 1fr 2fr 2.5fr;
    gap: 0 15px;
    align-items: flex-start;
    margin-bottom: 10px;
  }
  ${({ theme }) => theme.mediaQueries.lg} {
    grid-template-columns: 0.7fr 2fr 2fr 3.5fr 2.5fr;
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
const Player = styled.div``;
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
const WinWrapper = styled.div<{ win?: boolean | "" | undefined }>`
  min-width: 120px;
  width: 100%;
  position: relative;
  justify-self: end;
  & img {
    position: absolute;
    top: -40px;
    right: -30px;
    display: ${({ win }) => (win ? "block" : "none")};
    pointer-events: none;
    width: 90px;
  }
  ${({ theme }) => theme.mediaQueries.sm} {
    min-width: 210px;
    & img {
      width: auto;
      right: -50px;
      top: -65px;
    }
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
const BetValue = styled(TextStyle)`
  padding: 6px;
  width: 57px;
  height: 30px;
  background: ${({ theme }) => darkColors.gradients.greenGradient};
  color: ${({ theme }) => theme.colors.green};
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
  margin-left: 0;
  height: 40px;
  transform: scale(0.4);
  align-self: center;
  ${({ theme }) => theme.mediaQueries.sm} {
    align-self: baseline;
    margin-left: 10px;
  }
`;
const TimerMob = styled.div<{ type?: boolean }>`
  display: flex;
  justify-content: center;
  display: ${({ type }) => (type ? "none" : "block")};
  margin: 0 auto 7px;
  ${({ theme }) => theme.mediaQueries.md} {
    display: none;
  }
`;
