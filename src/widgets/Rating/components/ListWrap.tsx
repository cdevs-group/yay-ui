import React from "react";
import styled from "styled-components";
import { Button } from "../../../components/Button";
import { InputSearch } from "../../../components/InputSearch";
import { Pagination } from "../../../components/Pagination";
import { ShareIcon } from "../../../components/Svg";
import { Tabs } from "../../../components/Tabs";
import { ListWrapProps } from "../types";
import TabsTypeList from "./TabsTypeList";

const ListWrap: React.FC<ListWrapProps> = ({
  children,
  handleInput,
  inputValue,
  placeholder,
  players,
  activeTab,
  toggleTab,
  tabsList,
  toggleTypeList,
  typeTabsList,
  texts,
  myPositionButton,
  length,
  togglePage,
  currentPage,
  nameInput,
  handleShare
}) => {
  return (
    <Wrapper>
      <TopContent players={players}>
        {players ? (
          <Tabs tabValue={activeTab} onClick={toggleTab} tabsList={tabsList} />
        ) : (
          <InputSearch
            name={nameInput}
            placeholder={placeholder}
            value={inputValue}
            onChange={handleInput}
            width="272px"
          />
        )}
      </TopContent>
      <MainBlock>{children}</MainBlock>
      <BottomContent>
        {players ? (
          <>
            <Buttons>
              <ButtonPosition width="146px" scale="sm" variant="option" height="30px" onClick={myPositionButton}>
                {texts?.button}
              </ButtonPosition>
              <ShareIcon role="button" onClick={handleShare} />
            </Buttons>
            <Pagination currentPage={currentPage} length={length} togglePage={togglePage} />
          </>
        ) : (
          <TabsTypeList toggleTypeList={toggleTypeList} typeTabsList={typeTabsList} />
        )}
      </BottomContent>
    </Wrapper>
  );
};

export default ListWrap;

const Wrapper = styled.div`
  max-width: 100%;
  width: 100%;
  ${({ theme }) => theme.mediaQueries.md} {
    max-width: 568px;
  }
`;
const MainBlock = styled.div`
  height: auto;
  ${({ theme }) => theme.mediaQueries.md} {
    height: 517px;
  }
`;
const TopContent = styled.div<{ players?: boolean }>`
  height: 51px;
  width: fit-content;
  margin-left: ${({ players }) => (players ? "auto" : "0")};
  margin-right: ${({ players }) => (players ? "auto" : "0")};
  margin-bottom: 24px;
  ${({ theme }) => theme.mediaQueries.md} {
    margin-bottom: 40px;
    width: ${({ players }) => (players ? "408px" : "fit-content")};
    margin-right: 0;
  }
`;
const BottomContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 35px;
`;

const ButtonPosition = styled(Button)`
  display: block;
  margin-right: 12px;
  font-weight: 500;
`;

const Buttons = styled.div`
  display: none;
  ${({ theme }) => theme.mediaQueries.md} {
    display: flex;
    align-items: center;
  }
`;
