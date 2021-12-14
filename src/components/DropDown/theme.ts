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
    "@media screen and (min-width: 968px)": {
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
    left: 35,
    top: 48,
    overflow: "visible",
    marginTop: 0,
    borderRadius: '0 0 12px 12px',
    transform: 'translate(0,-50%) scaleY(0)',
    "&.open": {
      transform: 'translate(0,0)',
      position: "absolute",
      left: 35,
      marginTop: 0,
      overflow: "visible",
    },
  }
};

export const styleVariantsButton = {
  [variants.MENU]: {
    justifyContent: "flex-start",
    "@media screen and (min-width: 968px)": {
      justifyContent: "center",
    },
  },
};
