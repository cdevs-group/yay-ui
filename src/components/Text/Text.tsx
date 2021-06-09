import styled, { DefaultTheme } from "styled-components";
import { space, typography } from "styled-system";
import { TextProps, sizes } from "./types";

interface ThemedProps extends TextProps {
  theme: DefaultTheme;
}

const style = {
  [sizes.SM]: {
    fontSize: "13px",
    fontSizeLg: "16px",
  },
  [sizes.MD]: {
    fontSize: "15px",
    fontSizeLg: "19px",
  },
  [sizes.LG]: {
    fontSize: "19px",
    fontSizeLg: "24px",
  },
  [sizes.XL]: {
    fontSize: "24px",
    fontSizeLg: "30px",
  },
};

const Text = styled.div<TextProps>`
  font-size: ${({size}:any) => style[size || sizes.MD].fontSize};
  line-height: ${({size}:any) => style[size || sizes.MD].fontSizeLg};
  color:${({theme})=>theme.colors.text};
  font-weight: ${({ bold }) => (bold ? 700 : 500)};
  line-height: 1.5;
  ${space}
  ${typography}
`;

Text.defaultProps = {
  color: "text",
  small: false,
};

export default Text;
