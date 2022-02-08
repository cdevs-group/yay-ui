import React from "react";
import { RegisterProfile } from "./index";

export default {
  title: "Widgets/Register",
};

export const RegisterProfileBlock = () => {
  return (
    <RegisterProfile
      handleSubmit={(e) => {
        e.preventDefault();
        console.log("ds");
      }}
      title="Welcome to YAY Games -"
      description="The decentralized GameFi ecosystem"
      onChange={(e: any) => null}
      inputValue1=""
      inputValue2=""
      inputName1=""
      inputName2=""
      inputError1=""
      inputError2=""
      loginInputDisabled
      sponsorInputDisabled={false}
      texts={{
        inputTitle1: "Your login",
        inputTitle2: "Your sponsor",
        inputPlaceholder1: "Enter your login",
        inputPlaceholder2: "Ivan1337_PRO100Blockchain",
        buttonText: "Register",
      }}
      buttonProps={{ spin: false, disabled: false }}
    />
  );
};
