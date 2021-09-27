import React from "react";
import styled from "styled-components";
import LobbyListItem from "./LobbyListItem";
import { LobbyListProps } from "../types";

const LobbyList = ({ data, texts, handleButton }: LobbyListProps) => {
  return (
    <Wrapper>
      {data.map((item, i) => (
        <LobbyListItem
          epoch={item.epoch}
          creator={item.creator}
          bet={item.bet}
          startTime={item.startTime}
          status={item.status}
          handleButton={handleButton}
          key={i}
          texts={texts}
        />
      ))}
    </Wrapper>
  );
};

export default LobbyList;

const Wrapper = styled.div`
  max-width: 986px;
`;
