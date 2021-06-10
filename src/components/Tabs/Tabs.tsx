import styled from "styled-components";
import { TabsProp } from "./types";

const Tabs = ({tabValue, tabsList,onClick }:TabsProp) => {

  return (
    <TabsWrap>
      {tabsList.map((item, i) =>
        <Tab  onClick={onClick} className={tabValue===i?'active':''}  key={i} value={i} >{item}</Tab>
      )}
    </TabsWrap>
  )
}


Tabs.defaultProps = {
  tabsList: []
};

export default Tabs;

const TabsWrap = styled.div`
  max-width: 272px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  background: ${({ theme }) => theme.colors.buttonBg};
  border-radius: 12px;
`;
const Tab = styled.button`
  padding: 15px 30px;
  border: none;
  background: transparent;
  border-radius: 12px;
  font-size: 15px;
  line-height: 19px;
  text-align: center;
  letter-spacing: 0.5px;
  color: #FFFFFF;
  text-shadow: 0px 3px 4px rgba(0, 0, 0, 0.15);
  transition: .3s;
  cursor: pointer;
  &.active{
    background: ${({ theme }) => theme.colors.whiteRgba};
  }
`
