import React from "react";
import styled from "styled-components";
import ROCKET from "../image/rocket.png";
import MAJONG from "../image/majong.png";
import COINS from "../image/coins.png";
import CHESS from "../image/chess.png";
import BALANCE from "../image/balance.png";
import CardProduct from "./components/CardProduct";
import CardProductLeft from "./components/CardProductLeft";
import CardProductRight from "./components/CardProductRight";
import CardProductRcket from "./components/CardProductRcket";

const data = [
  { name: "BTC vs ETH", img: BALANCE, color: "pink" },
  { name: "UP or Down", img: COINS, color: "green" },
  { name: "Coming soon", img: CHESS, color: "purple" },
  { name: "Coming soon", img: ROCKET, color: "blue" },
  { name: "Coming soon", img: MAJONG, color: "red" },
];

const CardsProducts = () => {
  return (
    <Cards>
      <CardProduct title={data[0].name} bg={data[0].color} img={data[0].img} />
      <CardProductLeft title={data[1].name} bg={data[1].color} img={data[1].img} />
      <CardProductRight title={data[2].name} closed bg={data[2].color} img={data[2].img} />
      <CardProductRcket title={data[3].name} closed bg={data[3].color} img={data[3].img} />
      <CardProduct title={data[4].name} closed bg={data[4].color} img={data[4].img} />
    </Cards>
  );
};

const Cards = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 0 12px;
`;

CardsProducts.defaultProps = {};

export default CardsProducts;
