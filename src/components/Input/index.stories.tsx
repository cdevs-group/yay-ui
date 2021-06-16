import React, { useState } from "react";
import Input from "./Input";

export default {
  title: "Components/Input",
  component: [Input],
  argTypes: {},
};

export const InputMain: React.FC = () => {
  const [value, setValue] = useState<string>("");

  return (
    <div>
      <Input value={value} onChange={(e) => setValue(e.target.value)} placeholder="Search" />
    </div>
  );
};
