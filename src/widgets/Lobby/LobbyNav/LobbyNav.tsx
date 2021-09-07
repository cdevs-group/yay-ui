import React from "react";
import { LobbyNavProps } from "../types";
import styled from "styled-components";
import { Text } from "../../../components/Text";
import { COINS, CONTROLLER } from "../../../constants/images";

const LobbyNav = ({ texts, handleJoin, handleCreate }: LobbyNavProps) => {
  return (
    <Wrapper>
      <ButtonAdd onClick={handleJoin}>
        <Text fontSize="19px">{texts.join}</Text>
        <img src={CONTROLLER} alt="avatar" />
      </ButtonAdd>
      <ButtonCreate onClick={handleCreate}>
        <Text fontSize="19px">{texts.create}</Text>
        <img className="right" src={COINS} alt="avatar" />
      </ButtonCreate>
    </Wrapper>
  );
};

export default LobbyNav;

const Wrapper = styled.div`
  margin: 0 auto;
  display: flex;
`;
const ButtonAdd = styled.button`
  margin: 0 12px;
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
    right: -2px;
  }
`;
