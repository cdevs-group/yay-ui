import styled from "styled-components";
import { darkColors, lightColors } from "../../../theme";
import { Text } from "../../../components/Text";
import { Button } from "../../../components/Button";
import { Flex } from "../../../components/Box";

export const Wrapper = styled.div<{ history?: boolean }>`
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
export const TextTitle = styled(Text)`
  font-size: 13px;
  line-height: 16px;
  letter-spacing: 0.05em;
  margin-bottom: 7px;
  color: ${({ theme }) => theme.colors.greyText};
`;
export const BetWrap = styled.div``;
export const Time = styled.div`
  display: none;
  ${({ theme }) => theme.mediaQueries.md} {
    display: block;
  } ;
`;
export const WinWrapper = styled.div<{ win?: boolean | undefined }>`
  width: 100%;
  position: relative;
  justify-self: end;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row-reverse;
`;
export const ImgWrapper = styled.div<{ claimed?: boolean | undefined; hide?: boolean }>`
  display: ${({ claimed }) => (claimed ? "block" : "none")};
  position: ${({ claimed }) => (claimed ? "relative" : "absolute")};
  right: -10px;
  z-index: 2;
  ${({ theme }) => theme.mediaQueries.md} {
    display: block;
  }
  opacity: ${({ hide }) => (hide ? "0" : "1")};
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

export const ButtonStyle = styled(Button)`
  padding: 8px;
  height: 30px;
  width: 100%;
  ${({ theme }) => theme.mediaQueries.sm} {
    padding: 16px;
    height: 50px;
  } ;
`;
export const TextStyle = styled(Text)`
  font-size: 11px;
  ${({ theme }) => theme.mediaQueries.sm} {
    font-size: 15px;
  } ;
`;
export const BetValue = styled(TextStyle)<{ lose?: boolean }>`
  padding: 6px;
  width: 65px;
  height: 30px;
  background: ${({ lose, theme }) => (lose ? theme.colors.redRgba : darkColors.gradients.greenGradient)};
  color: ${({ lose, theme }) => (lose ? theme.colors.darkPink : theme.colors.green)};
  border-radius: 7px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  ${({ theme }) => theme.mediaQueries.sm} {
    width: 83px;
  }
`;
export const TextButton = styled(Text)`
  display: none;
  ${({ theme }) => theme.mediaQueries.sm} {
    display: block;
  } ;
`;
export const TextButtonMob = styled(Text)`
  display: block;
  font-size: 11px;
  ${({ theme }) => theme.mediaQueries.sm} {
    display: none;
  } ;
`;
export const LoadResult = styled.div`
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
export const LoaderWrap = styled.div`
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
export const TimerMob = styled.div<{ show?: boolean }>`
  display: flex;
  justify-content: center;
  display: ${({ show }) => (show ? "none" : "block")};
  margin: 0 auto 7px;
  ${({ theme }) => theme.mediaQueries.md} {
    display: none;
  }
`;
export const WaitingBlock = styled(Flex)`
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
export const ScroreBlock = styled(BetWrap)`
  display: none;
  ${({ theme }) => theme.mediaQueries.md} {
    display: block;
  }
`;
export const LoseBlock = styled(Flex)`
  justify-content: center;
  align-items: center;
`;

export const Icons = styled.div`
  width: 48px;
  height: 48px;
  position: relative;
  display: none;
  ${({ theme }) => theme.mediaQueries.lg} {
    display: block;
  }
`;
export const Icon1 = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  box-shadow: ${({ theme }) => lightColors.boxShadow3};
  border-radius: 9px;
`;
export const Icon2 = styled(Icon1)`
  left: auto;
  bottom: 0;
  top: auto;
  right: 0;
`;
export const PlayerWrap = styled(Flex)`
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;
