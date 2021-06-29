import React from "react";
import styled from "styled-components";
import { Button } from "../../../components/Button";
import { ITexts } from "../types";
import { OpenNewIcon } from "../../../components/Svg";

interface Props {
  children?: React.ReactNode;
  href: string;
  texts?: ITexts;
}

const RoundsLink = ({ texts, children, href }: Props) => {
  return (
    <>
      <Wrap>
        {children}
        <a href={href}>
          <ButtonBlock width="100%" variant="green" scale="md">
            {texts?.link || "View Reclaimed & Won"}
            <OpenNewIcon fill="rgba(0,0,0,0)" />
          </ButtonBlock>
        </a>
      </Wrap>
    </>
  );
};

export default RoundsLink;

const Wrap = styled.div`
  background: ${({ theme }) => theme.colors.cardBg};
  padding-bottom: 30px;
  position: relative;
  z-index: 1;
  &::before {
    position: absolute;
    display: block;
    content: "";
    width: 408px;
    left: -20px;
    top: 0;
    z-index: 0;
    height: 100%;
    background: ${({ theme }) => theme.colors.cardBg};
  }
`;

const ButtonBlock = styled(Button)`
  position: relative;
  z-index: 2;
`;
