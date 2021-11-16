import { variants } from "./types";

export const styleVariantsTab = {
  [variants.SMALL]: {
    fontSize: 11,
    lineHeight: "14px",
    padding: "9px 6px",
    borderRadius: 8,
    "@media screen and (min-width: 852px)": {
      padding: "9px",
      '&.active': {
        padding: "9px 20px",
      }
    },
  },
};

export const styleVariantsTabs = {
  [variants.SMALL]: {
    borderRadius: 8,
  },
};
