import React from "react";
import styled from "styled-components";
import { Text } from "../../components/Text";
import { GhostsIcon } from "../../constants/images";
import { CheckboxInput } from "../../components/CheckboxInput";
import { Flex } from "../../components/Box";
import { Button, ButtonProps } from "../../components/Button";

interface AgreeMessageProps {
  isChecked: {
    option1: boolean | any;
    option2: boolean | any;
  };
  handleChangeCheckbox: (e: any) => void;
  disabled: boolean;
  onClick: () => void | Promise<void>;
  texts: {
    title: string;
    message: string;
    option1: string;
    option2: string;
    button: string;
  };
  propsButton?: ButtonProps;
}

const AgreeMessage = ({
  isChecked,
  handleChangeCheckbox,
  disabled,
  onClick,
  texts,
  propsButton,
}: AgreeMessageProps) => {
  return (
    <Wrapper>
      <TitleText>{texts.title}</TitleText>
      <ImgBlock>
        <img src={GhostsIcon} alt="ghost" />
      </ImgBlock>
      <MessageText>{texts.message}</MessageText>
      <div>
        <Option className="option1">
          <CheckboxInput id="option1" onChange={handleChangeCheckbox} checked={isChecked.option1} name={"option1"} />
          <Label htmlFor="option1">{texts.option1}</Label>
        </Option>
        <Option className="option2">
          <CheckboxInput id="option2" onChange={handleChangeCheckbox} checked={isChecked.option2} name={"option2"} />
          <Label htmlFor="option2">{texts.option2}</Label>
        </Option>
      </div>
      <Button onClick={onClick} disabled={disabled} marginTop="70px" variant="green" width="100%" {...propsButton}>
        {texts.button}
      </Button>
    </Wrapper>
  );
};

export default AgreeMessage;

const Wrapper = styled.div`
  padding: 13px 13px 27px;
  max-width: 534px;
  max-height: 100vh;
  width: 100%;
  background: ${({ theme }) => theme.colors.bgGray};
  box-shadow: 0px 20px 36px -8px rgba(14, 14, 44, 0.1), 0px 1px 1px rgba(0, 0, 0, 0.05);
  border-radius: 15px;
  z-index: ${({ theme }) => theme.zIndices.modal};
  overflow-y: auto;
  ${({ theme }) => theme.mediaQueries.sm} {
    padding: 27px;
  }
`;
const TitleText = styled(Text)`
  font-weight: normal;
  font-size: 17px;
  line-height: 27px;
  letter-spacing: 0.5px;
  ${({ theme }) => theme.mediaQueries.sm} {
    font-size: 21px;
  }
`;
const ImgBlock = styled.div`
  text-align: center;
`;
const MessageText = styled(Text)`
  margin-bottom: 46px;
  font-weight: normal;
  font-size: 13px;
  line-height: 19px;
  text-align: center;
  letter-spacing: 0.05em;
  ${({ theme }) => theme.mediaQueries.sm} {
    font-size: 17px;
  }
`;

const Label = styled.label`
  margin-left: 8px;
  font-weight: normal;
  font-size: 11px;
  line-height: 16px;
  letter-spacing: 0.05em;
  color: ${({ theme }) => theme.colors.text};
  cursor: pointer;
  ${({ theme }) => theme.mediaQueries.sm} {
    margin-left: 22px;
    font-size: 13px;
  }
`;

const Option = styled(Flex)`
  margin-top: 32px;
  padding-right: 20px;
  & input {
    flex: none;
    flex-shrink: 0;
  }
  ${({ theme }) => theme.mediaQueries.sm} {
    margin-top: 22px;
    padding-right: 0;
  }
`;
