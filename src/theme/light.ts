import { DefaultTheme } from "styled-components";
import { light as lightAlert } from "../components/Alert/theme";
import { light as lightCard } from "../components/Card/theme";
import { light as lightToggle } from "../components/Toggle/theme";
import { light as lightModal } from "../widgets/Modal/theme";
import base from "./base";
import { darkColors } from "./colors";

const lightTheme: DefaultTheme = {
  ...base,
  isDark: false,
  alert: lightAlert,
  colors: darkColors,
  card: lightCard,
  toggle: lightToggle,
  modal: lightModal,
};

export default lightTheme;
