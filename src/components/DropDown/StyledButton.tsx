import styled from "styled-components";
import { variant } from "styled-system";
import { styleVariantsButton } from "./theme";
import { Variant } from "./types";

const StyledButton = styled.div<{ variant?: Variant }>`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background: none;
  padding: 0;
  ${variant({
    variants: styleVariantsButton,
  })}
`;

export default StyledButton;
