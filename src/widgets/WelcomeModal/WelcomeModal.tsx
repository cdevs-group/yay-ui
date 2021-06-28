import React from "react";
import styled from "styled-components";
import { Modal } from "../Modal";
import Text from "../../components/Text/Text";
import { GhostsIcon } from "../../constants/images";
import { CheckboxInput } from "../../components/CheckboxInput";
import { Button } from "../../components/Button";
import BottomSlider from "../../components/CardsBottomSlider/BottomSlider";

interface Props {
  onDismiss?: () => void;
}

const Wrap = styled.div`
  padding: 0 20px 26px;
`;

const Ghosts = styled.div`
  display: flex;
  justify-content: center;
`;

const Beta = styled(Text)`
  display: flex;
  justify-content: center;
  letter-spacing: 0.05em;
`;

const CheckboxInputBlock = styled.div`
  &.top {
    display: grid;
    grid-template-columns: 1fr 9fr;
    margin-top: 37px;
  }
  &.bottom {
    display: grid;
    grid-template-columns: 1fr 9fr;
    margin: 22px 0 38px;
  }
`;

const Label = styled.label`
  margin-left: 22px;
  font-weight: normal;
  font-size: 13px;
  line-height: 16px;
  letter-spacing: 0.05em;
  color: ${({ theme }) => theme.colors.text};
`;

const WelcomeModal: React.FC<Props> = ({ onDismiss = () => null }) => (
  <>
    <Modal title="Welcome" onDismiss={onDismiss} welcome>
      <Wrap>
        <Ghosts>
          <img src={GhostsIcon} />
        </Ghosts>
        <Beta>
          This product is in beta. Once you enter a <br /> position, you cannot cancel or adjust it.{" "}
        </Beta>
        <CheckboxInputBlock className="top">
          <CheckboxInput id="top" />
          <Label htmlFor="top">
            I understand that this product is still in beta. I am participating at my own risk.
          </Label>
        </CheckboxInputBlock>
        <CheckboxInputBlock className="bottom">
          <CheckboxInput id="bottom" />
          <Label htmlFor="bottom">
            I understand that I am using this product at my own risk. Any losses incurred due to my actions are my own
            responsibillity.
          </Label>
        </CheckboxInputBlock>
        <Button width="100%" variant="green">
          Continue
        </Button>
      </Wrap>
    </Modal>
    {/* <BottomSlider/> */}
  </>
);

export default WelcomeModal;
