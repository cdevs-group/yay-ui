import React from "react";
import styled from "styled-components";
import { ToggleProps } from "../types";

const BaseToggle: React.FC<ToggleProps> = ({ checked, ...props }) => {
  return (
    <StyledToggle checked={!!checked} disabled={props.disabled}>
      <Input checked={checked} {...props} type="checkbox" />
      <Handle />
    </StyledToggle>
  );
};

export default BaseToggle;

const Handle = styled.div`
  background-color: ${({ theme }) => theme.colors.text};
  border-radius: 50%;
  cursor: pointer;
  height: 28px;
  width: 28px;
  left: 1px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  transition: left 200ms ease-in;
  z-index: 1;
  box-shadow: 0px 0.1px 0.3px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.2);
`;

const Input = styled.input`
  cursor: pointer;
  opacity: 0;
  height: 100%;
  position: absolute;
  width: 100%;
  z-index: 3;

  &:checked + ${Handle} {
    left: 21px;
  }
`;

const StyledToggle = styled.div<ToggleProps>`
  align-items: center;
  background-color: ${({ theme, checked }) => theme.colors[checked ? "green" : "bgOpacity"]};
  border-radius: 24px;
  box-shadow: ${({ theme }) => theme.shadows.inset};
  cursor: pointer;
  display: inline-flex;
  height: 30px;
  position: relative;
  transition: background-color 200ms;
  width: 50px;
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
`;
