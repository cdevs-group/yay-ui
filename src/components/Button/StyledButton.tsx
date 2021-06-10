import styled, { DefaultTheme } from "styled-components";
import { space, layout, variant } from "styled-system";
import { scaleVariants, styleVariants } from "./theme";
import { BaseButtonProps } from "./types";

interface ThemedButtonProps extends BaseButtonProps {
  theme: DefaultTheme;
}

const getDisabledStyles = ({ isLoading, theme }: ThemedButtonProps) => {
  if (isLoading === true) {
    return `
      &:disabled,
      &.pancake-button--disabled {
        cursor: not-allowed;
      }
    `;
  }
  // background-color: ${theme.colors.backgroundDisabled};
  // border-color: ${theme.colors.backgroundDisabled};

  return `
    &:disabled,
    &.pancake-button--disabled {
      box-shadow: none;
      opacity:.2;
      color: ${theme.colors.text};
      cursor: not-allowed;
    }
  `;
};


/**
 * This is to get around an issue where if you use a Link component
 * React will throw a invalid DOM attribute error
 * @see https://github.com/styled-components/styled-components/issues/135
 */
interface TransientButtonProps extends ThemedButtonProps {
  $isLoading?: boolean;
}

const getOpacity = ({ $isLoading = false }: TransientButtonProps) => {
  return $isLoading ? ".5" : "1";
};

const StyledButton = styled.button<BaseButtonProps>`
  align-items: center;
  border: 0;
  border-radius: 12px;
  box-shadow: 0px -1px 0px 0px rgba(14, 14, 44, 0.4) inset;
  cursor: pointer;
  display: inline-flex;
  font-family: inherit;
  font-size: 16px;
  font-weight: 600;
  justify-content: center;
  letter-spacing: 0.03em;
  line-height: 1;
  opacity: ${getOpacity};
  outline: 0;
  transition:  0.2s;

  &:hover:not(:disabled):not(.pancake-button--disabled):not(.pancake-button--disabled):not(:active) {
     /* ; */
     box-shadow: ${({variant})=>variant==='green'?'0px 0px 29px #2CB021':variant==='pink'?'0px 0px 20px rgba(255, 97, 97, 0.38)':'none'};
  }

  &:active:not(:disabled):not(.pancake-button--disabled):not(.pancake-button--disabled) {
    /* box-shadow: 0px 0px 29px #2CB021 */
  }

  ${getDisabledStyles}
  ${variant({
  prop: "scale",
  variants: scaleVariants,
})}
  ${variant({
  variants: styleVariants,
})}
  ${layout}
  ${space}
`;

export default StyledButton;
