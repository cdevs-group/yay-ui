import React, { useState } from "react";
import styled from "styled-components";
import { ButtonMenu, ButtonMenuItem } from "../ButtonMenu";

const StyledButtonMenu = styled(ButtonMenu)`
  width: 100%;
`;

export default function Manage({
  manageLists,
  manageTokens,
  texts,
}: {
  manageLists: React.ReactNode;
  manageTokens: React.ReactNode;
  texts: {
    lists: string;
    tokens: string;
  };
}) {
  const [showLists, setShowLists] = useState(true);

  return (
    <div>
      <StyledButtonMenu
        activeIndex={showLists ? 0 : 1}
        onItemClick={() => setShowLists((prev) => !prev)}
        scale="sm"
        mb="32px"
      >
        <ButtonMenuItem width="50%">{texts.lists}</ButtonMenuItem>
        <ButtonMenuItem width="50%">{texts.tokens}</ButtonMenuItem>
      </StyledButtonMenu>
      {showLists ? manageLists : manageTokens}
    </div>
  );
}
