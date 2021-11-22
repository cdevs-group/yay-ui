import styled from "styled-components";
import Box from "../Box/Box";
import { Input } from "../Input";
import Text from "../Text/Text";
import IconButton from "../Button/IconButton";
import { BalanceInputInversionProps } from "./types";

export const SwitchUnitsButton = styled(IconButton)`
  width: auto;
`;

export const UnitContainer = styled(Text)`
  margin-right: 4px;
  color: ${({ theme }) => theme.colors.text};
  white-space: nowrap;
`;

export const StyledBalanceInput = styled(Box)<{ isWarning: BalanceInputInversionProps["isWarning"] }>`
  background-color: ${({ theme }) => theme.colors.bgOpacity};
  border: 1px solid ${({ theme, isWarning }) => theme.colors[isWarning ? "darkPink" : "bgOpacity"]};
  border-radius: 12px;
  box-shadow: ${({ theme }) => theme.colors.boxShadow};
  padding: 8px 16px;
`;

export const StyledInput = styled(Input)<{ textAlign?: string }>`
  background: transparent;
  border-radius: 0;
  box-shadow: none;
  padding-left: 0;
  padding-right: 0;
  text-align: ${({ textAlign = "left" }) => textAlign};
  border: none;
  ::placeholder {
    color: ${({ theme }) => theme.colors.text};
  }
  &:focus:not(:disabled) {
    box-shadow: none;
  }
`;
