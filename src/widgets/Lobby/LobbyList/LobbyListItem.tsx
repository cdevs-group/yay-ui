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

const LobbyListItem = ({ data, texts, handleWin, handleJoin, handlePlay }: LobbyListItemProps) => {
  return (
    <Wrapper>
      <Icons>
        <Icon1>
          <img src={data.playerImg1 || AVATAR_PLAYER} />
        </Icon1>
        <Icon2>
          <img src={data.playerImg2 || AVATAR_PLAYER_2} />
        </Icon2>
      </Icons>
      <Player>
        <TextTitle>{texts.player}</TextTitle>
        <Text>{ellipsis(data.player)}</Text>
      </Player>
      <Bet>
        <TextTitle>{texts.bet}</TextTitle>
        <BetValue>{data.bet}</BetValue>
      </Bet>
      <Time>
        <TextTitle>{texts.time}</TextTitle>
        <TimerNotSolidWithoutBg
          color={data.timer !== undefined && data.timer < 1 ? baseColors.whiteRgba2 : lightColors.text}
          marginPoint="0 18px"
          width="186px"
          borderRadius="7px"
          background={lightColors.buttonBg}
          height="30px"
          time={data.timer}
        />
      </Time>
      {!data.result && data.timer !== undefined && data.timer < 1 ? (
        <LoadResult>
          <Text>{texts.waitResult}</Text>
          <LoaderWrap>
            <Loader />
          </LoaderWrap>
        </LoadResult>
      ) : (
        <WinWrapper win={data.result && data.result === "win"}>
          <img src={Winner} />
          <Button
            onClick={
              data.result && data.result === "win" ? handleWin : data.button === "Play" ? handlePlay : handleJoin
            }
            width="100%"
            variant={!data.ready ? "option" : "green"}
          >
            {data?.result === "win" ? texts?.winner : data?.button}
          </Button>
        </WinWrapper>
      )}
    </Wrapper>
  );
};

export default LobbyListItem;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 0.7fr 2fr 2fr 3.5fr 2.5fr;
  gap: 0 20px;
  align-items: flex-start;
  padding: 18px 33px 18px 38px;
  margin-bottom: 10px;
  background: ${({ theme }) => lightColors.cardBg};
  border-radius: 15px;
  box-sizing: border-box;
  &:last-child {
    margin-bottom: 0;
  }
`;
const Icons = styled.div`
  width: 48px;
  height: 48px;
  position: relative;
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
const BetValue = styled.div`
  padding: 6px;
  width: 60px;
  height: 30px;
  background: ${({ theme }) => darkColors.gradients.greenGradient};
  color: ${({ theme }) => theme.colors.green};
  border-radius: 7px;
  text-align: center;
`;
const Time = styled.div``;
const WinWrapper = styled.div<{ win?: boolean | "" | undefined }>`
  min-width: 210px;
  width: 100%;
  position: relative;
  justify-self: end;
  & img {
    position: absolute;
    top: -65px;
    right: -50px;
    display: ${({ win }) => (win ? "block" : "none")};
    pointer-events: none;
  }
`;
const LoadResult = styled.div`
  min-width: 210px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  flex: none;
`;
const LoaderWrap = styled.div`
  width: 0;
  margin-left: 10px;
  height: 40px;
  transform: scale(0.4);
  align-self: baseline;
`;
