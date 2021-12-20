import { variants } from "./types";

export const styleVariants = {
  [variants.MENU]: {
    position: "static",
    overflow: "hidden",
    marginTop: 0,
    maxHeight: 0,
    "&.open": {
      marginTop: 0,
      marginBottom: 18,
      maxHeight: 500,
    },
    "@media screen and (min-width: 1080px)": {
      position: "absolute",
      left: 35,
      marginTop: 16,
      overflow: "visible",
      "&.open": {
        marginTop: 10,
        marginBottom: 0,
      },
    },
  },
  [variants.BEHIND]: {
    position: "static",
    overflow: "visible",
    marginTop: 0,
    borderRadius: 12,
    maxHeight: 0,
    "&.open": {
      maxHeight: 500,
      marginTop: -10,
      marginBottom: 20,
      overflow: "visible",
    },
    "@media screen and (min-width: 1080px)": {
      position: "absolute",
      left: 18,
      top: 48,
      borderRadius: "0 0 12px 12px",
      transform: "translate(0,-50%) scaleY(0)",
      "&.open": {
        transform: "translate(0,0)",
        position: "absolute",
        maxHeight: "auto",
        marginBottom: 0,
        marginTop: 0,
      },
    },
    "@media screen and (min-width: 1300px)": {
      left: 35,
    },
  },
  [variants.CENTER_BEHIND]: {
    position: "fixed",
    right: 0,
    overflow: "visible",
    marginTop: 0,
    borderRadius: "0 0 9px 9px",
    maxWidth: 420,
    transform: "translate(0,-50%) scaleY(0)",
    "&.open": {
      marginTop: 0,
      marginBottom: 0,
      overflow: "visible",
      overflowY: "auto",
      transform: "translate(0,0)",
    },
    "@media screen and (min-width: 1440px)": {
      position: "absolute",
      top: 57,
      right: "auto",
      left: "50%",
      maxWidth: "100%",
      minWidth: 420,
      transform: "translate(-50%,-50%) scaleY(0)",
      "&.open": {
        transform: "translate(-50%,0)",
        marginBottom: 0,
        marginTop: 0,
      },
    },
  },
  [variants.VISIBLE]: {
    overflow: "visible",
  },
};

export const styleVariantsButton = {
  [variants.MENU]: {
    justifyContent: "flex-start",
    "@media screen and (min-width: 1080px)": {
      justifyContent: "center",
    },
  },
  [variants.BEHIND]: {
    justifyContent: "flex-start",
  },
};
