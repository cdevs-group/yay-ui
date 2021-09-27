import React from "react";
import styled from "styled-components";
import Text from "../Text/Text";
import { CloseIcon, ArrowIcon, GreenArrow } from "../Svg";
import { AlertProps } from "./types";
import { Flex } from "../Box";
import { Button } from "../Button";

const StyledAlert = styled.div`
  width: 100%;
  max-width: 367px;
  position: relative;
  z-index: 5;
  transition: 0.3s ease;
  padding: 15px 60px 15px 23px;
  color: ${({ theme }) => theme.colors.text};
  background: ${({ theme }) => theme.colors.bgOpacitY3};
  overflow: hidden;
  border-radius: 12px;
  //&:after{
  //  position: absolute;
  //  top: 0;
  //  left: 0;
  //  width: 100%;
  //  height: 100%;
  //  display: block;
  //  content:'';
  //  border-radius: 12px;
  //  filter: blur(10px);
  //  -webkit-filter: blur(10px);
  backdrop-filter: blur(10px);
  //  z-index: -1;
  //}
`;

const ButtonClose = styled(Button)`
  position: absolute;
  padding: 0;
  background: none;
  border: none;
  top: 4px;
  right: 4px;
  cursor: pointer;
  box-shadow: none;
  &:disabled {
    cursor: default;
  }
`;

const ButtonNext = styled(Button)`
  display: flex;
  align-items: center;
  margin-top: 10px;
  padding: 0;
  border: none;
  box-shadow: none;
  background: none;
  color: ${({ theme }) => theme.colors.green};
  font-size: 14px;
  line-height: 18px;
  cursor: pointer;
  & svg {
    transform: rotate(180deg);
    margin-left: 10px;
  }
`;

const AlertBlur: React.FC<AlertProps> = ({ handleClose, buttonText, title, children, variant, onClick }) => {
  return (
    <StyledAlert>
      <div>
        <Flex justifyContent="space-between">
          <Text fontWeight={600} mb="7px">
            {title}
          </Text>
          <ButtonClose onClick={handleClose}>
            <CloseIcon fill="none" />
          </ButtonClose>
        </Flex>
        <div>{children}</div>
        <ButtonNext onClick={onClick}>
          {buttonText}
          <GreenArrow color="#4BE43E" />
        </ButtonNext>
      </div>
    </StyledAlert>
  );
};

export default AlertBlur;
