import React, { useState } from "react";
import CardsBalance from "./CardBalance/CardsBalance";
import CardsProducts from "./CardsProduct/CardsProducts";
import Card from "./UpOrDown/CardNext";
import CardButtonsUpDown from "./UpOrDown/CardButtonsUpDown";
import UpOrDownCard from "./UpOrDown/UpOrDownCard";

export default {
  title: "Components/Cards",
  component: [CardsBalance, CardsProducts, UpOrDownCard],
  argTypes: {},
};

export const CardsBalancePreview: React.FC = () => {
  const text = { text1: "2000 YAY", title1: "Ready to harvest", text2: "Your Balance", title2: "3`000 YAY" };
  const [confirm, setConfirm] = useState<boolean>(false);
  const [choise, setChoice] = useState<string>("");
  const tabsList = ["10%", "25%", "50%", "75%", "Max"];
  const [tabValue, setTabValue] = useState(0);
  const [inputValue, setInputValue] = useState("");
  const [isReturn, setIsReturn] = useState<string>("");

  const handleTurn = (e: any) => {
    setIsReturn(e.target.value);
  };

  const handleToggleTabs = (e: any) => {
    setTabValue(+e.currentTarget.value);
  };
  const handleInputChange = (e: any) => {
    e.preventDefault();
    setInputValue(e.target.value);
  };

  return (
    <div>
      <CardsBalance text={text} />
      <div style={{ marginTop: "100px", marginLeft: "100px" }}>
        <p style={{ fontSize: "22px", color: "#fff", marginBottom: "20px" }}>Auth</p>
        <Card
          setConfirm={setConfirm}
          setChoice={setChoice}
          isAuth
          setIsReturn={setIsReturn}
          isReturn={isReturn}
          upValue="1.02x"
          downValue="1.30x"
          tabValue={tabValue}
          handleToggleTabs={handleToggleTabs}
          tabsList={tabsList}
          inputValue={inputValue}
          handleInputChange={handleInputChange}
        >
          <CardButtonsUpDown pool="$ 4354323" choise={choise} confirm={confirm} handleTurn={handleTurn} />
        </Card>
      </div>
      <div style={{ marginTop: "100px", marginLeft: "100px" }}>
        <p style={{ fontSize: "22px", color: "#fff", marginBottom: "20px" }}>NotAuth</p>
        <UpOrDownCard />
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
