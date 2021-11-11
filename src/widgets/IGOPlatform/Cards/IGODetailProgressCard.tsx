import React from "react";
import styled from "styled-components";
import { Text } from "../../../components/Text";
import { Flex } from "../../../components/Box";
import { BaseToggle } from "../../../components/Toggle";
import ProgressWithText from "../../../components/Progress/ProgressWithText";
import { IGODetailProgressCardProps } from "../types";
import TextWithTooltip from "./components/TextWithTooltip";
import SlotSummary from "./components/SlotSummary";
import ProgressRange2 from "./components/ProgressRange2";
import { baseColors } from "../../../theme/colors";
import { Button } from "../../../components/Button";
import { TimerNotSolidWithoutBg } from "../../..";

const IGODetailProgressCard: React.FC<IGODetailProgressCardProps> = ({
  checkedToggle,
  handleToggleChecked,
  disabledToggle,
  textBaseProgress,
  baseProgress,
  texts,
  slots,
  status,
  buttonLeft,
  buttonCenter,
  buttonRight,
  buttonLong,
  progress,
  progressVisible,
  descriptionsButtons,
  balanceError,
  balance,
  handleBuyYAY,
  slotsOpacity,
  time,
  timerVisible,
}) => {
  const buttonsList = [buttonLeft, buttonCenter, buttonRight];

  return (
    <Card>
      <FlexTop>
        <Text fontSize="17px">{texts.title}</Text>
        <div>
          <Flex alignItems="center">
            <Text fontSize="13px" mr="10px" style={{ opacity: disabledToggle ? 0.5 : 1 }}>
              {texts.whitelistToggle}
            </Text>
            <BaseToggle checked={checkedToggle} onChange={handleToggleChecked} disabled={disabledToggle} />
            <Text fontSize="13px" ml="10px" style={{ opacity: disabledToggle ? 0.5 : 1 }}>
              {texts.saleToggle}
            </Text>
          </Flex>
        </div>
      </FlexTop>
      <ProgressWithText text={textBaseProgress} progress={baseProgress} />
      <Text fontSize="11px" lineHeight="140%" fontWeight={400} mt="10px" mb="30px" textAlign="center">
        {texts.textBottomBaseProgress}
      </Text>
      {status && (
        <Status>
          {texts.status}
          {timerVisible && (
            <Text textTransform="lowercase">
              <TimerNotSolidWithoutBg height="auto" withTime fontSize="17px" time={time} />
            </Text>
          )}
        </Status>
      )}

      <TextWithTooltip text={texts.slotsSummary} textTooltip={texts.slotsSummaryTooltip} />
      <Slots>
        {slots.map((el) => (
          <SlotSummary slotsOpacity={slotsOpacity} text={el.text} error={el.error} circleHidden={slots?.length <= 1} />
        ))}
      </Slots>
      <TextWithTooltip text={texts.availableWhitelist} textTooltip={texts.availableWhitelistTooltip} />
      <div style={{ marginBottom: 30 }} />
      <Grid>
        {buttonsList.map((el, i) => (
          <Block>
            {progressVisible ? (
              <div style={{ marginBottom: 12 }}>
                <ProgressRange2 progress={progress[i]} />
              </div>
            ) : (
              <Text fontSize="13px" textAlign="center" mb="5px">
                {descriptionsButtons?.[i]}
              </Text>
            )}
            {el}
          </Block>
        ))}
      </Grid>
      {balanceError ? (
        <Flex alignItems="center" justifyContent="center" mb={10}>
          <Text fontSize="13px" style={{ opacity: 0.5 }} color={baseColors.darkPink}>
            {texts.error}
          </Text>
          <BuyYAYButton
            onClick={handleBuyYAY}
            fontSize="13px"
            style={{ textsDecoration: "underline", opacity: 0.5 }}
            color={baseColors.green}
          >
            {texts.buyYAY}
          </BuyYAYButton>
        </Flex>
      ) : (
        <Flex justifyContent="center" mb={10}>
          <Text color={baseColors.textGray} style={{ opacity: 0.5 }} fontSize="13px" marginRight="10px">
            {texts.balance}
          </Text>
          <Text fontSize="13px" style={{ opacity: 0.5 }} color={baseColors.textGray}>
            {balance}
          </Text>
        </Flex>
      )}
      {buttonLong}
    </Card>
  );
};

export default IGODetailProgressCard;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 548px;
  width: 100%;
  height: 100%;
  padding: 32px 22px;
  background: ${({ theme }) => theme.colors.bgGray};
  border-radius: 12px;
  margin: 0 auto;
`;

const FlexTop = styled(Flex)`
  justify-content: space-between;
  align-items: center;
  margin-bottom: 17px;
`;

const Slots = styled.div`
  margin-top: 11px;
  margin-bottom: 55px;
`;

const Status = styled(Text)`
  padding: 20px 0 50px;
  font-size: 15px;
  line-height: 19px;
  text-align: center;
  letter-spacing: 0.13em;
  text-transform: uppercase;
  & span {
    color: ${({ theme }) => theme.colors.green};
  }
`;

const Grid = styled.div`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(1, 1fr);
  margin-top: auto;
  margin-bottom: 14px;
  ${({ theme }) => theme.mediaQueries.sm} {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const Block = styled.div`
  margin-bottom: 16px;
  ${({ theme }) => theme.mediaQueries.sm} {
    margin-bottom: 0;
  }
`;
const BuyYAYButton = styled(Button)`
  height: fit-content;
  display: block;
  text-decoration: underline;
  border: none;
  outline: none;
  background: none;
  box-shadow: none;
  padding: 0;
  color: ${({ theme }) => theme.colors.green};
`;
