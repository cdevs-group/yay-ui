import React from "react";
import styled from "styled-components";
import { Modal } from "../Modal";
import Text from "../../components/Text/Text";
import { GhostsIcon } from "../../constants/images";
import { Button } from "../../components/Button";

interface Props {
  title: string;
  buttonText: string;
  description: string | React.ReactNode;
  handleConfirm?: () => void;
  disabledButton?: boolean;
  errorPadding?: boolean;
  onDismiss?: () => void;
}

const Wrap = styled.div`
  padding: 0 20px 26px;
`;

const Ghosts = styled.div`
  display: flex;
  justify-content: center;
`;

const Description = styled(Text)`
  display: flex;
  justify-content: center;
  padding: 16px 26px 30px;
  letter-spacing: 0.05em;
  text-align: center;
`;
const StyledModal = styled(Modal)`
  display: flex;
  justify-content: center;
  padding: 16px 26px 30px;
  letter-spacing: 0.05em;
  text-align: center;
`;
const CongratulateModal: React.FC<Props> = ({
  title,
  buttonText,
  description,
  handleConfirm,
  disabledButton,
  onDismiss,
  ...props
}) => (
  <>
    <Modal title={title} welcome onDismiss={onDismiss} {...props}>
      <Wrap>
        <Ghosts>
          <img src={GhostsIcon} />
        </Ghosts>
        <Description size="sm">{description}</Description>
        <Button width="100%" variant="green" onClick={handleConfirm} disabled={disabledButton}>
          {buttonText}
        </Button>
      </Wrap>
    </Modal>
  </>
);

export default CongratulateModal;
