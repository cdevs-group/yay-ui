import React from "react";
import CardsBalance from "./CardBalance/CardsBalance";
import CardsProducts from "./CardsProduct/CardsProducts";

export default {
  title: "Components/Cards",
  component: [CardsBalance, CardsProducts],
  argTypes: {},
};

export const CardsBalancePreview: React.FC = () => {
  const text = { text1: "2000 YAY", title1: "Ready to harvest", text2: "Your Balance", title2: "3`000 YAY" };

  return (
    <div>
      <CardsBalance text={text} />
    </div>
  );
};

export const CardsProductsPreciew: React.FC = () => {
  return (
    <div>
      <CardsProducts />
    </div>
  );
};
