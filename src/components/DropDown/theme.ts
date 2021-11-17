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
};

export const styleVariantsButton = {
  [variants.MENU]: {
    justifyContent: "flex-start",
    "@media screen and (min-width: 968px)": {
      justifyContent: "center",
    },
  },
};
