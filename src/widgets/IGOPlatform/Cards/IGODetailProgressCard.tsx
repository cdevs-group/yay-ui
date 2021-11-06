import React from "react";
import styled from "styled-components";
import { Text } from "../../../components/Text";
import { Flex } from "../../../components/Box";
import { BaseToggle } from "../../../components/Toggle";
import ProgressWithText from "../../../components/Progress/ProgressWithText";
import { IGODetailProgressCardProps } from "../types";
import TextWithTooltip from "./components/TextWithTooltip";
import SlotSummary from "./components/SlotSummary";

const IGODetailProgressCard: React.FC<IGODetailProgressCardProps> = ({
  checkedToggle,
  handleToggleChecked,
  textBaseProgress,
  baseProgress,
  texts,
  slots,
}) => {
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
      <Text fontSize="11px" lineHeight="140%" fontWeight={400} mt="10px" textAlign="center">
        {texts.textBottomBaseProgress}
      </Text>
      <TextWithTooltip text={texts.slotsSummary} textTooltip={texts.slotsSummaryTooltip} />
      <Slots>
        {slots.map((el) => (
          <SlotSummary text={el.text} error={el.error} circleHidden={slots?.length <= 1} />
        ))}
      </Slots>
      <TextWithTooltip text={texts.availableWhitelist} textTooltip={texts.availableWhitelistTooltip} />
    </Card>
  );
};

export default IGODetailProgressCard;

const Card = styled.div`
  max-width: 548px;
  padding: 32px 22px;
  background: ${({ theme }) => theme.colors.bgGray};
  border-radius: 12px;
`;

const FlexTop = styled(Flex)`
  justify-content: space-between;
  align-items: center;
  margin-bottom: 17px;
`;

const Slots = styled.div`
  margin-top: 11px;
`;
