import React from "react";
import styled from "styled-components";
import { Button, IconButton } from "../../../../components/Button";
import { Text } from "../../../../components/Text";
import { CurrencySearchModalProps, CurrencyModalView } from "./types";
import { ArrowLeft, CloseIcon } from "../../../../components/Svg";

const CurrencySearchModal: React.FC<CurrencySearchModalProps> = ({
  onDismiss = () => null,
  config,
  modalView,
  setModalView,
  texts,
  currencySearchComponent,
  importTokenComponent,
  importListComponent,
  manageComponent,
  importToken,
  importList,
  listURL,
}) => {
  return (
    <div>
      <Overlay />
      <StyledModal>
        <ModalHeader>
          <ModalTitle>
            {config[modalView].onBack && (
              <IconButton variant="text" onClick={config[modalView].onBack} aria-label="Close the dialog">
                <ArrowLeft />
              </IconButton>
            )}
            <Text fontSize="21px" letterSpacing="0.5px">
              {config[modalView].title}
            </Text>
          </ModalTitle>
          <IconButton variant="text" onClick={onDismiss} aria-label="Close the dialog">
            <CloseIcon />
          </IconButton>
        </ModalHeader>
        <StyledModalBody>
          {modalView === CurrencyModalView.search
            ? currencySearchComponent
            : modalView === CurrencyModalView.importToken && importToken
            ? importTokenComponent
            : modalView === CurrencyModalView.importList && importList && listURL
            ? importListComponent
            : modalView === CurrencyModalView.manage
            ? manageComponent
            : ""}
          {modalView === CurrencyModalView.search && (
            <Footer>
              <Button
                scale="sm"
                variant="text"
                onClick={() => setModalView(CurrencyModalView.manage)}
                className="list-token-manage-button"
                fontSize="15px"
                letterSpacing="0.05em"
              >
                {texts.manageTokens}
              </Button>
            </Footer>
          )}
        </StyledModalBody>
      </StyledModal>
    </div>
  );
};

export default CurrencySearchModal;

const Footer = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.background};
  text-align: center;
`;

const StyledModalBody = styled.div`
  position: relative;
  padding: 24px;
  overflow-y: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const StyledModal = styled.div`
  max-width: 404px;
  max-height: 100vh;
  min-width: 303px;
  width: 100%;
  background: ${({ theme }) => theme.colors.bgGray};
  box-shadow: 0px 20px 36px -8px rgba(14, 14, 44, 0.1), 0px 1px 1px rgba(0, 0, 0, 0.05);
  border-radius: 15px;
  z-index: ${({ theme }) => theme.zIndices.modal};
  overflow-y: auto;
  ${({ theme }) => theme.mediaQueries.xs} {
    min-width: 360px;
    width: 100%;
  }
  ${({ theme }) => theme.mediaQueries.sm} {
    min-width: 404px;
    width: 100%;
  }
`;

const ModalHeader = styled.div<{ paddingTopHeader?: string; background?: string }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: ${({ background }) => background || "transparent"};
  padding: ${({ paddingTopHeader }) => ` ${paddingTopHeader || "20px"} 14px 24px`};
  padding-bottom: 0;
  ${({ theme }) => theme.mediaQueries.md} {
    padding: ${({ paddingTopHeader }) => ` ${paddingTopHeader || "27px"} 20px 40px 27px`};
    padding-bottom: 0;
  }
`;

const ModalTitle = styled.div`
  align-items: center;
  flex: 1;
  color: ${({ theme }) => theme.colors.text};
`;

const Overlay = styled.div`
  pointer-events: none;
  display: block;
  background: ${({ theme }) => theme.colors.overlayBg};
  position: fixed;
  z-index: -1;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
`;
