import React, { RefObject } from "react";
import styled, { css, keyframes } from "styled-components";
import { Box } from "../../components/Box";
import { Button, IconButton } from "../../components/Button";
import { Text } from "../../components/Text";
import { Gift } from "../../constants/images";

interface GiftPopupProps {
  handleOpenForm?: () => void;
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

const StyledButton = styled(Button)`
  position: relative;
  display: flex;
  justify-content: flex-start;
  border-radius: 14px;
  max-width: 394px;
  width: 100%;
  height: 92px;
  padding: 31px;
  white-space: nowrap;
  background: ${({ theme }) => theme.colors.yellowGradient3};
  & img {
    position: relative;
    max-width: none;
    margin: 0 10px 0 -16px;
    left: 0px;
    bottom: 16px;
    pointer-events: none;    
  }
`;

const GiftPopup: React.FC<GiftPopupProps> = ({
  handleOpenForm,
  btnText,
  img,
  ref,
}) => {
  return (
    <Wrapper ref={ref}>
        <StyledButton style={{ flex: 1 }} onClick={handleOpenForm} width="100%">
          <img src={img || Gift} alt="" />
          <Text fontSize="21px">{btnText}</Text>
        </StyledButton>              
    </Wrapper>
  );
};

export default GiftPopup;
