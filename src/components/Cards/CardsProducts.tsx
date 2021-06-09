import styled from "styled-components";
import ArrowIcon from "./ArrowIcon";
import CoinIcon from "./CoinIcon";
import DualshockIcon from "./DualshockIcon";
import ROCKET from "./image/rocket.png";
import MAJONG from "./image/majong.png";
import COINS from "./image/coins.png";
import CHESS from "./image/chess.png";
import { isTemplateExpression } from "typescript";

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

const data = [
  { name: "BTC vs ETH", img: ROCKET, color:'pink' },
  { name: "UP or Down", img: COINS, color:'green' },
  { name: "Coming soon", img: CHESS, color:'purple',big:true,closed:true},
  { name: "Coming soon", img: ROCKET, color: 'blue',big:true,closed:true },
  { name: "Coming soon", img: MAJONG, color:'red',closed:true },
];
interface CardProp {
  title: string
  img: string
  bg: string
  big?:boolean
  closed?:boolean
}

const setColor = (param) => {
  switch (param.bg) {
    case "red":
      return "linear-gradient(180deg, #FF8383 0%, #EF5D5D 100%);"
    case "blue":
      return "linear-gradient(180deg, #95D0FF 0%, #78C2FD 100%);"
    case "green":
      return "linear-gradient(180deg, #BDFF00 0%, #95CA00 100%);"
    case "purple":
      return "linear-gradient(180deg, #CA61FB 0%, #B255DE 100%);"
    case "pink":
      return "linear-gradient(180deg, #95D0FF 0%, #78C2FD 100%);"
    default:
      return "linear-gradient(180deg, #FF8383 0%, #EF5D5D 100%);"
  }
};

const Card = ({ title, img, bg, big, closed }: CardProp) => {
  return (
    <CardWrap  closed={closed} big={big} bg={bg}>
      <CardTitle>{title}</CardTitle>
      <CardImage>
        <img  src={img}  alt="some img" />
      </CardImage>
    </CardWrap>
  );
};

const CardsProducts = () => {
  return (
    <Cards>
      {data.map((item, i) => (
        <div  key={i}>
          <Card title={item.name}  closed={item.closed} big={item.big} bg={item.color} img={item.img} />
        </div>
      ))}
    </Cards>
  );
};

const Cards = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 0 12px;
`;
const CardWrap = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  max-width: 220px;
  min-height: 220px;
  padding: 20px 24px;
  background: ${setColor};
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
  border-radius: 15px;
  opacity: ${props=>props.closed?.3:1};
  box-sizing: border-box;
  &::after{
    display:block;
    content:'';
    position: absolute;
    width: calc(100% + 2px);
    height: calc(100% + 2px);
    border: 1.5px solid #4BE43E;
    box-sizing: border-box;
    top: -1px;
    left: -1px;
    opacity: 0;
    z-index: -1;
    filter: drop-shadow(0px 4px 10px rgba(0, 0, 0, 0.25));
    border-radius: 15px;
    transition: .3s;
  }
  &:hover{
    &::after{
      opacity: ${props=>props.closed?0:1};
    }
  }
  & img{
    position: absolute;
    width: ${props=>props.big?"120%":"105%"};
    right: ${props=>props.big?"-50px":"0"};
    top: ${props=>props.big?"20px":"auto"};
  }
`;
const CardTitle = styled.div`
  font-weight: 500;
  font-size: 19px;
  line-height: 24px;
  letter-spacing: 0.02em;
  color: #FFFFFF;
  text-shadow: 0px 4px 7px rgba(0, 0, 0, 0.15);
`;
const CardImage = styled.div``;

CardsProducts.defaultProps = {};

export default CardsProducts;
