import React, {useState} from "react";
import CardsBalance from "./CardBalance/CardsBalance";
import CardsProducts from "./CardsProduct/CardsProducts";
import UpOrDownCard from "./UpOrDown/UpOrDownCard";

export default {
  title: "Components/Cards",
  component: [CardsBalance, CardsProducts, UpOrDownCard],
  argTypes: {},
};

export const CardsBalancePreview: React.FC = () => {
  const text = { text1: "2000 YAY", title1: "Ready to harvest", text2: "Your Balance", title2: "3`000 YAY" };

  return (
    <div>
      <CardsBalance text={text} />
      <div style={{marginTop:'100px', marginLeft:'100px'}}>
        <p style={{fontSize:'22px', color:'#fff', marginBottom:'20px'}}>Auth</p>
        <UpOrDownCard/>
      </div>
      <div style={{marginTop:'100px', marginLeft:'100px'}}>
      <p style={{fontSize:'22px', color:'#fff', marginBottom:'20px'}}>NotAuth</p>
        <UpOrDownCard/>
      </div>
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
