import React from "react";
import styled from "styled-components";
import { Text } from "../../components/Text";
import { GameTableProps } from "./types";

const GamesTable: React.FC<GameTableProps> = ({ texts, gamesList, handleSelectValue, selectGame }) => {
  const list = [];
  for (let i = 0; i < 12; i++) {
    list.push(gamesList[i] || {});
  }

  return (
    <Wrapper>
      <Title>
        {texts.title}
        <span>({gamesList.length})</span>
      </Title>
      <Table>
        {list.map((item, i) => (
          <ItemGame
            className={`${item.imgSrc ? "" : "empty"} ${selectGame === item.value ? "active" : ""}`}
            key={i}
            onClick={() => (!item.disabled && item.imgSrc ? handleSelectValue(item.value) : () => {})}
            bg={item.imgSrc}
          >
            <Text fontSize="11px">{item.title}</Text>
          </ItemGame>
        ))}
      </Table>
    </Wrapper>
  );
};

export default GamesTable;

const Wrapper = styled.div`
  ${({ theme }) => theme.mediaQueries.md} {
    width: 100%;
    height: 100%;
    padding: 30px 32px;
    border-radius: 10px;
    background: ${({ theme }) => theme.colors.bgGray};
  }
`;
const Title = styled.div`
  display: none;
  ${({ theme }) => theme.mediaQueries.md} {
    display: block;
    font-weight: 500;
    font-size: 15px;
    line-height: 19px;
    color: ${({ theme }) => theme.colors.text2};
    text-shadow: ${({ theme }) => theme.colors.textShadow};
    & span {
      opacity: 0.5;
    }
  }
`;
const Table = styled.div`
  margin-top: 22px;
  display: flex;
  overflow-x: auto;
  overflow-y: hidden;
  &::-webkit-scrollbar {
    height: 0px;
  }
  ${({ theme }) => theme.mediaQueries.md} {
    margin-top: 22px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 10px;
    &::-webkit-scrollbar {
      width: 0px;
    }
  }
`;
const ItemGame = styled.div<{ bg?: string }>`
  width: 100%;
  min-height: 118px;
  border-radius: 15px;
  flex-shrink: 0;
  max-width: 133px;
  margin-right: 7px;
  background: ${({ bg }) => `url(${bg}) no-repeat center center / cover`};
  cursor: pointer;
  padding: 10px 14px;
  &.empty {
    background: ${({ theme }) => theme.colors.bgOpacitY3};
    cursor: default;
  }
  &.active {
    border: 2px solid ${({ theme }) => theme.colors.green};
    box-shadow: ${({ theme }) => theme.colors.boxShadow6};
    transition: 0.3s;
  }
  ${({ theme }) => theme.mediaQueries.md} {
    margin-right: 0;
  }
`;
