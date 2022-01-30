import styled from "styled-components";
import { layout, LayoutProps } from "styled-system";

export const CardWrapper = styled.div<LayoutProps>`
  position: relative;
  width: 100%;
  max-width: 261px;
  margin: 0 auto;
  border-radius: 16px;
  ${layout}
`;

export const CardHover = styled.div<{ colorTheme?: string }>`
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  width: 100%;
  height: 100%;
  border-radius: inherit;
  border: 2px solid ${({ theme, colorTheme }) => colorTheme || theme.colors.green};
  transform: rotate(0deg);
  transition: 0.5s;
  opacity: 0;
  z-index: 0;
  will-change: transform, opacity, width;

  ${CardWrapper}:hover & {
    width: calc(100% + 6px);
    opacity: 0.3;
    transition: 0.5s;
    transform: translate(-11px, 9px) rotate(3.42deg);
  }
  &::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    display: block;
    width: calc(100% + 8px);
    height: calc(100% + 8px);
    border-radius: inherit;
    box-shadow: 1px 100px 93px 8px rgba(27, 27, 34, 0.9) inset;
    transform: translate(-50%, -50%);
  }
`;
