import React from "react";
import styled from "styled-components";

const NftsTable = ({
  nftsList,
  handleSelectValue,
  selectGame,
}: {
  selectGame?: string;
  handleSelectValue: (value?: string) => void;
  nftsList: { img: string; value: string }[];
}) => {
  const list = [];
  for (let i = 0; i < 12; i++) {
    list.push(nftsList[i] || {});
  }

  return (
    <Table>
      {list.map((item, i) => (
        <ItemAvatar
          className={`${item.img ? "" : "empty"} ${selectGame === item.value ? "active" : ""}`}
          key={i}
          onClick={() => (item.img ? handleSelectValue(item.value) : () => {})}
          bg={item.img}
        ></ItemAvatar>
      ))}
    </Table>
  );
};

export default NftsTable;

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
const ItemAvatar = styled.div<{ bg?: string }>`
  width: 100%;
  min-height: 118px;
  border-radius: 15px;
  flex-shrink: 0;
  max-width: 133px;
  margin-right: 7px;
  background: ${({ bg }) => `url(${bg}) no-repeat center center / cover`};
  cursor: pointer;
  padding: 10px 14px;
  border: 2px solid transparent;

  &.empty {
    background: ${({ theme }) => theme.colors.bgOpacitY3};
    cursor: default;
  }

  ${({ bg, theme }) =>
    bg &&
    `
    &:hover {
    border: 2px solid ${theme.colors.green};
    box-shadow: ${theme.colors.boxShadow6};
    transition: 0.3s;
  }
  `}
  ${({ theme }) => theme.mediaQueries.md} {
    margin-right: 0;
  }
`;
