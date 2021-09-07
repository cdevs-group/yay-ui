import React from "react";
import { LobbyNavProps } from "../types";
import styled from "styled-components";
import { Text } from "../../../components/Text";
import { UNIT, CONTROLLER } from "../../../constants/images";

const LobbyNav = ({ texts, handleJoin, handleCreate, imgJoin, imgCreate }: LobbyNavProps) => {
  return (
    <Wrapper>
      <ButtonAdd onClick={handleJoin}>
        <Text fontSize="19px">{texts.join}</Text>
        <img src={imgJoin || CONTROLLER} alt="avatar" />
      </ButtonAdd>
      <ButtonCreate onClick={handleCreate}>
        <Text fontSize="19px">{texts.create}</Text>
        <img className="right" src={imgCreate || UNIT} alt="avatar" />
      </ButtonCreate>
    </Wrapper>
  );
};

export default LobbyNav;

const Wrapper = styled.div`
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
const ButtonAdd = styled.button`
  margin: 0 12px 12px 0;
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
`;

const ButtonCreate = styled(ButtonAdd)`
  background: ${({ theme }) => theme.colors.green};
  & img {
    left: auto;
    right: 0;
  }
`;
