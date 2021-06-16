import React, { useState } from "react";
import Tabs from "./Tabs";
import SimpleTabs from "./SimpleTabs";

export default {
  title: "Components/Tabs",
  component: [Tabs, SimpleTabs],
  argTypes: {},
};

const tabsList = ["Active", "Finished"];
const tabsListSimple = ["All history", "Collected", "Uncollected"];

export const TabsMain: React.FC = () => {
  const [tabValue, setTabValue] = useState(0);
  const [tabValueSimple, setTabValueSimple] = useState(0);

  return (
    <div style={{ width: 300 }}>
      <Tabs setTabValue={setTabValue} tabValue={tabValue} tabsList={tabsList} />
      <div style={{ marginTop: 50 }}>
        <SimpleTabs tabValue={tabValueSimple} tabsList={tabsListSimple} setTabValue={setTabValueSimple} />
      </div>
    </div>
  );
};
