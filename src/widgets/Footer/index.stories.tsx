import React from "react";
import Footer from "./Footer";
import { BrowserRouter } from "react-router-dom";
import { aboutData, companyData, socialData, tokenData } from "./config";
import { baseColors } from "../../theme/colors";
import { LOGO_LOOT } from "../../constants/images";

export default {
  title: "Widgets/Footer",
  component: Footer,
};

export const FooterBlock = () => {
  const texts = {
    stayLoop: "Stay in the loop",
    enterEmail: "Enter your email",
    buyYAY: "Buy YAY",
    signUp: "Sign Up",
    joinOur:
      "Join our mailing list to stay in the loop with our newest feature releases, NFT drops, and tips and tricks for navigating YAY Games.",
    reserved: "© 2021 YAY Games | All Rights Reserved",
  };

  return (
    <BrowserRouter>
      <div style={{ maxWidth: "1440px", padding: "0 20px" }}>
        <Footer
          logoImg={LOGO_LOOT}
          valueInput={""}
          handleInput={(e: any) => console.log(e)}
          handleBuy={() => console.log("buy")}
          handleSignIn={() => console.log("signin")}
          socialData={socialData}
          tokenData={tokenData}
          aboutData={aboutData}
          companyData={companyData}
          texts={texts}
          disabledInput
          disabledSignUp
        />
      </div>
    </BrowserRouter>
  );
};
