import React from "react";
import styled from "styled-components";
import { Button } from "../../../components/Button";
import { InputSearch } from "../../../components/InputSearch";
import { Pagination } from "../../../components/Pagination";
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
  myPosstionButton,
  length,
  togglePage,
  currentPage,
}) => {
  return (
    <Wrapper>
      <TopContent players={players}>
        {players ? (
          <Tabs tabValue={activeTab} onClick={toggleTab} tabsList={tabsList} />
        ) : (
          <InputSearch placeholder={placeholder} value={inputValue} onChange={handleInput} width="272px" />
        )}
      </TopContent>
      <MainBlock>{children}</MainBlock>
      <BottomContent>
        {players ? (
          <>
            <Button width="130px" scale="sm" variant="option" height="30px" onClick={myPosstionButton}>
              {texts?.button}
            </Button>
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
  max-width: 568px;
`;
const MainBlock = styled.div`
  height: 517px;
`;
const TopContent = styled.div<{ players?: boolean }>`
  height: 51px;
  width: ${({ players }) => (players ? "408px" : "fit-content")};
  margin-left: ${({ players }) => (players ? "auto" : "0")};
  margin-bottom: 40px;
`;
const BottomContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 35px;
`;
