import React from "react";
import styled from "styled-components";
import { IconButton } from "../../components/Button";
import Heading from "../../components/Heading/Heading";
import { CloseIcon } from "../../components/Svg";
import { InjectedProps } from "./types";

interface Props extends InjectedProps {
  title: string;
  hideCloseButton?: boolean;
  onBack?: () => void;
  bodyPadding?: string;
}

const StyledModal = styled.div`
  background: ${({ theme }) => theme.modal.background};
  box-shadow: 0px 20px 36px -8px rgba(14, 14, 44, 0.1), 0px 1px 1px rgba(0, 0, 0, 0.05);
  border: 1px solid ${({ theme }) => theme.colors.borderColor};
  border-radius: 32px;
  width: 404px;
  z-index: ${({ theme }) => theme.zIndices.modal};
  overflow-y: auto;
  ${({ theme }) => theme.mediaQueries.xs} {
    /* width: auto; */
    width: 404px;
    /* max-width: 50%; */
  }
`;

const ModalHeader = styled.div`
  display: flex;
  align-items: center;
  align-items: center;
  padding: 27px 20px 43px 27px;
`;

const ModalTitle = styled.div`
  align-items: center;
  flex: 1;
  color: #FFFFFF;
`;

const Modal: React.FC<Props> = ({
  title,
  onDismiss,
  onBack,
  children,
  hideCloseButton = false,
}) => (
  <StyledModal>
    <ModalHeader>
      <ModalTitle>
        <Heading>{title}</Heading>
      </ModalTitle>
      {!hideCloseButton && (
        <IconButton variant="text" onClick={onDismiss} aria-label="Close the dialog">
          <CloseIcon color="#fff" />
        </IconButton>
      )}
    </ModalHeader>
    {/* <Flex flexDirection="column" p={bodyPadding}> */}
      {children}
    {/* </Flex> */}
  </StyledModal>
);

export default Modal;
