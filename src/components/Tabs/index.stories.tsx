import React, { useState } from "react";
import  Tabs  from "./Tabs";
import SimpleTabs from './SimpleTabs'

export default {
  title: "Components/Tabs",
  component: [Tabs,SimpleTabs],
  argTypes: {},
};

const tabsList=['Active', 'Finished']
const tabsListSimple=['All history', 'Collected', 'Uncollected']

export const TabsMain: React.FC = () => {
  const [tabValue, setTabValue] = useState(0)
  const handleTab = (e)=>{
    setTabValue(+e.target.value)
  }
  const [tabValueSimple, setTabValueSimple] = useState(0)
  const handleTabSimple = (e)=>{
    setTabValueSimple(+e.target.value)
  }

  return (
    <div style={{width:300}}>
      <Tabs 
        onClick={handleTab}
        tabValue={tabValue} 
        tabsList={tabsList}
        />
        <div style={{marginTop:50}}>
        <SimpleTabs
        onClick={handleTabSimple}
        tabValue={tabValueSimple} 
        tabsList={tabsListSimple}
        />
        </div>
    </div>
  );
};

