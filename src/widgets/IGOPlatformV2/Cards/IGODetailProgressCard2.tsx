import React, { ElementType } from "react";
import { Text } from "../../../components/Text";
import { Flex } from "../../../components/Box";
import { Button, ButtonProps } from "../../../components/Button";
import ProgressWithText from "../../../components/Progress/ProgressWithText";
import { IGODetailProgressCard2Props, StatusType } from "../types";
import { Card, TitleBlock, InfoText, TierLine, StakeButton, ChanceBlockProgress } from "./styles";
import styled from "styled-components";

const IGODetailProgressCard2 = ({
  status,
  chance,
  texts,
  textBaseProgress,
  baseProgress,
  isStaked,
  tierStatus,
  handleStake,
  allocation,
  inPool,
  summary,
  disabledClaim,
  disabledBuy,
  handleBuy,
  handleClaim,
  propsButtonStake,
  disabledButtonStake,
  propsButtonBuy,
  propsButtonClaim,
}: IGODetailProgressCard2Props) => {
  return (
    <Card>
      <FlexTop>
        <Text fontSize="17px">{texts.title}</Text>
      </FlexTop>
      <ProgressWithText text={textBaseProgress} progress={baseProgress} />
      <TierLineProgress>
        <div>
          <TitleBlock>{texts.tier}</TitleBlock>
          <InfoText white>{tierStatus}</InfoText>
        </div>
        {!isStaked && status === StatusType.BEFORE_SALE && (
          <StakeButtonProgress
            disabled={disabledButtonStake}
            onClick={handleStake}
            variant="green"
            {...propsButtonStake}
          >
            {texts.stakeButton}
          </StakeButtonProgress>
        )}
      </TierLineProgress>
      <ChanceBlockProgress>
        <TitleBlock>{texts.chance}</TitleBlock>
        {(status === StatusType.COMPLETED || status === StatusType.CLAIMING || status === StatusType.WAITING_FOR_TGE) &&
        !inPool ? (
          <InfoText white>-</InfoText>
        ) : (
          <InfoText white>{chance}</InfoText>
        )}
      </ChanceBlockProgress>
      <ChanceBlockProgress>
        <TitleBlock>{texts.allocation}</TitleBlock>
        {!inPool ? <InfoText white>-</InfoText> : <InfoText>{allocation}</InfoText>}
      </ChanceBlockProgress>
      <ChanceBlockProgress>
        <TitleBlock>{texts.summary}</TitleBlock>
        <InfoText lineHeight="22px !important" white>
          {summary}
        </InfoText>
      </ChanceBlockProgress>
      <Buttons>
        <Button width="100%" variant="green" color="" disabled={disabledBuy} onClick={handleBuy} {...propsButtonBuy}>
          {texts.buttonBuy}
        </Button>
        <Button width="100%" variant="option" disabled={disabledClaim} onClick={handleClaim} {...propsButtonClaim}>
          {texts.buttonClaim}
        </Button>
      </Buttons>
    </Card>
  );
};

export default IGODetailProgressCard2;

const FlexTop = styled(Flex)`
  justify-content: space-between;
  align-items: center;
  margin-bottom: 17px;
`;
const TierLineProgress = styled(TierLine)`
  justify-content: flex-start;
  margin-top: 25px;
`;
const StakeButtonProgress = styled(StakeButton)<ButtonProps<ElementType>>`
  margin-left: 36px;
`;
const Buttons = styled(Flex)`
  align-items: center;

  & button {
    &:first-child {
      margin-right: 10px;
    }

    &:last-child {
      margin-left: 10px;
    }
  }
`;
