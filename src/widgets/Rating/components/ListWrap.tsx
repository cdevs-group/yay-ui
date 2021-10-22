import React from "react";
import styled from "styled-components";
import { Button } from "../../../components/Button";
import { InputSearch } from "../../../components/InputSearch";
import { Pagination } from "../../../components/Pagination";
import { ShareIcon } from "../../../components/Svg";
import { Tabs } from "../../../components/Tabs";
import { ListWrapProps } from "../types";
import TabsTypeList from "./TabsTypeList";
import { Text } from "../../../components/Text";

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
  title,
}) => {
  return (
    <Wrapper>
      <TopContent players={players}>
        {players ? (
          <Tabs tabValue={activeTab} onClick={toggleTab} tabsList={tabsList} />
        ) : (
          <>
            {nameInput && (
              <InputSearch
                name={nameInput}
                placeholder={placeholder}
                value={inputValue}
                onChange={handleInput}
                width="272px"
              />
            )}
            {title && <TitleStyle>{title}</TitleStyle>}
          </>
        )}
      </TopContent>
      <MainBlock>{children}</MainBlock>
      <BottomContent>
        {players ? (
          <>
            <Buttons>
              <ButtonPosition scale="sm" variant="option" height="30px" onClick={myPositionButton}>
                {texts?.button}
              </ButtonPosition>
              {/* <WrapShare>
                <div
                  className="ya-share2"
                  data-curtain
                  data-limit="0"
                  data-more-button-type="short"
                  data-services="facebook,telegram,twitter"
                />
                <ShareIcon />
              </WrapShare> */}
            </Buttons>
            {length ? <Pagination currentPage={currentPage} length={length} togglePage={togglePage} /> : null}
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
  ${({ theme }) => theme.mediaQueries.xl} {
    max-width: 568px;
  }
`;
const MainBlock = styled.div`
  height: auto;
  overflow: hidden;
  ${({ theme }) => theme.mediaQueries.xl} {
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
    margin-bottom: 30px;
    width: ${({ players }) => (players ? "408px" : "fit-content")};
    margin-right: 0;
  }
`;
const BottomContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 35px;
  flex-wrap: wrap;
`;

const ButtonPosition = styled(Button)`
  display: block;
  margin-right: 12px;
  font-weight: 500;
  width: 198px;
  ${({ theme }) => theme.mediaQueries.md} {
    width: 146px;
  }
`;

const Buttons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-bottom: 35px;
  ${({ theme }) => theme.mediaQueries.md} {
    width: auto;
    justify-content: flex-start;
    margin-bottom: 0px;
  }
`;
const TitleStyle = styled(Text)`
  font-size: 31px;
  line-height: 39px;
  letter-spacing: 0.03em;
`;

const WrapShare = styled.div`
  position: relative;
  & svg {
    position: absolute;
    left: 0;
    top: 0;
  }
  & .ya-share2 {
    opacity: 0;
  }
`;
