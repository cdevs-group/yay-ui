import React from "react";
import styled from "styled-components";
import { LinkExternal } from "../../Link";
import { IPropsTopAndGhost } from "../types";
import GHOST from "./ghost.png";

const GhostCard = ({ href, children, text }: IPropsTopAndGhost) => {
  return (
    <Wrap>
      <Image>
        <img src={GHOST} alt="some img" />
      </Image>
      {children}
      <LinkExternal color="#47DA3B" small href={href}>
        {text || "Learn More"}
      </LinkExternal>
    </Wrap>
  );
};

export default GhostCard;

const Wrap = styled.div`
  padding: 5px 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
`;

const Image = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
