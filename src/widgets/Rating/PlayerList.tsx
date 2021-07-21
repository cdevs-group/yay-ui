import React from "react";
import styled from "styled-components";
import { PlayerListProps } from "./types";

const PlayerList: React.FC<PlayerListProps> = ({ texts, playersList }) => {
  return (
    <Wrapper>
      <Title>
        {texts.title}
        <span>(12647)</span>
      </Title>
      <Table>
        <TableHeader>
          <p>№</p>
          <p className="middle">{texts.playerName}</p>
          <p>{texts.games}</p>
        </TableHeader>
        {playersList.map((item, i) => (
          <Line key={i}>
            <Cell>{item.position}</Cell>
            <Cell>
              <img src={item.token} />
            </Cell>
            <Cell>{item.name}</Cell>
            <Cell>{item.games}</Cell>
          </Line>
        ))}
      </Table>
    </Wrapper>
  );
};

export default PlayerList;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 30px 0;
  border-radius: 10px;
  background: ${({ theme }) => theme.colors.bgGray};
`;
const Title = styled.div`
  padding-left: 32px;
  font-weight: 500;
  font-size: 15px;
  line-height: 19px;
  color: ${({ theme }) => theme.colors.text2};
  text-shadow: ${({ theme }) => theme.colors.textShadow};
  & span {
    opacity: 0.5;
  }
`;
const Table = styled.div`
  margin-top: 20px;
`;
const Line = styled.div`
  display: grid;
  grid-template-columns: 0.5fr 0.5fr 6fr 2fr;
  opacity: 0.3s;
  &:hover {
    filter: drop-shadow(0px 0px 20px rgba(0, 0, 0, 0.2));
    background: #292930;
  }
`;
const TableHeader = styled.div`
  padding: 0 44px 0 32px;
  margin-bottom: 5px;
  display: flex;
  justify-content: space-between;
  font-size: 13px;
  line-height: 16px;
  letter-spacing: 0.05em;
  color: ${({ theme }) => theme.colors.whiteRgba};
  & p.middle {
    margin-left: 40px;
  }
`;
const Cell = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px 0;
  font-size: 15px;
  line-height: 19px;
  letter-spacing: 0.05em;
  color: ${({ theme }) => theme.colors.text};
  transition: 0.3s;
  &:nth-child(4n + 1) {
    text-align: left;
    padding-right: 40px;
    padding-left: 32px;
  }
  &:nth-child(4n) {
    padding-right: 44px;
    justify-content: flex-end;
  }
  ${Line}:hover & {
    color: ${({ theme }) => theme.colors.green};
  }
`;
const Position = styled.div``;
const Token = styled.div``;
const Name = styled.div``;
const Games = styled.div``;
