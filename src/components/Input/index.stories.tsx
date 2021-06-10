import React from "react";
import  Input  from "./Input";

export default {
  title: "Components/Input",
  component: [Input],
  argTypes: {},
};


export const InputMain: React.FC = () => {
  return (
    <div>
      <Input placeholder='Search'/>
    </div>
  );
};

