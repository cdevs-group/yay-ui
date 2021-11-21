import styled from "styled-components";
import { Text } from "../../../components/Text";
import { Flex } from "../../../components/Box";

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
