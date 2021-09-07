import React from "react";
import styled from "styled-components";
import LobbyListItem from "./LobbyListItem";
import { LobbyListProps } from "../types";

const LobbyList = ({ data, texts, handleButton }: LobbyListProps) => {
  return (
    <Wrapper>
      {data.map((item, i) => (
        <LobbyListItem handleButton={handleButton} key={i} texts={texts} data={item} />
      ))}
    </Wrapper>
  );
};

export default LobbyList;

const Wrapper = styled.div`
  max-width: 986px;
`;
