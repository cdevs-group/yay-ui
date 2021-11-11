import React from "react";
import { BrowserRouter } from "react-router-dom";
import CardsBalance from "./CardBalance/CardsBalance";
import CardsProducts from "./CardsProduct/CardsProducts";

export default {
  title: "Components/Cards",
  component: [CardsBalance, CardsProducts],
  argTypes: {},
};

export const CardBalanceBlock: React.FC = () => <CardsBalance account="fghfgh" />;
export const CardBalanceBlockNoAuth: React.FC = () => <CardsBalance hideArrow account="" />;

export const CardsProductsPreciew: React.FC = () => {
  return (
    <BrowserRouter>
      <CardsProducts />
    </BrowserRouter>
  );
};
