import React from "react";
import Header from "./components/Header";
// import { ReactComponent as LogoIcon } from './logo.svg'; 

export default {
  title: "Components/Header",
  component: Header,
  argTypes: {isAuth:Boolean},
};

export const HeaderDefault: React.FC = () => {
  const accName = 'dtyf3465fdv3duy34g87d347irfh34fuy3487fh3f4g34gf87g';

  return (
<>    <div>
      <Header isAuth accName={accName}/>
      </div>
      <div style={{marginTop:'50px'}}>
      <Header isAuth={false}/>
    </div>
</>
  );
};
