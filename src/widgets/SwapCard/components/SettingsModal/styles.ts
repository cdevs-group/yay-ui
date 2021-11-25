import { transparentize } from "polished";
import styled from "styled-components";
import { Variant } from "./types";
import { Text } from "../../../../components/Text";

export const StyledModal = styled.div`
  padding: 18px 8px;
  max-width: 404px;
  max-height: 100vh;
  min-width: 303px;
  width: 100%;
  background: ${({ theme }) => theme.colors.bgGray};
  box-shadow: 0px 20px 36px -8px rgba(14, 14, 44, 0.1), 0px 1px 1px rgba(0, 0, 0, 0.05);
  border-radius: 15px;
  z-index: ${({ theme }) => theme.zIndices.modal};
  overflow-y: auto;

  ${({ theme }) => theme.mediaQueries.xs} {
    min-width: 360px;
    width: 100%;
  }

  ${({ theme }) => theme.mediaQueries.sm} {
    min-width: 404px;
    width: 100%;
    padding: 27px 24px;
  }
`;
export const ModalTitle = styled.div`
  align-items: center;
  flex: 1;
  color: ${({ theme }) => theme.colors.text};
  font-weight: 500;
  font-size: 21px;
  line-height: 27px;
  letter-spacing: 0.5px;
`;
export const ModalHeader = styled.div`
  display: flex;
  margin-bottom: 32px;
  align-items: center;
  padding: 0;
`;
export const TextStyle = styled(Text)`
  margin-bottom: 15px;
  font-weight: normal;
  font-size: 15px;
  line-height: 19px;
  letter-spacing: 0.5px;
  color: ${({ theme }) => theme.colors.textGray};
`;
export const InputWrap = styled.div`
  margin-left: 10px;
`;
export const TabsWrap = styled.div`
  & button {
    padding: 7px 3px;
    font-size: 13px;

    ${({ theme }) => theme.mediaQueries.sm} {
      padding: 7px;
      font-size: 15px;
    }
  }
`;
export const Overlay = styled.div`
  pointer-events: none;
  display: block;
  background: ${({ theme }) => theme.colors.overlayBg};
  position: fixed;
  z-index: -1;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
`;
export const MessageStyle = styled.div`
  margin-bottom: 25px;
  padding: 18px 25px;
  border-radius: 12px;
  background: ${({ theme }) => theme.colors.bgGreenRgba};
`;
export const TextMessage = styled(Text)`
  font-weight: normal;
  font-size: 15px;
  line-height: 19px;
  letter-spacing: 0.5px;
  color: ${({ theme }) => theme.colors.green};
`;
export const TextLabel = styled(Text)`
  cursor: pointer;
`;

export const TabsWrapBlock = styled.div<{ length?: number; width?: string; variant?: Variant }>`
  display: grid;
  width: ${({ width }) => width || "auto"};
  grid-template-columns: ${({ length, variant }) => `repeat(${length || 2}, ${variant === "small" ? "auto" : "1fr"})`};
  background: ${({ theme }) => theme.colors.buttonBg};
  border-radius: 12px;
  box-shadow: ${({ theme }) => theme.colors.boxShadow4};
`;

export const Tab = styled.button<{ paddingTabs?: string; colorActive?: string; fontSize?: string; variant?: Variant }>`
  padding: ${({ paddingTabs }) => paddingTabs || "15px 16px"};
  border: none;
  background: transparent;
  border-radius: 12px;
  font-size: ${({ fontSize }) => fontSize || "15px"};
  line-height: 19px;
  font-weight: 500;
  text-align: center;
  letter-spacing: 0.5px;
  text-shadow: 0px 3px 4px rgba(0, 0, 0, 0.15);
  transition: 0.3s;
  cursor: pointer;
  color: ${({ theme }) => transparentize(0.3, theme.colors.text)};
  &.active {
    background: ${({ theme }) => transparentize(0.85, theme.colors.text)};
    color: ${({ theme, colorActive }) => colorActive || theme.colors.text};
  }
  ${({ theme }) => theme.mediaQueries.md} {
    padding: ${({ paddingTabs }) => paddingTabs || "15px 30px"};
  }
`;
