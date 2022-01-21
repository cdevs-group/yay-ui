import React, { useState } from "react";
import styled from "styled-components";
import { transparentize } from "polished";
import { Modal } from "../Modal";
import { Text } from "../../components/Text";
import { CompleteIcon, SHARE_ICON } from "../..";
import { CopyToClipboard } from "../../components/CopyToClipboard";

interface Props {
  onDismiss?: () => void;
  texts: {
    title: string;
    copyLink: string;
  };
  buttonsSocial?: React.ReactNode;
  copyLink: string;
}

const Wrap = styled.div`
  text-align: center;
  padding: 20px 14px;
  min-width: 303px;
  ${({ theme }) => theme.mediaQueries.md} {
    padding: 40px 20px 55px 27px;
  }
`;

export const Button = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 14px;
  padding: 6px 6px 6px 27px;
  width: 100%;
  background: ${({ theme }) => theme.colors.buttonBg};
  border: 0;
  border-radius: 12px;
  box-shadow: inset 0px 4px 4px ${({ theme }) => theme.colors.buttonShadow};
  cursor: pointer;
  font-family: inherit;
  font-size: 15px;
  letter-spacing: 0.03em;
  line-height: 19px;
  outline: 0;
  transition: background-color 0.2s;
  color: ${({ theme }) => theme.colors.text};
`;

const ImgWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 38px;
  height: 38px;
  border-radius: 9px;
  background: ${({ theme }) => transparentize(0.95, theme.colors.text)};
`;

const ShareModal: React.FC<Props> = ({ texts, copyLink, buttonsSocial, onDismiss = () => null }) => {
  const [isCopiedDisplayed, setIsCopiedDisplayed] = useState(false);
  return (
    <Modal title={texts.title} onDismiss={onDismiss} welcome>
      <Wrap>
        {buttonsSocial}
        <CopyToClipboard
          toCopy={copyLink}
          textCopied=""
          icon={<></>}
          isTooltip={isCopiedDisplayed}
          setIsTooltip={setIsCopiedDisplayed}
          width="100%"
          propsChildren={{
            width: "100%",
          }}
        >
          <Button>
            <Text fontWeight={500} color="text" mr="16px" fontSize="15px">
              {texts.copyLink}
            </Text>
            <ImgWrap>{isCopiedDisplayed ? <CompleteIcon /> : <img src={SHARE_ICON} />}</ImgWrap>
          </Button>
        </CopyToClipboard>
      </Wrap>
    </Modal>
  );
};

export default ShareModal;
