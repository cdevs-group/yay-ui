import React from "react";
import styled from "styled-components";
import { Modal } from "../Modal";
import Text from "../../components/Text/Text";
import { OneGhost } from "../../constants/images";
import { Button } from "../../components/Button";
import { Variant } from "../../components/Button/types";
import { layout, LayoutProps, space, SpaceProps } from "styled-system";

interface Props {
  title: string;
  buttonText: string;
  descriptionTop: string | React.ReactNode;
  descriptionBottom?: string | React.ReactNode;
  handleConfirm?: () => void;
  disabledButton?: boolean;
  buttonVariant?: Variant;
  img?: string;
  marginImg?: string;
  hideCloseButton?: boolean;
  onDismiss?: () => void;
  loaderButton?: boolean;
  imgProps?: ImgProps;
}

interface ImgProps extends SpaceProps, LayoutProps {}

const Wrap = styled.div`
  padding: 0 20px 26px;
`;

const Ghosts = styled.div`
  display: flex;
  justify-content: center;  
  & img {
    ${layout}
    ${space}
  }
`;

const Description = styled(Text)`
  letter-spacing: 0.05em;
  text-align: center;
`;

const Texts = styled(Text)`
  margin: 12px 0 20px;
`;

const ErrorModal: React.FC<Props> = ({
  title,
  buttonText,
  descriptionTop,
  descriptionBottom,
  handleConfirm,
  disabledButton,
  buttonVariant,
  img,
  hideCloseButton = true,
  onDismiss = () => null,
  loaderButton,
  imgProps,
}) => (
  <>
    <Modal title={title} welcome hideCloseButton={hideCloseButton} onDismiss={onDismiss} paddingTopHeader="18px">
      <Wrap>
        <Ghosts {...imgProps}>
          <img src={img || OneGhost} />
        </Ghosts>
        <Texts>
          <Description size="sm" marginBottom={15}>
            {descriptionTop}
          </Description>
          <Description size="sm">{descriptionBottom}</Description>
        </Texts>
        <Button
          width="100%"
          variant={buttonVariant || "green"}
          onClick={handleConfirm}
          disabled={disabledButton}
          spin={loaderButton}
        >
          {buttonText}
        </Button>
      </Wrap>
    </Modal>
  </>
);

export default ErrorModal;
