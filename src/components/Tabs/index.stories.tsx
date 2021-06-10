import React, { useState } from "react";
import  Tabs  from "./Tabs";

export default {
  title: "Components/Tabs",
  component: [Tabs],
  argTypes: {},
};

const tabsList=['Active', 'Finished']

export const TabsMain: React.FC = () => {
  const [tabValue, setTabValue] = useState(0)
  const handleTab = (e)=>{
    setTabValue(+e.target.value)
  }

  return (
    <div>
      <Tabs 
        onClick={handleTab}
        tabValue={tabValue} 
        tabsList={tabsList}
        />
    </div>
  );
};

