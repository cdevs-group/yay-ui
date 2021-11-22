import styled from "styled-components";
import { Text } from "../../../components/Text";
import { Flex } from "../../../components/Box";
import { Button } from "../../../components/Button";
import { ButtonProps } from "../../../components/Button/types";

export const Card = styled.div`
  max-width: 548px;
  width: 100%;
  height: 100%;
  padding: 22px 22px 18px;
  background: ${({ theme }) => theme.colors.bgGray};
  border-radius: 12px;
  box-sizing: border-box;
  margin: 0 auto;
  ${({ theme }) => theme.mediaQueries.sm} {
    padding: 32px 32px 26px;
  }
`;
export const TitleStyle = styled(Text)`
  margin-bottom: 32px;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 100%;
  color: ${({ theme }) => theme.colors.green};
  ${({ theme }) => theme.mediaQueries.sm} {
    font-size: 24px;
  }
`;
export const Row = styled(Flex)`
  margin-bottom: 25px;
  position: relative;
  &:last-child {
    margin-bottom: 0;
  }
`;
export const TitleBlock = styled(Text)`
  margin-bottom: 10px;
  font-weight: normal;
  font-size: 13px;
  line-height: 140%;
  color: ${({ theme }) => theme.colors.textGray};
  ${({ theme }) => theme.mediaQueries.sm} {
    font-size: 15px;
  }
`;

export const HeadLine = styled(Flex)`
  align-items: center;
  justify-content: space-between;
`;
export const TokenName = styled(Text)`
  font-size: 17px;
  line-height: 100%;
  color: ${({ theme }) => theme.colors.textGray};
`;
export const StatusName = styled(Text)`
  font-size: 15px;
  line-height: 100%;
  color: ${({ theme }) => theme.colors.green};
  position: relative;

  &:after {
    display: block;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    position: absolute;
    content: "";
    left: -9px;
    top: 50%;
    transform: translateY(-50%);
    background: ${({ theme }) => theme.colors.green};
  }
`;
export const ValueBlock = styled(Text)`
  font-weight: normal;
  font-size: 15px;
  line-height: 100%;
  & a:hover {
    color: ${({ theme }) => theme.colors.green};
  }
  ${({ theme }) => theme.mediaQueries.sm} {
    font-size: 17px;
  }
`;
export const RowType = styled.div`
  margin-bottom: 30px;

  ${({ theme }) => theme.mediaQueries.sm} {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 0 20px;
  }
`;
export const Tooltip = styled.div<{ isTooltipDisplayed: boolean }>`
  display: ${({ isTooltipDisplayed }) => (isTooltipDisplayed ? "block" : "none")};
  position: absolute;
  bottom: -22px;
  right: 0;
  left: 0;
  text-align: center;
  background-color: ${({ theme }) => theme.colors.contrast};
  color: ${({ theme }) => theme.colors.invertedContrast};
  border-radius: 16px;
  opacity: 0.7;
`;
export const AvailableBlock = styled(Flex)`
  align-items: center;
  margin-top: 30px;
  padding: 20px 15px;
  background: ${({ theme }) => theme.colors.buttonBg};
  border-radius: 12px;
  padding: ${({ theme }) => theme.mediaQueries.sm} {
    padding: 27px 20px;
  } ;
`;

export const AmoutTokens = styled(Text)`
  font-size: 15px;
  line-height: 100%;

  ${({ theme }) => theme.mediaQueries.sm} {
    font-size: 17px;
  }
`;
export const TextBlock = styled.div`
  margin-left: 10px;
`;
export const TokenInfoBlock = styled(Flex)`
  align-items: center;
  margin-top: 36px;
  padding: 20px 15px 20px 15px;
  background: ${({ theme }) => theme.colors.buttonBg};
  border-radius: 12px;
`;

export const TokenInfo = styled.div`
  width: 100%;
  margin-left: 10px;
`;
export const TokenBalance = styled(Text)`
  font-weight: normal;
  font-size: 15px;
  line-height: 100%;

  ${({ theme }) => theme.mediaQueries.sm} {
    font-size: 17px;
  } ;
`;
export const AddressLine = styled(Flex)`
  position: relative;
  margin-top: 15px;
  justify-content: space-between;
  align-items: center;
`;
export const TokenAddress = styled(Text)`
  font-weight: normal;
  font-size: 12px;
  line-height: 15px;
  letter-spacing: 0.08em;
  color: ${({ theme }) => theme.colors.textGray};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const TokenButton = styled(Button)`
  width: 20px;
  height: 20px;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  background: ${({ theme }) => theme.colors.whiteRgba};
  margin-left: 15px;

  & svg {
    transform: rotate(135deg);
    margin-top: -3px;
    margin-left: -1px;
    width: 15px;
    height: 15px;
  }
`;
export const TokenLogo = styled.div`
  flex-shrink: 0;

  & img {
    width: 55px;
    height: 55px;
  }
`;
export const Buttons = styled(Flex)`
  justify-content: space-between;
  margin-left: 10px;
`;
export const NetworkBlock = styled.div`
  margin-top: 20px;
`;
export const TierLine = styled(Flex)`
  margin-bottom: 20px;
  justify-content: space-between;
  align-items: flex-end;
`;
export const StakeButton = styled(Button)<ButtonProps>`
  height: 30px;
  padding: 0;
  max-width: 130px;
  width: 100%;
  border-radius: 7px;
  font-size: 13px;
  line-height: 16px;
  text-align: center;
  letter-spacing: 0.5px;
`;
export const InfoText = styled(Text)<{ white?: boolean }>`
  font-weight: normal;
  font-size: 15px;
  line-height: 100%;
  color: ${({ theme, white }) => (white ? theme.colors.text : theme.colors.green)};
`;
export const ChanceBlock = styled.div`
  margin-bottom: 20px;
`;
export const ChanceBlockProgress = styled.div`
  margin-bottom: 25px;
`;
