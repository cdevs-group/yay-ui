import styled from "styled-components";
import { TabsProp } from "./types";
import Text from '../Text/Text';

const Tabs = ({tabValue, tabsList,onClick }:TabsProp) => {

  return (
    <TabsWrap>
      {tabsList.map((item, i) =>
        <Tab as='button' onClick={onClick} className={tabValue===i?'active':''}  key={i} value={i} >{item}</Tab>
      )}
    </TabsWrap>
  )
}

Tabs.defaultProps = {
  tabsList: []
};

export default Tabs;

const TabsWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  background: ${({ theme }) => theme.colors.buttonBg};
  border-radius: 12px;
`;
const Tab = styled(Text)`
  padding: 15px 30px;
  border: none;
  background: transparent;
  border-radius: 12px;
  letter-spacing: 0.5px;
  color: ${({theme})=>theme.colors.text};
  text-shadow: ${({theme})=>theme.colors.textShadow3};
  transition: .3s;
  cursor: pointer;
  &.active{
    background: ${({ theme }) => theme.colors.whiteRgba};
  }
`
