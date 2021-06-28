import React from "react";
import styled from "styled-components";
import { Modal } from "../Modal";
import Text from "../../components/Text/Text";
import { GhostsIcon } from "../../constants/images";
import { CheckboxInput } from "../../components/CheckboxInput";
import { Button } from "../../components/Button";

interface Props {
  onDismiss?: () => void;
  title: string;
  textCheckbox1: string;
  textCheckbox2: string;
  continueText: string;
  description: string;
  handleConfirm?: () => void;
  disabledButton?: boolean;
  handleChangeCheckbox1?: () => void;
  handleChangeCheckbox2?: () => void;
  checkedCheckbox1?: boolean;
  checkedCheckbox2?: boolean;
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
  text-align: center;
`;

const CheckboxInputBlock = styled.div`
  cursor: pointer;
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

const WelcomeModal: React.FC<Props> = ({
  onDismiss = () => null,
  title,
  textCheckbox1,
  textCheckbox2,
  continueText,
  description,
  handleConfirm,
  disabledButton,
  handleChangeCheckbox1,
  handleChangeCheckbox2,
  checkedCheckbox1,
  checkedCheckbox2,
}) => (
  <>
    <Modal title={title} onDismiss={onDismiss} welcome>
      <Wrap>
        <Ghosts>
          <img src={GhostsIcon} />
        </Ghosts>
        <Beta>{description}</Beta>
        <CheckboxInputBlock className="top">
          <CheckboxInput id="top" onChange={handleChangeCheckbox1} checked={checkedCheckbox1} />
          <Label htmlFor="top">{textCheckbox1}</Label>
        </CheckboxInputBlock>
        <CheckboxInputBlock className="bottom">
          <CheckboxInput id="bottom" onChange={handleChangeCheckbox2} checked={checkedCheckbox2} />
          <Label htmlFor="bottom">{textCheckbox2}</Label>
        </CheckboxInputBlock>
        <Button width="100%" variant="green" onClick={handleConfirm} disabled={disabledButton}>
          {continueText}
        </Button>
      </Wrap>
    </Modal>
  </>
);

export default WelcomeModal;
