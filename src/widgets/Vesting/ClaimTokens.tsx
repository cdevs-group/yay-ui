import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { transparentize } from "polished";
import { Text } from "../../components/Text";
import { Button } from "../../components/Button";
import { CheckIcon } from "../../components/Svg";

interface IProps {
  data: {
    totalRaised: string;
    total: string;
  };
  handleClaimTokens: () => void;
  texts: {
    title: string;
    button: string;
    totalRaised: string;
    total: string;
  };
  disabledButton?: boolean;
  isLoading?: boolean;
  endIcon?: React.ReactNode | null;
}

const ClaimTokens = ({ data, texts, handleClaimTokens, disabledButton, isLoading, endIcon }: IProps) => {
  const [widthProgress, setWidthProgress] = useState(0);
  const numberConverter = (string: string) => +string.replace(/[^\d.]/g, "");

  useEffect(() => {
    setWidthProgress((numberConverter(data.totalRaised) * 100) / numberConverter(data.total));
  }, [data.totalRaised, data.total]);

  return (
    <Card>
      <Row>
        <StyledTitle>{texts.title}</StyledTitle>
        <StyledButton
          variant="green"
          onClick={handleClaimTokens}
          disabled={disabledButton}
          isLoading={isLoading}
          endIcon={endIcon}
        >
          {texts.button}
        </StyledButton>
      </Row>
      <ProgressWrap>
        <ProgressTrack>
          <ProgressBar widthProgress={widthProgress || 0}>
            <ProgressThumb>
              <CheckIcon />
            </ProgressThumb>
            <TextHoverBlock widthProgress={widthProgress || 0}>
              <StyledText>{texts.totalRaised}</StyledText>
              <StyledText color="greyText3">{data.totalRaised}</StyledText>
            </TextHoverBlock>
          </ProgressBar>
        </ProgressTrack>
      </ProgressWrap>
      <Texts>
        <TextBlock>
          <StyledText>{texts.total}</StyledText>
          <StyledText color="greyText3">{data.total}</StyledText>
        </TextBlock>
      </Texts>
    </Card>
  );
};

export const Card = styled.div`
  padding: 35px 25px;
  background: ${({ theme }) => theme.colors.dark};
  border-radius: 20px;
  ${({ theme }) => theme.mediaQueries.sm} {
    grid-column: 1/3;
  }
`;

export const StyledTitle = styled(Text)`
  width: 100%;
  margin-bottom: 22px;
  font-size: 22px;
  line-height: 32px;
  letter-spacing: -0.02em;
  font-weight: 400;
  ${({ theme }) => theme.mediaQueries.sm} {
    width: auto;
    margin-bottom: 0px;
    font-size: 24px;
  }
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 30px;
  ${({ theme }) => theme.mediaQueries.sm} {
    flex-wrap: nowrap;
    margin-bottom: 47px;
  }
`;

const ProgressWrap = styled.div`
  padding: 7px 9px;
  margin-bottom: 10px;
  box-shadow: ${({ theme }) => theme.colors.boxShadow7};
  border-radius: 10px;
  background: ${({ theme }) => transparentize(0.9, theme.colors.greyBg2)};
`;

const ProgressTrack = styled.div`
  width: 100%;
  height: 16px;
  background: ${({ theme }) => transparentize(0.5, theme.colors.greenBg2)};
  border-radius: 6px;
`;

const ProgressBar = styled.div<{ widthProgress: number }>`
  position: relative;
  display: flex;
  justify-content: ${({ widthProgress }) => (widthProgress <= 2 ? "flex-start" : "flex-end")};
  align-items: center;
  width: ${({ widthProgress }) => `${widthProgress}%` || 0};
  height: inherit;
  background: ${({ theme }) => theme.colors.greenBg2};
  border-radius: 6px;
  transition: 0.3s;
`;

const ProgressThumb = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  width: 25px;
  height: 25px;
  background: ${({ theme }) => theme.colors.text};
  border-radius: 50%;
  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 44px;
    height: 44px;
    background: ${({ theme }) => transparentize(0.92, theme.colors.greenBg2)};
    border-radius: 50%;
  }
`;

const Texts = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  text-align: right;
`;

const TextBlock = styled.div`
  padding: 0 10px;
`;
const TextHoverBlock = styled.div<{ widthProgress: number }>`
  position: absolute;
  top: 30px;
  right: ${({ widthProgress }) => (widthProgress >= 50 ? 0 : "-130px")};
  min-width: 130px;
  padding: 3px 3px;
  background: ${({ theme }) => theme.colors.dark};
  border-radius: 10px;
  transition: 0.3s;
  opacity: 0;
  text-align: ${({ widthProgress }) => (widthProgress >= 50 ? "right" : "left")};
  ${ProgressBar}:hover & {
    transition: 0.3s;
    opacity: 1;
  }
`;
const StyledText = styled(Text)`
  font-size: 10px;
  line-height: 19px;
  letter-spacing: 0.13em;
  text-transform: uppercase;
  font-weight: 400;
`;

export const StyledButton = styled(Button)`
  width: 100%;
  font-weight: 400;
  ${({ theme }) => theme.mediaQueries.sm} {
    width: auto;
    margin-left: 43px;
  }
  &:disabled {
    opacity: 1;
    background: ${({ theme }) => transparentize(0.85, theme.colors.text)};
  }
`;

export default ClaimTokens;
