import { turn } from "core-js/core/array";
import styled from "styled-components";
import ArrowIcon from "./ArrowIcon";
import CoinIcon from "./CoinIcon";
import DualshockIcon from "./DualshockIcon";
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

interface CardProps{
  right?:boolean,
  title:string,
  text:string,
  children:any
}

const Card = ({ right, title, children, text}:CardProps) =>{
  return(
    <CardWrap right={right}>
      <CardHeader>{title}</CardHeader>
      <CardText>{text}</CardText>
      {children}
    </CardWrap>
  )
}

const CardsBalance = () =>{
  return <Cards>
    <Card
        title='2000 YAY'
        text='Ready to harvest'
      ><CoinIcon/>
    </Card>
    <Card
        right
        title='3`000 YAY'
        text='Your Balance'
      ><DualshockIcon/>
    </Card>
    <Arrow><ArrowIcon/></Arrow>
  </Cards>
}

const Cards = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0 16px;
`;
const CardWrap = styled.div`
  position: relative;
  padding: 25px;
  background-color: #26262D;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
  border-radius: 15px;
  & svg{
    position: absolute;
    left: ${props=>(props.right?'auto':'0')};
    right: ${props=>(props.right?'0':'auto')};
    bottom: 0;
  }
`;
const CardHeader = styled.div`
  font-weight: 500;
  font-size: 24px;
  line-height: 30px;
  text-align: center;
  letter-spacing: 0.05em;
  color: #FFFFFF;
`;
const CardText = styled.div`
  margin-top: 14px;
  font-weight: 500;
  font-size: 15px;
  line-height: 19px;
  text-align: center;
  letter-spacing: 0.05em;
  color: #A3A3A3;
`;
const Arrow = styled.div`
  width: 45px;
  height: 45px;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 50%;
  left: 50%;
  transform:translate(-50%,-50%);
  background: linear-gradient(180deg, #4CEE3E -16%, #47DA3B 100%);
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
  border: 5px solid #26262D;
  border-radius: 50px;
`;

CardsBalance.defaultProps = {
};

export default CardsBalance;
