import React, { RefObject, useEffect, useRef, useState } from "react";
import { CSSTransition } from "react-transition-group";
import styled, { css, keyframes } from "styled-components";
import { Box } from "../../components/Box";
import { Button, IconButton } from "../../components/Button";
import { CloseIcon } from "../../components/Svg";
import { Winner } from "../../constants/images";

interface CollectWinningsPopupProps {
  handleOpenHistory?: () => void;
  handleClick?: () => void;
  btnText: string;
  img?: string;
  ref?: RefObject<HTMLDivElement>;
}

const bounceInKeyframe = keyframes`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  from {
    opacity: 0;
    transform: translate3d(0, 3000px, 0) scaleY(5);
  }

  60% {
    opacity: 1;
    transform: translate3d(0, -20px, 0) scaleY(0.9);
  }

  75% {
    transform: translate3d(0, 10px, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, -5px, 0) scaleY(0.985);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;

const bounceOutKeyframe = keyframes`
  20% {
    transform: translate3d(0, 10px, 0) scaleY(0.985);
  }

  40%,
  45% {
    opacity: 1;
    transform: translate3d(0, -20px, 0) scaleY(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(0, 2000px, 0) scaleY(3);
  }
`;

const bounceInAnimation = css`
  animation: ${bounceInKeyframe} 1s;
`;

const bounceOutAnimation = css`
  animation: ${bounceOutKeyframe} 1s;
`;

const Wrapper = styled.div`
  align-items: flex-start;
  bottom: 0px;
  color: #ffffff;
  display: flex;
  justify-content: flex-end;
  right: 0;
  z-index: 50;

  &.popup-enter-active {
    ${bounceInAnimation}
  }

  &.popup-enter-done {
    bottom: 0px;
  }

  &.popup-exit-done {
    bottom: -2000px;
  }

  &.popup-exit-active {
    ${bounceOutAnimation}
  }
`;

const Popup = styled.div`
  position: relative;
  display: flex;
  background: ${({ theme }) => theme.colors.green};
  border-radius: 14px;
  color: #ffffff;
  max-width: 320px;
  padding-right: 70px;
  & button {
    white-space: nowrap;
  }
`;
const Img = styled(Box)`
  position: relative;
  & img {
    position: absolute;
    max-width: none;
    left: -67px;
    top: -70px;
    pointer-events: none;
  }
`;

const CloseBtn = styled(IconButton)`
  position: absolute;
  right: 0;
`;

const CollectWinningsPopup: React.FC<CollectWinningsPopupProps> = ({
  handleOpenHistory,
  handleClick,
  btnText,
  img,
  ref,
}) => {
  return (
    <Wrapper ref={ref}>
      <Popup>
        <Button style={{ flex: 1 }} onClick={handleOpenHistory} variant="green">
          {btnText}
        </Button>{" "}
        <Img>
          <img src={img || Winner} alt="" />
        </Img>
        <CloseBtn variant="text" onClick={handleClick}>
          <CloseIcon fill="none" />
        </CloseBtn>
      </Popup>
    </Wrapper>
  );
};

export default CollectWinningsPopup;
