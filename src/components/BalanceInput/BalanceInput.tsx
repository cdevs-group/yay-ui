import React from "react";
import styled from "styled-components";
import { space } from "styled-system";
import { Input } from "../Input";
import { BnbIcon } from "../Svg";
import { BalanceInputProps } from "./types";
import { Text } from "../Text";

const BalanceInput: React.FC<BalanceInputProps> = ({
  value,
  placeholder = "0.0",
  onUserInput,
  inputProps,
  isWarning = false,
  decimals = 18,
  texts,
  handleButtonToMax,
  icon,
  disabled,
  ...props
}) => {
  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.currentTarget.validity.valid) {
      onUserInput(e.currentTarget.value.replace(/,/g, "."));
    }
  };

  return (
    <InputWrap disabled={disabled}  {...props}>
      <LeftBlock>
        <TitleInput>{texts?.commit || "Commit"}</TitleInput>
        <Input
          className={isWarning ? "warning" : ""}
          pattern={`^[0-9]*[.,]?[0-9]{0,${decimals}}$`}
          inputMode="decimal"
          min="0"
          value={value}
          onChange={handleOnChange}
          placeholder={placeholder}
          {...inputProps}
        />
      </LeftBlock>
      <RightBlock>
        {handleButtonToMax ? (
          <ButtonToMax as="button" onClick={handleButtonToMax}>
            MAX
          </ButtonToMax>
        ) : null}
        <InputIcon>
          {icon || <BnbIcon />}
          {texts?.currency || "BNB"}
        </InputIcon>
      </RightBlock>
    </InputWrap>
  );
};

export default BalanceInput;

const InputWrap = styled.div<{disabled?: boolean}>`
  opacity: ${({ disabled }) => disabled ? 0.5 : 1};
  pointer-events: ${({ disabled }) => disabled ? 'none' : 'auto'};
  position: relative;
  padding: 17px 20px 20px 20px;
  background: ${({ theme }) => theme.colors.buttonBg};
  box-shadow: ${({ theme }) => theme.colors.boxShadow4};
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${space}
`;
const TitleInput = styled.div`
  margin-bottom: 15px;
  font-size: 15px;
  line-height: 19px;
  letter-spacing: 0.5px;
  color: ${({ theme }) => theme.colors.greyText};
`;
const InputIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 7px 15px;
  background: ${({ theme }) => theme.colors.bgOpacitY3};
  border-radius: 12px;
  font-size: 11px;
  line-height: 14px;
  letter-spacing: 0.5px;
  color: ${({ theme }) => theme.colors.text};
  & svg {
    margin-bottom: 7px;
  }
  & div {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 29px;
    height: 29px;
    border-radius: 7px;
    background: ${({ theme }) => theme.colors.blueGradient};
    margin-bottom: 7px;
  }
`;
const ButtonToMax = styled(Text)`
  padding: 0;
  margin-right: 20px;
  margin-top: 20px;
  transform: translateY(-50%);
  border: none;
  background: none;
  text-decoration: underline;
  cursor: pointer;
  transition: 0.3s;
  color: ${({ theme }) => theme.colors.textGray};
  &:hover {
    color: ${({ theme }) => theme.colors.text};
    transition: 0.3s;
  }
`;
const RightBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
const LeftBlock = styled.div``;
