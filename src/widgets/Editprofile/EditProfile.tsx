import React from "react";
import styled from "styled-components";
import { Text } from "../../components/Text";
import { Button } from "../../components/Button";
import { LOGO_ROUND } from "../../constants/images";
import Input from "./Components/Input";
import { IEditProfileProps } from "./types";

const EditProfile = ({
  logo,
  inputName,
  texts,
  inputValue,
  inputHandle,
  avatarHandle,
  updateHandle,
}: IEditProfileProps) => {
  return (
    <Wrapper>
      <Title>{texts.title}</Title>
      <Description>{texts.description}</Description>
      <AvatarBlock>
        <Avatar onClick={avatarHandle}>
          <img src={logo || LOGO_ROUND} alt="logo" />
        </Avatar>
        <AvatarContent>
          <BlockTitle>{texts.avatarTitle}</BlockTitle>
          <BlockDescription>{texts.avatarDescription}</BlockDescription>
          <AvatarButton onClick={avatarHandle} mt={24} width="100%" variant="green">
            {texts.avatarButton}
          </AvatarButton>
        </AvatarContent>
      </AvatarBlock>
      <NameBlock>
        <BlockTitle mt={0}>{texts.nameTitle}</BlockTitle>
        <BlockDescriptionName>{texts.nameDescription}</BlockDescriptionName>
        <Input
          name={inputName}
          width="100%"
          value={inputValue}
          onChange={inputHandle}
          placeholder={texts.inputPlaceholder}
        />
      </NameBlock>
      <UpdateButton onClick={updateHandle} width="100%" variant="green">
        {texts.uploadButton}
      </UpdateButton>
    </Wrapper>
  );
};

export default EditProfile;

const Wrapper = styled.div`
  max-width: 531px;
  margin: 0 auto;
  text-align: center;
`;
const Title = styled(Text)`
  font-size: 32px;
  line-height: 121.8%;
  letter-spacing: 0.01em;
  ${({ theme }) => theme.mediaQueries.md} {
    font-size: 42px;
  }
`;
const Description = styled(Text)`
  margin-top: 18px;
  font-size: 15px;
  line-height: 19px;
  letter-spacing: 0.17em;
  ${({ theme }) => theme.mediaQueries.md} {
    margin-top: 30px;
  }
`;
const AvatarBlock = styled.div`
  margin-top: 65px;
  padding: 0 15px 24px;
  background: ${({ theme }) => theme.colors.bgGray};
  border-radius: 10px;
  ${({ theme }) => theme.mediaQueries.md} {
    padding: 0 39px 39px;
  }
`;
const AvatarContent = styled.div`
  max-width: 358px;
  margin: 0 auto;
`;
const Avatar = styled.button`
  padding: 0;
  margin: 0 auto;
  position: relative;
  top: -30px;
  width: 130px;
  height: 130px;
  border-radius: 50%;
  filter: ${({ theme }) => theme.colors.boxShadow13};
  border: 5px solid ${({ theme }) => theme.colors.bgGray};
  overflow: hidden;
  outline: none;
  cursor: pointer;
  & img {
    width: 100%;
    height: 100%;
  }
`;
const BlockTitle = styled(Text)`
  font-size: 15px;
  line-height: 19px;
  letter-spacing: 0.05em;
  ${({ theme }) => theme.mediaQueries.md} {
    font-size: 18px;
    line-height: 23px;
  }
`;
const BlockDescription = styled(Text)`
  margin-top: 24px;
  font-size: 13px;
  line-height: 15px;
  letter-spacing: 0.05em;
  color: ${({ theme }) => theme.colors.whiteRgba4};
  ${({ theme }) => theme.mediaQueries.md} {
    font-size: 15px;
    line-height: 19px;
  }
`;
const BlockDescriptionName = styled(BlockDescription)`
  margin: 15px 0;
`;
const AvatarButton = styled(Button)`
  margin-top: 24px;
  font-size: 15px;
  line-height: 19px;
  text-align: center;
  letter-spacing: 0.04em;
`;
const NameBlock = styled(AvatarBlock)`
  text-align: left;
  margin-top: 30px;
  padding: 15px 20px;
  ${({ theme }) => theme.mediaQueries.md} {
    padding: 25px 34px;
  }
`;
const UpdateButton = styled(AvatarButton)`
  margin-top: 30px;
`;
