import React, { useState } from "react";
import Tabs from "./Tabs";
import TabsSmall from "./TabsSmall";

export default {
  title: "Components/Tabs",
  component: [Tabs],
};

export const TabsBlock: React.FC = () => {
  const tabsList = ["Amount", "Winning", "Games"];
  const tabsList2 = ["Amount", "Winning"];

  const [activeTab, setActiveTab] = useState(0);
  const [activeTab2, setActiveTab2] = useState(0);

  const toggleTab = async (e: any) => {
    setActiveTab(+e.target.value);
  };
  const toggleTab2 = async (e: any) => {
    setActiveTab2(+e.target.value);
  };

  return (
    <>
      <div style={{ width: "400px", marginTop: "50px" }}>
        <Tabs onClick={toggleTab} tabValue={activeTab} tabsList={tabsList} />
      </div>
      <div style={{ width: "400px", marginTop: "50px" }}>
        <Tabs onClick={toggleTab2} tabValue={activeTab2} tabsList={tabsList2} />
      </div>
    </>
  );
};

export const TabsSmallBlock = () => {
  const tabsList = ["0.01", "0.1", "0.5", "1"];

  const [activeTab, setActiveTab] = useState(0);

  const toggleTab = async (e: any) => {
    setActiveTab(+e.target.value);
  };
  return <TabsSmall tabValue={activeTab} tabsList={tabsList} onClick={toggleTab} />;
};
