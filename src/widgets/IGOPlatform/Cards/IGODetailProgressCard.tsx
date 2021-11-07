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

const IGODetailProgressCard: React.FC<IGODetailProgressCardProps> = ({
  checkedToggle,
  handleToggleChecked,
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
}) => {
  const buttonsList = [buttonLeft, buttonCenter, buttonRight];

  return (
    <Card>
      <FlexTop>
        <Text fontSize="17px">{texts.title}</Text>
        <div>
          <Flex alignItems="center">
            <Text fontSize="13px" mr="10px">
              {texts.whitelistToggle}
            </Text>
            <BaseToggle checked={checkedToggle} onChange={handleToggleChecked} />
            <Text fontSize="13px" ml="10px">
              {texts.saleToggle}
            </Text>
          </Flex>
        </div>
      </FlexTop>
      <ProgressWithText text={textBaseProgress} progress={baseProgress} />
      <Text fontSize="11px" lineHeight="140%" fontWeight={400} mt="10px" mb="30px" textAlign="center">
        {texts.textBottomBaseProgress}
      </Text>
      {status && <Status>{texts.status}</Status>}
      <TextWithTooltip text={texts.slotsSummary} textTooltip={texts.slotsSummaryTooltip} />
      <Slots>
        {slots.map((el) => (
          <SlotSummary text={el.text} error={el.error} circleHidden={slots?.length <= 1} />
        ))}
      </Slots>
      <TextWithTooltip text={texts.availableWhitelist} textTooltip={texts.availableWhitelistTooltip} />
      <div style={{ marginBottom: 30 }} />
      <Grid>
        {buttonsList.map((el, i) => (
          <div>
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
          </div>
        ))}
      </Grid>
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
