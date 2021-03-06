import React from "react";
import styled from "styled-components";
import { ellipsis } from "../../helpers/ellipsis";
import { PlayerListProps } from "./types";
import TOKEN from "./img/token.svg";

const PlayerList: React.FC<PlayerListProps> = ({ texts, playersList, tokenIcon, myAccount, total }) => {
  return (
    <Wrapper>
      <Title>
        {texts.title}
        <span>({total})</span>
      </Title>
      <Table>
        <LineHeader>
          <p>№</p>
          <p />
          <p className="middle">{texts.playerName}</p>
          <p>{texts.games}</p>
        </LineHeader>
        {playersList.map((item, i) => (
          <Line key={i} className={myAccount === item.account ? "active" : ""}>
            <Cell>{item.position}</Cell>
            <Cell>
              <img src={item.token || tokenIcon || TOKEN} />
            </Cell>
            <Cell>{ellipsis(item.account)}</Cell>
            <Cell>{item.score}</Cell>
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
  padding: 21px 0;
  border-radius: 10px;
  background: ${({ theme }) => theme.colors.bgGray};
  ${({ theme }) => theme.mediaQueries.md} {
    padding: 30px 0;
  }
`;
const Title = styled.div`
  padding-left: 20px;
  font-weight: 500;
  font-size: 18px;
  line-height: 23px;
  color: ${({ theme }) => theme.colors.text2};
  text-shadow: ${({ theme }) => theme.colors.textShadow};
  & span {
    opacity: 0.5;
  }
  ${({ theme }) => theme.mediaQueries.md} {
    font-size: 15px;
    line-height: 19px;
    padding-left: 32px;
  }
`;
const Table = styled.div`
  margin-top: 20px;
`;
const Line = styled.div`
  display: grid;
  grid-template-columns: 13% 12% 55% 20%;
  transition: 0.3s;
  font-size: 11px;
  line-height: 14px;
  letter-spacing: 0.05em;
  &.active {
    filter: drop-shadow(0px 0px 20px rgba(0, 0, 0, 0.2));
    background: #292930;
  }
  ${({ theme }) => theme.mediaQueries.md} {
    font-size: 15px;
    line-height: 19px;
    grid-template-columns: 15% 10% 55% 20%;
  }
`;
const LineHeader = styled.div`
  display: none;
  ${({ theme }) => theme.mediaQueries.md} {
    display: grid;
    grid-template-columns: 15% 10% 55% 20%;
    margin-bottom: 5px;
    font-size: 13px;
    line-height: 16px;
    letter-spacing: 0.05em;
    color: ${({ theme }) => theme.colors.whiteRgba};
    text-align: center;
  }
`;
const Cell = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px 0;
  color: ${({ theme }) => theme.colors.text};
  transition: 0.3s;
  ${Line}.active & {
    color: ${({ theme }) => theme.colors.green};
  }
  & img {
    width: 32px;
    height: 32px;
  }
  ${({ theme }) => theme.mediaQueries.md} {
    & img {
      width: 36px;
      height: 36px;
    }
  }
`;
