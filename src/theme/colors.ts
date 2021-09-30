import { Colors } from "./types";
import { boxShadow } from "styled-system";

export const baseColors = {
  failure: "#ED4B9E",
  primary: "#1FC7D4",
  primaryBright: "#53DEE9",
  primaryDark: "#0098A1",
  secondary: "#7645D9",
  success: "#31D0AA",
  warning: "#FFB237",
  blueGradient: "linear-gradient(180deg, #0064C0 0%, #0056A5 100%)",
  dark2: "#1C1C1C",

  green: "#4BE43E",
  textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
  textShadow2: "0px 4px 7px rgba(0, 0, 0, 0.15)",
  textShadow3: "0px 3px 4px rgba(0, 0, 0, 0.15)",
  boxShadow: "inset 0px 4px 4px rgba(0, 0, 0, 0.2)",
  boxShadow2: "0px 4px 10px rgba(0, 0, 0, 0.25)",
  boxShadow6: "0px 4px 10px rgba(75, 228, 62, 0.25)",
  boxShadow8: "0px 20px 36px -8px rgba(14, 14, 44, 0.1), 0px 1px 1px rgba(0, 0, 0, 0.05)",
  boxShadow9: "0px 0px 20px rgba(86, 239, 75, 0.35)",
  boxShadow10: "inset 0px 4px 4px rgba(0, 0, 0, 0.25)",
  filterShadow: "drop-shadow(-3px 0px 8px rgba(0, 0, 0, 0.25))",
  bgOpacity: "rgba(0, 0, 0, 0.3)",
  bgOpacity2: "rgba(0, 0, 0, 0.05)",
  bgOpacitY3: " rgba(255, 255, 255, 0.05)",
  bgBlackRgba: "rgba(43, 43, 50, .7)",
  textGray: "#A3A3A3",
  bgGray: "#26262D",
  bgGrey2: "#252525",
  greenGradient: "linear-gradient(180deg, #4CEE3E -16%, #47DA3B 100%)",
  text2: "#F3F3F3",
  darkPink: "#FF6161",
  whiteRgba: "rgba(255, 255, 255, 0.15)",
  whiteRgba2: "rgba(255, 255, 255, 0.2)",
  greenGradient2: "linear-gradient(180deg, rgba(76, 238, 62, 0.21) -16%, #47da3b 100%)",
  greenGradient3: "linear-gradient(107.51deg, #9BE43E 26.63%, #39DB2C 73.7%)",
  greenRgba: "rgba(86, 239, 75, 0.5)",
  greeanRgba2: "rgba(75, 228, 62, 0.08)",
  redRgba: "rgba(255, 97, 97, 0.15)",
  textGray2: "#9A9191",
  bgCard: "#404047",
  bgCard2: "#232323",
  bgCard3: "#393939",
  bgCard4: "#1C1C1C",
  cardShadow: "box-shadow: 0px 4px 22px rgba(0, 0, 0, 0.31)",
  yellow: "#FFEA2C",
  bgHeader: "#2B2B32",
  buttonBg2: "#1B1B20",
  buttonBg3: "#1C1C22",
  bgCardBtc: "linear-gradient(180deg, #8A92B2 0%, #62688F 100%)",
  colorCardBtc: "#8A92B2",
  bgCardBtc2: "#FFAC01",
  yellowGradient: "linear-gradient(180deg, #FFC700 -23.33%, #FF8A00 118.33%);",
  yellowGradient2: "linear-gradient(180deg, #FFB601 -16%, #FF9B01 100%)",
  yellowGradient3: "linear-gradient(180deg, #FFEA2C 0%, #FFB72C 100%)",
  greyRgba: "rgba(0, 0, 0, 0.15)",
  greyRgba2: "rgba(38, 38, 45, .5)",
  blur: "-webkit-filter: blur(15px);\n filter: blur(15px); \n  -ms-filter: blur(15px);",
};

export const brandColors = {
  binance: "#F0B90B",
};

// export const darkColors: Colors = {
export const lightColors: Colors = {
  ...baseColors,
  ...brandColors,

  background: "linear-gradient(180deg, #1B1B22 0%, #0E0E15 100%)",
  background2: "#17171c",
  overlayBg: "rgba(0, 0, 0, 0.7)",
  linkColor: "linear-gradient(180deg, #4CEE3E -16%, #47DA3B 100%)",
  buttonBg: "rgba(0, 0, 0, 0.25)",
  buttonShadow: "rgba(0, 0, 0, 0.2)",

  cardBg: "#26262D",
  greyText: "#A3A3A3",
  greyText2: "#9A9191",
  greyText3: "#BCBCBC",
  darkGreyBg: "#1d1d22",
  text: "#fff",
  greenText: "#4AE43D",
  orangeBg: "#FF9525",
  greenBg: "#69E35F",
  greenBg2: "#56EF4B",
  greyBg2: "#201e1e",
  redBg: "#FF6161",
  yellowBg: "#ECCB57",
  lightGreyBg: "#C0C0C0",
  yellowBg2: "#FFB72C",
  boxShadow3: "-4px -3px 8px rgba(0, 0, 0, 0.25)",
  boxShadow4: "inset 0px 4px 4px rgba(0, 0, 0, 0.2)",
  boxShadow5: "0px 3px 4px rgba(0, 0, 0, 0.15)",
  boxShadow7: "inset 0px 1px 8px rgba(0, 0, 0, 0.19)",
  blackColor: "#000",
  greenText2: "#47DA3B",

  backgroundDisabled: "#3c3742",
  contrast: "#FFFFFF",
  invertedContrast: "#000",
  input: "#483f5a",
  inputSecondary: "#66578D",
  primaryDark: "#0098A1",
  tertiary: "#353547",
  textDisabled: "#666171",
  textSubtle: "#A28BD4",
  borderColor: "#524B63",
  card: "#FFFFFF",
  panel: "#2E2E35",
  dark: "#26262D",
  gradients: {
    greenGradient: "linear-gradient(180deg, rgba(76, 238, 62, 0.15) -16%, rgba(71, 218, 59, 0.15) 100%)",
    bubblegum: "linear-gradient(139.73deg, #313D5C 0%, #3D2A54 100%)",
  },
};
// export const lightColors: Colors = {
export const darkColors: Colors = {
  ...baseColors,
  ...brandColors,

  background: "#FAF9FA",
  background2: "#17171c",
  overlayBg: "rgba(0, 0, 0, 0.7)",
  linkColor: "linear-gradient(180deg, #4CEE3E -16%, #47DA3B 100%)",
  buttonBg: "rgba(0, 0, 0, 0.25)",
  buttonShadow: "rgba(0, 0, 0, 0.2)",

  cardBg: "#26262D",
  greyText: "#A3A3A3",
  darkGreyBg: "#1d1d22",
  greyText2: "#9A9191",
  greyText3: "#BCBCBC",
  text: "#fff",
  greenText: "#4AE43D",
  orangeBg: "#FF9525",
  greenBg: "#69E35F",
  greenBg2: "#56EF4B",
  greyBg2: "#201e1e",
  redBg: "#FF6161",
  yellowBg: "#ECCB57",
  lightGreyBg: "#C0C0C0",
  yellowBg2: "#FFB72C",

  boxShadow3: "-4px -3px 8px rgba(0, 0, 0, 0.25)",
  boxShadow4: "inset 0px 4px 4px rgba(0, 0, 0, 0.2)",
  boxShadow5: "inset 0px 4px 4px rgba(0, 0, 0, 0.2)",
  boxShadow7: "inset 0px 1px 8px rgba(0, 0, 0, 0.19)",

  blackColor: "#000",
  greenText2: "47DA3B",

  backgroundDisabled: "rgba(255,255,255,.15)",
  contrast: "#000",
  invertedContrast: "#FFFFFF",
  input: "#eeeaf4",
  inputSecondary: "#d7caec",
  tertiary: "#EFF4F5",
  textDisabled: "#BDC2C4",
  textSubtle: "#8f80ba",
  borderColor: "#E9EAEB",
  card: "#26262D",
  panel: "#2E2E35",
  dark: "#26262D",
  gradients: {
    greenGradient: "linear-gradient(180deg, rgba(76, 238, 62, 0.15) -16%, rgba(71, 218, 59, 0.15) 100%)",
    bubblegum: "linear-gradient(139.73deg, #E6FDFF 0%, #F3EFFF 100%)",
  },
};
