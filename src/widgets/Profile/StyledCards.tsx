import styled from "styled-components";
import { Button, COIN5, Text } from "../..";

export const ButtonStyle = styled(Button)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: auto;
  padding: 0;
  font-size: 13px;
  border-radius: 7px;
`;

export const Network = styled.img`
  position: absolute;
  left: 7px;
  top: 7px;
  width: 22px;
  height: 22px;
`;

export const Reward = styled.div`
  top: -5px;
  right: -5px;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 54px;
  height: 25px;
  padding: 6px 3px;
  background: ${({ theme }) => theme.colors.bgGray5};
  box-shadow: ${({ theme }) => theme.colors.boxShadow11};
  border-radius: 4px;
  z-index: 2;
`;

export const ButtonText = styled(Text)<{ loadingButton?: boolean }>`
  position: relative;
  display: none;
  &:after {
    display: block;
    content: ${({ loadingButton }) => (loadingButton ? "none" : `''`)};
    width: 18px;
    height: 17px;
    margin-left: 4px;
    background: ${() => `url(${COIN5}) no-repeat left center /cover`};
  }
  ${({ theme }) => theme.mediaQueries.sm} {
    display: flex;
    align-items: center;
    font-size: 13px;
  }
`;

export const ButtonTextMob = styled(ButtonText)<{ loadingButton?: boolean }>`
  font-size: 13px;
  display: flex;
  align-items: center;
  &:after {
    content: ${({ loadingButton }) => (loadingButton ? "none" : `''`)};
    width: 18px;
    height: 17px;
    margin-left: 4px;
    background: ${() => `url(${COIN5}) no-repeat left center /cover`};
  }
  ${({ theme }) => theme.mediaQueries.sm} {
    display: none;
  }
`;

export const TitleStyle = styled(Text)`
  margin-bottom: 5px;
  font-size: 11px;
  line-height: 16px;
  letter-spacing: 0.05em;
  font-weight: normal;
  ${({ theme }) => theme.mediaQueries.sm} {
    font-size: 13px;
  }
`;

export const DescriptionStyle = styled(Text)`
  margin-bottom: 7px;
  font-size: 9px;
  line-height: 14px;
  letter-spacing: 0.05em;
  font-weight: normal;
  ${({ theme }) => theme.mediaQueries.sm} {
    font-size: 11px;
  }
`;
