import styled from "styled-components";
import { InputProps, scales } from "./types";
import { space, background, boxShadow, SpaceProps, BackgroundProps, BoxShadowProps } from "styled-system";

interface StyledInputProps extends InputProps, SpaceProps, BackgroundProps, BoxShadowProps {
  placeholderOpacity?: boolean;
}

const Input = styled.input<StyledInputProps>`
  color: ${({ theme }) => theme.colors.text};
  display: block;
  font-size: 16px;
  outline: 0;
  padding: 0;
  background: none;
  border: none;
  width: 100%;
  font-weight: 500;
  font-size: 17px;
  line-height: 22px;
  letter-spacing: 0.5px;
  border-radius: 12px;
  ${background}
  ${space}
  ${boxShadow}
 
  &::placeholder {
    color: ${({ theme }) => theme.colors.text};
    opacity: ${({ placeholderOpacity }) => (placeholderOpacity ? 0.7 : 1)};
  }

  &:disabled {
    color: ${({ theme }) => theme.colors.textDisabled};
    cursor: not-allowed;
  }
`;

Input.defaultProps = {
  scale: scales.MD,
  isSuccess: false,
  isWarning: false,
};

export default Input;
