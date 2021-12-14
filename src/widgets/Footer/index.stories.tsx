import React from "react";
import Footer from "./Footer";
import { BrowserRouter } from "react-router-dom";

export default {
  title: "Widgets/Footer",
  component: Footer,
};

export const FooterBlock = () => {
  return (
    <BrowserRouter>
      <div style={{ maxWidth: "1440px", padding: "0 140px" }}>
        <Footer />
      </div>
    </BrowserRouter>
  );
};
