import { Colors } from "./types";

export const baseColors = {
  failure: "#ED4B9E",
  primary: "#1FC7D4",
  primaryBright: "#53DEE9",
  primaryDark: "#0098A1",
  secondary: "#7645D9",
  success: "#31D0AA",
  warning: "#FFB237",

  
  green:"#4BE43E",
  textShadow:"0px 4px 4px rgba(0, 0, 0, 0.25)",
  textShadow2:"0px 4px 7px rgba(0, 0, 0, 0.15)",
  boxShadow:"inset 0px 4px 4px rgba(0, 0, 0, 0.2)",
  boxShadow2:"0px 4px 10px rgba(0, 0, 0, 0.25)",
  bgOpacity:"rgba(0, 0, 0, 0.3)",
  bgBlackRgba:"rgba(43, 43, 50, .7)",
  textGray:"#A3A3A3",
  bgGray:"#26262D",
  greenGradient:"linear-gradient(180deg, #4CEE3E -16%, #47DA3B 100%)",
  text2:"F3F3F3",
  darkPink:"#FF6161",
  whiteRgba:"rgba(255, 255, 255, 0.15)",
  greenGradient2:"linear-gradient(180deg, rgba(76, 238, 62, 0.21) -16%, #47da3b 100%)",
};

export const brandColors = {
  binance: "#F0B90B",
};

export const darkColors: Colors = {
// export const lightColors: Colors = {
  ...baseColors,
  ...brandColors,

  background: "linear-gradient(180deg, #1B1B22 0%, #0E0E15 100%)",
  overlayBg: "rgba(0, 0, 0, 0.7)",   
  linkColor: "linear-gradient(180deg, #4CEE3E -16%, #47DA3B 100%)", 
  buttonBg: "rgba(0, 0, 0, 0.25)", 
  buttonShadow: "rgba(0, 0, 0, 0.2)",

  cardBg: "#26262D",
  greyText: "#A3A3A3",
  darkGreyBg: "#1d1d22",
  text: "#fff",
  greenText: "#4AE43D",
  orangeBg: "#FF9525",
  greenBg: "#69E35F",
  redBg: "#FF6161",
  yellowBg: "#ECCB57",
  lightGreyBg: "#C0C0C0",


  boxShadow3: "-4px -3px 8px rgba(0, 0, 0, 0.25)",
  boxShadow4: "inset 0px 4px 4px rgba(0, 0, 0, 0.2)",
  blackColor: "#000",
  greenText2: "47DA3B",


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
  dark: '#26262D',
  gradients: {
    greenGradient: "linear-gradient(180deg, rgba(76, 238, 62, 0.15) -16%, rgba(71, 218, 59, 0.15) 100%)",
    bubblegum: "linear-gradient(139.73deg, #313D5C 0%, #3D2A54 100%)",
  },

};
export const lightColors: Colors = {
// export const darkColors: Colors = {
  ...baseColors,
  ...brandColors,  
  
  background: "#FAF9FA",
  overlayBg: "rgba(0, 0, 0, 0.7)", 
  linkColor: "linear-gradient(180deg, #4CEE3E -16%, #47DA3B 100%)", 
  buttonBg: "rgba(0, 0, 0, 0.25)", 
  buttonShadow: "rgba(0, 0, 0, 0.2)",

  cardBg: "#26262D",
  greyText: "#A3A3A3",
  darkGreyBg: "#1d1d22",
  text: "#fff",
  greenText: "#4AE43D",
  orangeBg: "#FF9525",
  greenBg: "#69E35F",
  redBg: "#FF6161",
  yellowBg: "#ECCB57",
  lightGreyBg: "#C0C0C0",

  boxShadow3: "-4px -3px 8px rgba(0, 0, 0, 0.25)",
  boxShadow4: "inset 0px 4px 4px rgba(0, 0, 0, 0.2)",
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
  dark: '#26262D',
  gradients: {
    greenGradient: "linear-gradient(180deg, rgba(76, 238, 62, 0.15) -16%, rgba(71, 218, 59, 0.15) 100%)",
    bubblegum: "linear-gradient(139.73deg, #E6FDFF 0%, #F3EFFF 100%)",
  },
};
