import React from "react";
import styled from "styled-components";
import { TabsProp } from "./types";
import Text from '../Text/Text';

const SimpleTabs = ({tabValue, setTabValue, tabsList }:TabsProp) => {
  const handleTabSimple = (e: any)=>{
    setTabValue(+e.target.value)
  }
  return (
    <TabsWrap>
      {tabsList.map((item, i) =>
        <Tab as='button'  onClick={handleTabSimple} className={tabValue===i?'active':''}  key={i} value={i} >{item}</Tab>
      )}
    </TabsWrap>
  )
}


SimpleTabs.defaultProps = {
  tabsList: []
};

export default SimpleTabs;

const TabsWrap = styled.div`
  display: flex;
  justify-content:space-between;
`;
const Tab = styled(Text)`
  border: none;
  padding-bottom:5px;
  background: transparent;
  color: ${({theme})=>theme.colors.textGray};
  text-shadow: ${({theme})=>theme.colors.textShadow3};
  transition: .3s;
  cursor: pointer;
  border-bottom:2px solid transparent;
  &.active{
    border-bottom:2px solid ${({theme})=>theme.colors.green};
    color: ${({theme})=>theme.colors.text}
  }
`
