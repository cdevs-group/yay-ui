import React from "react";
import styled from "styled-components";
import { InputSearch } from "../../../components/InputSearch";
import TabsHistory from "../../HistoryPanel/components/TabsHistory";
import { ListWrapProps } from "../types";
import PaginationPlayersList from "./PaginationPlayersList";
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
          <TabsHistory tabValue={activeTab} onClick={toggleTab} tabsList={tabsList} />
        ) : (
          <InputSearch placeholder={placeholder} value={inputValue} onChange={handleInput} width="272px" />
        )}
      </TopContent>
      <MainBlock>{children}</MainBlock>
      <BottomContent>
        {players ? (
          <>
            <ButtonMyPossition onClick={myPosstionButton}>{texts?.button}</ButtonMyPossition>
            <PaginationPlayersList currentPage={currentPage} length={length} togglePage={togglePage} />
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
const ButtonMyPossition = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30px;
  min-width: 146px;
  text-align: center;
  background: rgba(255, 255, 255, 0.15);
  border-radius: 7px;
  font-weight: 500;
  font-size: 13px;
  line-height: 16px;
  letter-spacing: 0.5px;
  color: ${({ theme }) => theme.colors.text};
  text-shadow: ${({ theme }) => theme.colors.boxShadow5};
  border: none;
  cursor: pointer;
`;
