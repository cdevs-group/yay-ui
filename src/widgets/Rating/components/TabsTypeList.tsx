import React from "react";
import styled from "styled-components";
import { MenuIcon, StrikesWideIcon } from "../../../components/Svg";
import { TabsTypeListPops } from "../types";

const TabsTypeList: React.FC<TabsTypeListPops> = ({ toggleTypeList, typeTabsList }) => {
  return (
    <div>
      {typeTabsList?.map((item, i) => (
        <Tab onClick={toggleTypeList} value={item} key={i}>
          {item === "table" ? <MenuIcon fill="transparent" /> : <StrikesWideIcon fill="transparent" />}
        </Tab>
      ))}
    </div>
  );
};

export default TabsTypeList;

const Tab = styled.button`
  position: relative;
  width: 30px;
  height: 30px;
  background: ${({ theme }) => theme.colors.whiteRgba};
  border-radius: 7px;
  border: none;
  &:first-child {
    margin-right: 15px;
  }
  cursor: pointer;
  & svg {
    pointer-events: none;
    position: absolute;
    top: -6px;
    left: -6px;
  }
`;
