import React from "react";
import CardsBalance from "./CardBalance/CardsBalance";
import CardsProducts from "./CardsProduct/CardsProducts";

export default {
  title: "Components/Cards",
  component: [CardsBalance,CardsProducts],
  argTypes: {},
};


export const CardsBalancePreview: React.FC = () => {
  return (
    <div>
      <CardsBalance/>
    </div>
  );
};

export const CardsProductsPreciew: React.FC = () =>{
  return (
    <div>
      <CardsProducts/>
    </div>
  )
}
