import React, { useState } from "react";
import styled from "styled-components";
import { BnbIcon } from "../../../../components/Svg";
import Tabs from "../../components/Tabs";
import CommitBlock from "../../../CommitBlock/CommitBlock";
import Button from "../../../Button/Button";

const AmountTitle = styled.div`
  margin-top: 32px;
  font-size: 11px;
  line-height: 14px;
  color: ${({ theme }) => theme.colors.text};
`;

const ButtonBnb = styled.div`
  margin-top: 39px;
`;

const BottomText = styled.div`
  margin-top: 20px;
  font-size: 11px;
  line-height: 14px;
  text-align: center;
  color: ${({ theme }) => theme.colors.greyText};
`;

const PositionCard: React.FC = () => {
  return (
    <div>
      <CommitBlock num="0.0" coinIcon={<BnbIcon />} coin="BNB" />
      <AmountTitle>Amount to bid </AmountTitle>
      <Tabs />
      <ButtonBnb>
        <Button variant="green" width="100%">
          Up BNB{" "}
        </Button>
      </ButtonBnb>
      <BottomText>
        You won`t be able to remove or change your <br /> position once you enter it
      </BottomText>
    </div>
  );
};
export default PositionCard;
