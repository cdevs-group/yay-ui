import React from "react";
import styled from "styled-components";
import { IconButton } from "../../components/Button";
import { CloseIcon } from "../../components/Svg";
import { InjectedProps } from "./types";
import { Gift2 } from "../../constants/images";
import get from "lodash/get";
import { DefaultTheme, useTheme } from "styled-components";
import { Flex } from "../../components/Box";
import { layout, LayoutProps, space, SpaceProps } from "styled-system";

export interface Props extends InjectedProps, SpaceProps, LayoutProps {
  title?: string;
  hideCloseButton?: boolean;
  bodyPadding?: string;
  welcome?: boolean;
  image?: boolean;
  paddingTopHeader?: string;
  headerBackground?: string;
  style?: React.CSSProperties;
  maxWidth?: string;
  onBack?: () => void;
}

interface StyledModalProps extends SpaceProps {}

const getThemeValue =
  (path: string, fallback?: string | number) =>
  (theme: DefaultTheme): string =>
    get(theme, path, fallback);

export const ModalContent = styled.div<{ p?: string }>`
  position: relative;
  padding: ${({ p }) => p};
`;

export const ModalBody = styled(Flex)`
  flex-direction: column;
  max-height: 90vh;
  overflow-y: auto;
`;

export const StyledModal = styled.div<StyledModalProps>`
  max-width: 404px;
  max-height: 100vh;
  min-width: 303px;
  width: 100%;
  background: ${({ theme }) => theme.colors.bgGray};
  box-shadow: 0px 20px 36px -8px rgba(14, 14, 44, 0.1), 0px 1px 1px rgba(0, 0, 0, 0.05);
  border-radius: 15px;
  z-index: ${({ theme }) => theme.zIndices.modal};
  overflow-y: auto;
  ${space}
  ${layout}
  ${({ theme }) => theme.mediaQueries.xs} {
    min-width: 360px;
    width: 100%;
  }
  ${({ theme }) => theme.mediaQueries.sm} {
    min-width: 404px;
    width: 100%;
  }
`;

export const ModalHeader = styled.div<{ paddingTopHeader?: string; background?: string }>`
  display: flex;
  align-items: center;
  background: ${({ background }) => background || "transparent"};
  padding: ${({ paddingTopHeader }) => ` ${paddingTopHeader || "20px"} 14px 24px`};
  &.welcome {
    padding-bottom: 0;
  }
  ${({ theme }) => theme.mediaQueries.md} {
    padding: ${({ paddingTopHeader }) => ` ${paddingTopHeader || "27px"} 20px 40px 27px`};
    &.welcome {
      padding-bottom: 0;
    }
  }
`;

const ModalTitle = styled.div`
  align-items: center;
  flex: 1;
  color: ${({ theme }) => theme.colors.text};
`;

const Heading = styled.div`
  &.welcome {
    font-weight: 500;
    font-size: 21px;
    letter-spacing: 0.5px;
  }
`;

const Image = styled.div`
  position: absolute;
  top: 17px;
  left: 50%;
  transform: translateX(-50%);
`;

const Modal: React.FC<Props> = ({
  welcome,
  title,
  onDismiss,
  children,
  hideCloseButton = false,
  image,
  paddingTopHeader,
  headerBackground = "transparent",
  style,
  onBack,
  maxWidth,
  ...props
}) => {
  const theme = useTheme();
  return (
    <StyledModal {...props}>
      <ModalContent>
        <ModalHeader
          className={welcome ? "welcome" : ""}
          paddingTopHeader={paddingTopHeader}
          background={getThemeValue(`colors.${headerBackground}`, headerBackground)(theme)}
        >
          <ModalTitle>
            <Heading className={welcome ? "welcome" : ""}>{title}</Heading>
          </ModalTitle>
          {image ? (
            <Image>
              <img src={Gift2} alt="" />
            </Image>
          ) : null}
          {onBack && (
            <IconButton variant="text" onClick={onDismiss} aria-label="Close the dialog">
              button to back
            </IconButton>
          )}
          {!hideCloseButton && (
            <IconButton variant="text" onClick={onDismiss} aria-label="Close the dialog">
              <CloseIcon />
            </IconButton>
          )}
        </ModalHeader>
        {children}
      </ModalContent>
    </StyledModal>
  );
};

export default Modal;
