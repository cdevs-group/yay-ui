import { variants as variantsDropdown } from "../../../components/DropDown/types";

export const styleVariantsDropdownMenu = {
  [variantsDropdown.BEHIND]: {
    background: "linear-gradient(0deg, #2E2E35, #2E2E35), #141419",
    borderRadius: "12px",
    "@media screen and (min-width: 1080px)": {
      borderRadius: "0 0 12px 12px",
    },
  },
};
