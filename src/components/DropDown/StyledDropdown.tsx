import styled from "styled-components";
import { variant } from "styled-system";
import { styleVariants } from "./theme";
import { Variant } from "./types";

const StyledDropdown = styled.div<{ variant?: Variant }>`
  position: absolute;
  width: 100%;
  margin-top: 18px;
  border-radius: 5px;
  transition: 0.3s;
  z-index: -1;
  opacity: 0;
  overflow-y: auto;
  pointer-events: none;
  max-height: 260px;
  &.open {
    transition: 0.3s;
    z-index: 10;
    opacity: 1;
    margin-top: 4px;
    pointer-events: all;
  }
  ${variant({
    variants: styleVariants,
  })}
`;

export default StyledDropdown;
