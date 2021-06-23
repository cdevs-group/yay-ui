import React, { useState } from "react";
import Card from "./CardNext";
import CardButtonsUpDown from "./CardButtonsUpDown";

const UpOrDownCard = () => {
  const [isReturn, setIsReturn] = useState<string>("");
  const [confirm, setConfirm] = useState<boolean>(false);
  const [choise, setChoice] = useState<string>("");
  const tabsList = ["10%", "25%", "50%", "75%", "Max"];
  const [tabValue, setTabValue] = useState(0);
  const [inputValue, setInputValue] = useState("");

  const handleTurn = (e: any) => {
    setIsReturn(e.target.value);
  };

  const handleToggleTabs = (e: any) => {
    setTabValue(+e.currentTarget.value);
  };
  const handleInputChange = (e: any) => {
    setInputValue(e.target.value);
  };

  return (
    <div style={{ height: "367px" }}>
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
        leftContent="NEXT"
        rightContent="#001"
      >
        <CardButtonsUpDown pool="$ 4354323" choise={choise} confirm={confirm} handleTurn={handleTurn} />
      </Card>
    </div>
  );
};

export default UpOrDownCard;
