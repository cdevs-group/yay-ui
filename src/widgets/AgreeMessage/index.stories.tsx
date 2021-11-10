import React, { useState } from "react";
import AgreeMessage from "./AgreeMessage";

export default {
  title: "Widgets/AgreeMessage",
  argTypes: {},
};

export const AgreeMessageBlock = () => {
  const [isChecked, setChecked] = useState({
    option1: false,
    option2: false,
  });
  const texts = {
    title: "Attention!",
    message: "Signing this message, you are confirming that you are:",
    option1:
      "Not a resident of restricted countries from the following list: United States, Antigua and Barbuda, Algeria, Bangladesh, Bolivia, Belarus, Burundi, Burma (Myanmar), Cote D’Ivoire (Ivory Coast), Crimea and Sevastopol, Cuba, Democratic Republic of Congo, Ecuador, Iran, Iraq, Liberia, Libya, Magnitsky, Mali, Morocco, Nepal, North Korea, Somalia, Sudan, Syria, Venezuela, Yemen, Zimbabwe",
    option2:
      "Confirming that you are NOT using cryptocurrencies assets on YAY GAMES that come from drug trade and illegal markets on the dark web and other sources marked by any country as illegal. In case it is found that your cryptocurrencies have such origins, you won't be allowed to use YAY GAMES platform in any use case.",
    button: "Continue",
  };
  const handleChangeCheckbox = (e: any) => {
    setChecked({ ...isChecked, [e.target.name]: !isChecked[e.target.name] });
  };

  return (
    <div>
      <AgreeMessage
        texts={texts}
        onClick={() => console.log("click")}
        disabled={isChecked.option1 === false || isChecked.option2 === false}
        isChecked={isChecked}
        handleChangeCheckbox={handleChangeCheckbox}
      />
    </div>
  );
};
