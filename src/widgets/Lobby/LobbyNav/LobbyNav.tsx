import React from "react";
import { LobbyNavProps } from "../types";
import styled from "styled-components";
import { Text } from "../../../components/Text";
import { UNIT, CONTROLLER } from "../../../constants/images";
import { Button } from "../../../components/Button";

const LobbyNav = ({ texts, handleJoin, handleCreate, imgJoin, imgCreate, isApprove, handleApprove }: LobbyNavProps) => {
  return (
    <NavBlock>
      <Wrapper id="join">
        <ButtonAdd onClick={handleJoin}>
          <Text fontSize="19px">{texts.join}</Text>
          <img src={imgJoin || UNIT} alt="avatar" />
        </ButtonAdd>
        <ButtonCreate onClick={handleCreate}>
          <Text fontSize="19px">{texts.create}</Text>
          <img className="right" src={imgCreate || CONTROLLER} alt="avatar" />
        </ButtonCreate>
      </Wrapper>
      <ButtonStyle onClick={handleApprove} variant="green" maxWidth="175px" width="100%">
        {texts.approve}
      </ButtonStyle>
      <BlurBlock blur={!isApprove}/>
    </NavBlock>
  );
};

export default LobbyNav;

const NavBlock = styled.div`
  position: relative;
  max-width: 222px;
  overflow: hidden;
  border-radius: 15px;
  ${({ theme }) => theme.mediaQueries.md} {
    max-width: 452px;
  }
`;
const Wrapper = styled.div<{ isApprove: boolean }>`
  position: relative;
  max-width: 222px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  ${({ theme }) => theme.mediaQueries.md} {
    max-width: 452px;
  }
`;
const ButtonAdd = styled.button`
  margin: 0 0 16px;
  max-width: 220px;
  min-height: 220px;
  width: 100%;
  padding: 20px 24px;
  background: ${({ theme }) => theme.colors.bgGrey2};
  box-shadow: ${({ theme }) => theme.colors.boxShadow2};
  border-radius: 15px;
  border: none;
  cursor: pointer;
  display: flex;
  position: relative;
  flex: none;
  & img {
    position: absolute;
    bottom: 0;
    left: 0;
  }
  ${({ theme }) => theme.mediaQueries.md} {
    margin: 0 12px 0 0;
  }
`;

const ButtonCreate = styled(ButtonAdd)`
  margin: 0 0 16px;
  background: ${({ theme }) => theme.colors.green};
  & img {
    left: auto;
    right: 0;
  }
  ${({ theme }) => theme.mediaQueries.md} {
    margin: 0;
  }
`;
const ButtonStyle = styled(Button)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
`;
const BlurBlock = styled.div<{ blur: boolean }>`
  top: 0;
  backdrop-filter: ${({ blur }) => (blur ? "blur(20px)" : "none")};
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 15px;
  position: absolute;
  background-image: ${`-moz-element(#join)`};
  -webkit-filter: blur(20px);
  filter: ${({ blur }) => (blur ? "blur(20px)" : "none")};
`;
