import React, { useState } from "react";
import Languages from "./Languages";

export default {
  title: "Components/DropDown",
  component: [Languages],
};

export const InputMain: React.FC = () => {
  const languages = ["EN", "RU", "BG"];
  const [select, setSelect] = useState<string>(languages[0]);

  return (
    <div>
      <Languages list={languages} setSelect={setSelect} select={select} />
    </div>
  );
};
