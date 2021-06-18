import React from "react";
import ArrowIcon from "../../ArrowIcon";
import styled from "styled-components";
import { ArrowProps } from "../../types";

const Arrow = ({ center }: ArrowProps) => (
  <ArrowWrap center={center}>
    <ArrowIcon />
  </ArrowWrap>
);

export default Arrow;

const ArrowWrap = styled.div<{ center?: boolean }>`
  width: 45px;
  height: 45px;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;

  top: ${(props) => (props.center ? "50%" : "auto")};
  left: ${(props) => (props.center ? "50%" : "auto")};
  transform: translate ${(props) => (props.center ? "(-50%,-50%)" : "0")};
  background: ${({ theme }) => theme.colors.greenGradient};
  box-shadow: ${({ theme }) => theme.colors.boxShadow2};
  border: 5px solid ${({ theme }) => theme.colors.bgGray};
  border-radius: 50px;
`;
