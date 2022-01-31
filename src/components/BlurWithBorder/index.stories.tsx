import React, { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import { Flex } from "../../components/Box";
import BlurWithBorder, { NoticeBridgeType } from "./BlurWithBorder";
import { dark } from "../../theme";

export default {
  title: "Components/BlurWithBorder",
  component: [BlurWithBorder],
};

export const Default: React.FC = () => {
  return (
    <ThemeProvider theme={dark}>
      <Flex>
        <div style={{ width: "300px", marginTop: "50px", marginRight: 50, position: "relative", height: 300 }}>
          <BlurWithBorder noticeType={NoticeBridgeType.SUCCESS} />
        </div>
        <div style={{ width: "300px", marginTop: "50px", position: "relative", height: 300 }}>
          <BlurWithBorder noticeType={NoticeBridgeType.ERROR} />
        </div>
      </Flex>
    </ThemeProvider>
  );
};
