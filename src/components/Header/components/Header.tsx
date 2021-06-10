import { Link } from "react-router-dom";
import styled from "styled-components";
import { links } from "../config";
import Logo from "../Logo";
import Account from "./Account";
import MenuLink from './MenuLink';

const Header = ({isAuth, accName}) =>{
  return (
  <HeaderWrap>
    {/* <Link> */}
      <Logo/>
    {/* </Link> */}
    <Nav>
      {links.map((item,i)=>
        <MenuLink size='lg' name={item.name} url={item.url}/>
      )}
    </Nav>
    <Account accName={accName} isAuth={isAuth}/>
  </HeaderWrap>)
}

const HeaderWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 14px 144px;
  background-color: ${({theme})=>theme.colors.bgBlackRgba};
  box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.2);
`;
const Nav = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

Header.defaultProps = {
  isAuth:false
};

export default Header;
