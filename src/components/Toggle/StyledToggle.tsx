import styled from "styled-components";
import { scales } from "./types";
import { ToggleProps, HandleProps, InputProps, ScaleKeys } from "./types";

const scaleKeyValues = {
  sm: {
    handleHeight: "28px",
    handleWidth: "28px",
    handleLeft: "1px",
    handleTop: "1px",
    checkedLeft: "calc(100% - 28px)",
    toggleHeight: "30px",
    toggleWidth: "50px",
  },
  md: {
    handleHeight: "28px",
    handleWidth: "28px",
    handleLeft: "1px",
    handleTop: "1px",
    checkedLeft: "calc(100% - 28px)",
    toggleHeight: "30px",
    toggleWidth: "50px",
  },
};

const getScale =
  (property: ScaleKeys) =>
  ({ scale = scales.MD }: ToggleProps) => {
    return scaleKeyValues[scale][property];
  };

export const Handle = styled.div<HandleProps>`
  background-color: ${({ theme }) => theme.colors.text};
  border-radius: 50%;
  cursor: pointer;
  height: ${getScale("handleHeight")};
  left: ${getScale("handleLeft")};
  position: absolute;
  top: ${getScale("handleTop")};
  transition: left 200ms ease-in;
  width: ${getScale("handleWidth")};
  z-index: 1;
`;

export const Input = styled.input<InputProps>`
  cursor: pointer;
  opacity: 0;
  height: 100%;
  position: absolute;
  width: 100%;
  z-index: 3;

  &:checked + ${Handle} {
    left: ${getScale("checkedLeft")};
  }
  //
  // &:focus + ${Handle} {
  //   box-shadow: ${({ theme }) => theme.shadows.focus};
  // }
  //
  // &:hover + ${Handle}:not(:disabled):not(:checked) {
  //   box-shadow: ${({ theme }) => theme.shadows.focus};
  // }
`;

const StyledToggle = styled.div<ToggleProps>`
  align-items: center;
  background-color: ${({ theme, checked }) => (checked ? theme.colors.green : theme.colors.buttonBg)};
  border-radius: 24px;
  box-shadow: ${({ theme }) => theme.shadows.inset};
  cursor: pointer;
  display: inline-flex;
  height: ${getScale("toggleHeight")};
  position: relative;
  transition: background-color 200ms;
  width: ${getScale("toggleWidth")};
`;

export default StyledToggle;
