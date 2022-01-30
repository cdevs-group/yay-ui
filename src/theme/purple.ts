import { DefaultTheme } from "styled-components";
import { purple as purpleAlert } from "../components/Alert/theme";
import { dark as darkCard } from "../components/Card/theme";
import { purple as purpleToggle } from "../components/Toggle/theme";
import { purple as purpleModal } from "../widgets/Modal/theme";
import base from "./base";
import { purpleColors } from "./colors";

const purpleTheme: DefaultTheme = {
  ...base,
  isDark: false,
  alert: purpleAlert,
  colors: purpleColors,
  card: darkCard,
  toggle: purpleToggle,
  modal: purpleModal,
};

export default purpleTheme;
