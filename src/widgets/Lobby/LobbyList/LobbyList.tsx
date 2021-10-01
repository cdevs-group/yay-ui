import React from "react";
import styled from "styled-components";
import LobbyListItem from "./LobbyListItem";
import { LobbyListProps } from "../types";

const LobbyList = ({ data, texts, handleButton, open }: LobbyListProps) => {
  return (
    <Wrapper>
      {data.map((item, i) => (
        <LobbyListItem
          isEnoughYay={item.isEnoughYay}
          epoch={item.epoch}
          creator={item.creator}
          bet={item.bet}
          startTime={item.startTime}
          status={item.status}
          handleButton={handleButton}
          key={i}
          texts={texts}
          open={open}
        />
      ))}
    </Wrapper>
  );
};

export default LobbyList;

const Wrapper = styled.div`
  max-width: 986px;
`;
