import React, { useState } from "react";
import { Card, TitleStyle, Row, TitleBlock, ValueBlock, Tooltip } from "./style";
import { IGOInfoCardProps } from "../types";
import CopyButton from "./components/CopyButton";
import styled from "styled-components";
import { Text } from "../../../components/Text";

const IGOInfoCard = ({ tokenName, address, initial, lockDuration, status, link, texts }: IGOInfoCardProps) => {
  const [isTooltipDisplayed, setIsTooltipDisplayed] = useState(false);

  return (
    <Card>
      <TitleStyle>{texts.title}</TitleStyle>
      <Row>
        <div>
          <TitleBlock>{texts.name}</TitleBlock>
          <ValueBlock>{tokenName}</ValueBlock>
        </div>
      </Row>
      <Row>
        <CopyBlock>
          <TitleBlock>{texts.address}</TitleBlock>
          <ValueBlockCopy>{address}</ValueBlockCopy>
          <CopyButton setIsTooltipDisplayed={setIsTooltipDisplayed} textCopy={address} />
          <Tooltip isTooltipDisplayed={isTooltipDisplayed}>{texts.copied}</Tooltip>
        </CopyBlock>
      </Row>
      <TitleStyle margin="40px 0 32px">{texts.liquid}</TitleStyle>
      <Row>
        <div>
          <TitleBlock>{texts.initial}</TitleBlock>
          <ValueBlock>{initial}</ValueBlock>
        </div>
      </Row>
      <Row>
        <div>
          <TitleBlock>{texts.lock}</TitleBlock>
          <ValueBlock>{lockDuration}</ValueBlock>
        </div>
      </Row>
      <Row>
        <div>
          <TitleBlock>{texts.status}</TitleBlock>
          <ValueBlock>
            {status}{" "}
            <a target="_blank" href={link}>
              ({texts.link})
            </a>
          </ValueBlock>
        </div>
      </Row>
    </Card>
  );
};

export default IGOInfoCard;

const ValueBlockCopy = styled(Text)`
  font-weight: normal;
  font-size: 15px;
  color: ${({ theme }) => theme.colors.text};
  justify-content: space-between;
  align-items: center;
  line-height: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  ${({ theme }) => theme.mediaQueries.sm} {
    font-size: 17px;
  }
`;
const CopyBlock = styled.div`
  position: relative;
  width: 100%;
  padding-right: 25px;
  & button {
    position: absolute;
    right: 0;
    bottom: 0;
  }
`;
