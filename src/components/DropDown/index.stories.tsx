import React, { useState } from "react";
import Languages from "./Languages";

export default {
  title: "Components/DropDown",
  component: [Languages],
};

export const InputMain: React.FC = () => {
  const languages = ["EN", "RU", "BG"];
  const [select, setSelect] = useState(languages[0]);

  return (
    <div>
      <Languages langs={languages} setLang={setSelect} currentLang={select} />
    </div>
  );
};
