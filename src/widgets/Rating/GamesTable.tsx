import React from "react";
import styled from "styled-components";
import { GameTableProps } from "./types";

const GamesTable: React.FC<GameTableProps> = ({ texts, gamesList }) => {
  const list = [];
  for (let i = 0; i < 12; i++) {
    list.push(gamesList[i] || {});
  }

  return (
    <Wrapper>
      <Title>
        {texts}
        <span>({gamesList.length})</span>
      </Title>
      <Table>
        {list.map((item, i) => (
          <ItemGame className={item.img ? "" : "empty"} key={i}>
            {item.img}
          </ItemGame>
        ))}
      </Table>
    </Wrapper>
  );
};

export default GamesTable;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 30px;
  border-radius: 10px;
  background: ${({ theme }) => theme.colors.bgGray};
`;
const Title = styled.div`
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
  margin-top: 22px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
`;
const ItemGame = styled.div`
  width: 100%;
  min-height: 118px;
  border-radius: 15px;
  &.empty {
    background: ${({ theme }) => theme.colors.bgOpacitY3};
  }
`;
