import React, { ReactNode } from "react";
import styled from "styled-components";
import Column from "../../../../components/Layouts/Column";
import Row, { RowFixed } from "../../../../components/Layouts/Row";
import { Text } from "../../../../components/Text";
import { CogIcon } from "../../../../components/Svg";
import { BaseToggle } from "../../../../components/Toggle";

function ManageListRow({
  tooltipVisible,
  tooltip,
  targetRef,
  isActive,
  onChangeBaseToggle,
  list,
  listUrl,
  listLogo,
  texts,
}: {
  tooltipVisible: boolean;
  tooltip: ReactNode;
  targetRef: React.Dispatch<React.SetStateAction<HTMLElement | null>>;
  isActive: boolean;
  onChangeBaseToggle: () => void;
  list: any;
  listUrl: string;
  listLogo: ReactNode;
  texts: {
    tokens: string;
  };
}) {
  function listUrlRowHTMLId(listUrl: string) {
    return `list-row-${listUrl.replace(/\./g, "-")}`;
  }

  return (
    <RowWrapper active={isActive} key={listUrl} id={listUrlRowHTMLId(listUrl)}>
      {tooltipVisible && tooltip}
      {list.logoURI ? listLogo : <div style={{ width: "24px", height: "24px", marginRight: "1rem" }} />}
      <Column style={{ flex: "1" }}>
        <Row>
          <Text>{list.name}</Text>
        </Row>
        <RowFixed mt="4px">
          <Text fontSize="11px" mr="6px" textTransform="lowercase">
            {list.tokens.length} {texts.tokens}
          </Text>
          <span ref={targetRef}>
            <CogIcon color="text" width="12px" />
          </span>
        </RowFixed>
      </Column>
      <BaseToggle checked={isActive} onChange={onChangeBaseToggle} />
    </RowWrapper>
  );
}

export default ManageListRow;

const RowWrapper = styled(Row)<{ active: boolean }>`
  transition: 200ms;
  align-items: center;
  margin-bottom: 10px;
`;
