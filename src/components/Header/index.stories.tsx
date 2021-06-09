import React from "react";
import Header from "./Header";
// import { ReactComponent as LogoIcon } from './logo.svg'; 

export default {
  title: "Components/Header",
  component: Header,
  argTypes: {isAuth:Boolean},
};

export const HeaderDefault: React.FC = () => {
  return (
<>    <div>
      <Header isAuth/>
      </div>
        
      <div style={{marginTop:'50px'}}>
      <Header isAuth={false}/>
    </div>
</>
  );
};
