import React, { useState } from "react";
import Input from "./InputSearch";

export default {
  title: "Components/InputSearch",
  component: [Input],
  argTypes: {},
};

export const InputMain: React.FC = () => {
  const [value, setValue] = useState<string>("");

  return (
    <div>
      <Input name="search" value={value} onChange={(e) => setValue(e.target.value)} placeholder="Search" />
    </div>
  );
};
