import React, { ElementType } from "react";
import styled from "styled-components";
import { Text } from "../../../components/Text";
import { Button, ButtonProps } from "../../../components/Button";
import { Flex } from "../../../components/Box";
import { CloseIcon } from "../../../components/Svg";

interface ModalInstakeProps {
  open: boolean;
  handleClose: () => void;
  handleUnstake: () => void | Promise<void>;
  img?: string;
  textsUnstake: string;
  textClose: string;
  textContent: string;
  unstakeButtonProps?: ButtonProps;
}

const ModalUnstake = ({
  open,
  handleClose,
  handleUnstake,
  img,
  textsUnstake,
  textClose,
  unstakeButtonProps,
  textContent,
}: ModalInstakeProps) => {
  return (
    <Wrapper open={open}>
      <Close onClick={handleClose}>
        <CloseIcon />
      </Close>
      <Img>
        <img src={img} />
      </Img>
      <TextStyle>{textContent}</TextStyle>
      <Buttons>
        <ButtonUnstake variant="option" onClick={handleUnstake} {...unstakeButtonProps}>
          {textsUnstake}
        </ButtonUnstake>
        <ButtonClose variant="green" onClick={handleClose}>
          {textClose}
        </ButtonClose>
      </Buttons>
    </Wrapper>
  );
};

export default ModalUnstake;

const Wrapper = styled.div<{ open: boolean }>`
  width: 320px;
  max-height: 100vh;
  background: ${({ theme }) => theme.colors.bgGray};
  box-shadow: 0px 20px 36px -8px rgba(14, 14, 44, 0.1), 0px 1px 1px rgba(0, 0, 0, 0.05);
  border-radius: 15px;
  z-index: ${({ theme }) => theme.zIndices.modal};
  overflow-y: auto;
  overflow-x: hidden;
  display: ${({ open }) => (open ? "block" : "none")};
  position: relative;
  //width: 320px;
  padding: 12px 15px 25px;
  background: ${({ theme }) => theme.colors.bgGray};
  //border-radius: 15px;
  //z-index: 16;
  pointer-events: all;
  ${({ theme }) => theme.mediaQueries.sm} {
    padding: 26px 50px;
    width: 404px;
  }
`;
const Img = styled.div`
  height: 230px;
  & img {
    position: absolute;
    transform: translate(-70px, -70px);
    pointer-events: none;
  }
`;
const TextStyle = styled(Text)`
  text-align: center;
`;
const Close = styled(Button)`
  position: absolute;
  right: 10px;
  top: 10px;
  background: none;
  box-shadow: none;
  padding: 0;
  cursor: pointer;
  & svg {
    pointer-events: none;
  }
  ${({ theme }) => theme.mediaQueries.sm} {
    right: 20px;
    top: 20px;
  }
`;
const Buttons = styled(Flex)`
  margin-top: 20px;
  padding: 0 10px;
  ${({ theme }) => theme.mediaQueries.sm} {
    margin-top: 35px;
  }
`;
const ButtonUnstake = styled(Button)<ButtonProps<ElementType>>`
  width: 100%;
  margin-right: 7px;
`;
const ButtonClose = styled(Button)`
  width: 100%;
  margin-left: 7px;
`;
