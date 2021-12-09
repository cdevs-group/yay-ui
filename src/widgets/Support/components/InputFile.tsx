import React from "react";
import styled from "styled-components";
import { TitleStyle, Wrapper } from "./styles";
import { Text } from "../../../components/Text";
import { Flex } from "../../../components/Box";
import { baseColors, lightColors } from "../../../theme/colors";
import { CloudIcon } from "../../../components/Svg";

const InputFile = ({
  margin,
  title,
  placeholder,
  onChange,
  name,
}: {
  onChange: any;
  name: string;
  margin?: string;
  title: string;
  placeholder: string;
}) => {
  return (
    <Wrapper margin={margin}>
      <TitleStyle>{title}</TitleStyle>
      <InputWrapper>
        <Input onChange={onChange} name={name} type="file" />
        <TextStyle>{placeholder}</TextStyle>
        <Icon>
          <CloudIcon />
        </Icon>
      </InputWrapper>
    </Wrapper>
  );
};

export default InputFile;

const InputWrapper = styled(Flex)`
  align-items: center;
  justify-content: space-between;
  position: relative;
  padding: 16px 30px;
  border: 1.5px dashed ${({ theme }) => theme.colors.green};
  box-sizing: border-box;
  box-shadow: ${({ theme }) => theme.colors.boxShadow4};
  border-radius: 12px;
  cursor: pointer;
`;
const Input = styled.input`
  padding: 0;
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  cursor: pointer;
  opacity: 0;
`;
const TextStyle = styled(Text)`
  font-weight: normal;
  font-size: 15px;
  line-height: 19px;
  letter-spacing: 0.5px;
  color: ${({ theme }) => theme.colors.text};
  opacity: 0.2;
  text-shadow: ${({ theme }) => theme.colors.textShadow3};
  pointer-events: none;
`;
const Icon = styled(Flex)`
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  background: ${({ theme }) => theme.colors.whiteRgba};
  border-radius: 7px;
  pointer-events: none;
`;
