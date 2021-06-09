import styled from "styled-components";
import SvgComponent from "./Svg";
// import { tags, sizes, HeadingProps } from "./types";

// const style = {
//   [sizes.MD]: {
//     fontSize: "20px",
//     fontSizeLg: "20px",
//   },
//   [sizes.LG]: {
//     fontSize: "24px",
//     fontSizeLg: "24px",
//   },
//   [sizes.XL]: {
//     fontSize: "32px",
//     fontSizeLg: "40px",
//   },
//   [sizes.XXL]: {
//     fontSize: "48px",
//     fontSizeLg: "64px",
//   },
// };



const Header = ({isAuth}) =>{
  return <HeaderWrap>
      <p><SvgComponent/></p>
    <Nav>
      <NavItem className='active'>Gaming Marketplace</NavItem>
      <NavItem>Swap</NavItem>
      <NavItem>Farm</NavItem>
      <NavItem>Profile</NavItem>
    </Nav>
    <Account>
      {isAuth
      ?<>2x67...7436
      <Avatar/></>:<Avatar className='notAuth'>Connect</Avatar>
      }
    </Account>
  </HeaderWrap>
}

const HeaderWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 14px 144px;
  background-color: rgba(43, 43, 50, .7);
  box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.2);
`;
const Nav = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const NavItem = styled.div`
  position: relative;
  margin: 0 15px;
  font-weight: 500;
  font-size: 15px;
  line-height: 19px;
  color: #F3F3F3;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  cursor: pointer;
  &::after{
    display: block;
    bottom: -32px;
    width: 0;
    height: 2px;
    content: '';
    position: absolute;
    background: #4BE43E;
    transition: all.3s;
  }
  &.active::after{
    width: 100%;
    opacity: 1;
  }
`;
const Account = styled.button`
  position: relative;
  display: flex;
  min-height: 43px;
  min-width:160px;
  align-items: center;
  padding: 12px 56px 12px 20px;
  background: rgba(0, 0, 0, 0.3);
  border-radius: 25px;
  box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.2);
  font-weight: 500;
  font-size: 15px;
  line-height: 19px;
  color: #F3F3F3;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  cursor: pointer;
  border:none;
`;
const Avatar = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 10px;
  right: 2px;
  height: 40px;
  width: 40px;
  border-radius: 20px;
  background: #4BE43E;

  color: #fff;
  &.notAuth{
    width: calc(100% - 4px);
  }
`;

Header.defaultProps = {
  isAuth:false
};

export default Header;
