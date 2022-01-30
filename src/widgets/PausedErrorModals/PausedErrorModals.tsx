import React from "react";
import styled from "styled-components";
import { Modal } from "../Modal";
import Text from "../../components/Text/Text";
import { OneGhost } from "../../constants/images";
import { Button } from "../../components/Button";
import { Variant } from "../../components/Button/types";

interface Props {
  title: string;
  buttonText: string;
  descriptionTop: string;
  descriptionBottom?: string;
  handleConfirm?: () => void;
  disabledButton?: boolean;
  errorPadding?: boolean;
  buttonVariant?: Variant;
  img?: string;
  marginImg?: string;
}

const Wrap = styled.div`
  padding: 0 20px 26px;
`;

const Ghosts = styled.div<{ marginImg?: string }>`
  margin: ${({ marginImg }) => marginImg || "0"};
  display: flex;
  justify-content: center;
`;

const Description = styled(Text)`
  display: flex;
  justify-content: center;
  padding: 16px 26px 30px;
  letter-spacing: 0.05em;
  text-align: center;

  &.errorPadding {
    padding: 20px 43px 45px;
  }
`;

const PausedErrorModals: React.FC<Props> = ({
  title,
  buttonText,
  descriptionTop,
  descriptionBottom,
  handleConfirm,
  disabledButton,
  errorPadding,
  buttonVariant,
  img,
  marginImg,
}) => (
  <>
    <Modal title={title} welcome hideCloseButton>
      <Wrap>
        <Ghosts marginImg={marginImg}>
          <img src={img || OneGhost} />
        </Ghosts>
        <Description size="sm" className={errorPadding ? "errorPadding" : ""}>
          {descriptionTop}
          <br />
          <br />
          {descriptionBottom}
        </Description>
        <Button width="100%" variant={buttonVariant || "green"} onClick={handleConfirm} disabled={disabledButton}>
          {buttonText}
        </Button>
      </Wrap>
    </Modal>
  </>
);

export default PausedErrorModals;
