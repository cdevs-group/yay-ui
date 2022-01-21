import styled from "styled-components";
import { layout, position, variant } from "styled-system";
import { styleVariants } from "./theme";
import { Variant, variants } from "./types";

const StyledDropdown = styled.div<{ variant?: Variant; plusMarginTop?: number }>`
  position: absolute;
  width: 100%;
  margin-top: 18px;
  border-radius: 5px;
  transition: 0.3s;
  z-index: -1;
  opacity: 0;
  overflow-y: auto;
  pointer-events: none;
  max-height: ${({ plusMarginTop, variant }) =>
    variant === variants.CENTER_BEHIND ? `calc(100vh - ${59 + (plusMarginTop || 0)}px)` : "260px"};
  top: ${({ plusMarginTop, variant }) =>
    variant === variants.CENTER_BEHIND ? `${59 + (plusMarginTop || 0)}px` : "auto"};
  &.open {
    transition: 0.3s;
    z-index: 10;
    opacity: 1;
    margin-top: 4px;
    pointer-events: all;
  }
  ${({ theme }) => theme.mediaQueries.xl} {
    top: ${({ plusMarginTop, variant }) =>
      variant === variants.CENTER_BEHIND ? `${80 + (plusMarginTop || 0)}px` : "auto"};
  }
  ${variant({
    variants: styleVariants,
  })}
  ${position}
  ${layout}
`;

export default StyledDropdown;
