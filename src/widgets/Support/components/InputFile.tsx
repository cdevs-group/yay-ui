import React, { useState } from "react";
import styled from "styled-components";
import { TitleStyle, Wrapper } from "./styles";
import { Text } from "../../../components/Text";
import { Flex } from "../../../components/Box";
import { baseColors } from "../../../theme/colors";
import { CloudIcon } from "../../../components/Svg";

const InputFile = ({
  margin,
  title,
  placeholder,
  onChange,
  name,
  inputError,
}: {
  onChange: any;
  name: string;
  margin?: string;
  title: string;
  placeholder: string;
  inputError?: string;
}) => {
  const [imgFile, setImgFile] = useState(null);
  return (
    <Wrapper margin={margin}>
      <TitleStyle>{title}</TitleStyle>
      <InputWrapper>
        {imgFile && (
          <Image>
            <img src={imgFile} />
          </Image>
        )}
        <Input
          accept=".png, .jpeg, .jpg"
          onChange={(e: any) => {
            const fReader = new FileReader();
            fReader.readAsDataURL(e.target.files[0]);
            fReader.onloadend = function (event: any) {
              setImgFile(event.target.result);
            };
            onChange(e);
          }}
          name={name}
          type="file"
        />
        <TextStyle upload={!!imgFile}>{placeholder}</TextStyle>
        <Icon>
          <CloudIcon />
        </Icon>
      </InputWrapper>
      {inputError && (
        <TextStyleError color={baseColors.darkPink} fontSize="13px">
          {inputError}
        </TextStyleError>
      )}
    </Wrapper>
  );
};

export default InputFile;

const InputWrapper = styled(Flex)`
  align-items: center;
  height: 62px;
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
const TextStyle = styled.div<{ upload: boolean }>`
  margin-right: auto;
  font-weight: normal;
  font-size: 15px;
  line-height: 19px;
  letter-spacing: 0.5px;
  color: ${({ theme, upload }) => (upload ? theme.colors.green : theme.colors.text)};
  opacity: ${({ upload }) => !upload && 0.2};
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
const TextStyleError = styled(Text)`
  position: absolute;
  bottom: -25px;
`;
const Image = styled(Flex)`
  margin-right: 10px;
  align-items: center;
  width: 35px;
  height: 35px;
  & img {
    width: 100%;
  }
`;
