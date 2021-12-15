import React from "react";
import Footer from "./Footer";
import { BrowserRouter } from "react-router-dom";
import { background } from "styled-system";

export default {
  title: "Widgets/Footer",
  component: Footer,
};

export const FooterBlock = () => {
  return (
    <BrowserRouter>
      <div style={{ maxWidth: "1440px", padding: "0 20px", background: "#000" }}>
        <Footer />
      </div>
    </BrowserRouter>
  );
};
