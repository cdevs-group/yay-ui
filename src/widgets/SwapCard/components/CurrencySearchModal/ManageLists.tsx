import React, { memo, useCallback, useMemo, useState, useEffect } from "react";
import styled from "styled-components";
import Column, { AutoColumn } from "../../../../components/Layout/Column";
import Row, { RowFixed, RowBetween } from "../../../../components/Layout/Row";
import { Button } from "../../../../components/Button";
import { Text } from "../../../../components/Text";
import { Input } from "../../../../components/Input";
import { CheckIcon, CogIcon } from "../../../../components/Svg";
import { BaseToggle } from "../../../../components/Toggle";
import { LinkExternal } from "../../../../components/Link";
import { useTooltip } from "../../../..";
import { ListRowTotalProps, ManageListsProps } from "./types";

function listVersionLabel(version: any): string {
  return `v${version.major}.${version.minor}.${version.patch}`;
}

const Wrapper = styled(Column)`
  width: 100%;
  height: 100%;
`;

const RowWrapper = styled(Row)<{ active: boolean }>`
  transition: 200ms;
  align-items: center;
  margin-bottom: 10px;
`;

function listUrlRowHTMLId(listUrl: string) {
  return `list-row-${listUrl.replace(/\./g, "-")}`;
}

const ListRow = memo(function ListRow({
  listUrl,
  list,
  texts,
  handleAcceptListUpdate,
  handleRemoveList,
  disabledButtonRemove,
  pending,
  isActive,
  handleDisableList,
  handleEnableList,
  listLogoRow,
}: ListRowTotalProps) {
  const { targetRef, tooltip, tooltipVisible } = useTooltip(
    <div>
      <Text>{list && listVersionLabel(list.version)}</Text>
      <LinkExternal external href={`https://tokenlists.org/token-list?url=${listUrl}`}>
        {texts.see}
      </LinkExternal>
      <Button variant="option" scale="xs" onClick={handleRemoveList} disabled={disabledButtonRemove}>
        {texts.remove}
      </Button>
      {pending && (
        <Button variant="text" onClick={handleAcceptListUpdate} style={{ fontSize: "12px" }}>
          {texts.updateList}
        </Button>
      )}
    </div>,
    { placement: "right-end", trigger: "click" }
  );

  if (!list) return null;

  return (
    <RowWrapper active={isActive} key={listUrl} id={listUrlRowHTMLId(listUrl)}>
      {tooltipVisible && tooltip}
      {list.logoURI ? listLogoRow : <div style={{ width: "24px", height: "24px", marginRight: "1rem" }} />}
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
      <BaseToggle
        checked={isActive}
        onChange={() => {
          if (isActive) {
            handleDisableList();
          } else {
            handleEnableList();
          }
        }}
      />
    </RowWrapper>
  );
});

const ListContainer = styled.div`
  padding: 1rem 0;
  height: 100%;
`;

function ManageLists({
  tempList,
  addError,
  lists,
  activeListUrls,
  listUrlInput,
  setListUrlInput,
  texts,
  unsupportedListUrls,
  listLogo,
  handleImport,
  listRowProps,
}: ManageListsProps) {
  const [activeCopy, setActiveCopy] = useState<string[] | undefined>();

  useEffect(() => {
    if (!activeCopy && activeListUrls) {
      setActiveCopy(activeListUrls);
    }
  }, [activeCopy, activeListUrls]);

  const handleInput = useCallback((e) => {
    setListUrlInput(e.target.value);
  }, []);

  const sortedLists = useMemo(() => {
    const listUrls = Object.keys(lists);
    return listUrls
      .filter((listUrl) => {
        // only show loaded lists, hide unsupported lists
        return Boolean(lists[listUrl].current) && !unsupportedListUrls.includes(listUrl);
      })
      .sort((u1, u2) => {
        const { current: l1 } = lists[u1];
        const { current: l2 } = lists[u2];

        // first filter on active lists
        if (activeCopy?.includes(u1) && !activeCopy?.includes(u2)) {
          return -1;
        }
        if (!activeCopy?.includes(u1) && activeCopy?.includes(u2)) {
          return 1;
        }

        if (l1 && l2) {
          return l1.name.toLowerCase() < l2.name.toLowerCase()
            ? -1
            : l1.name.toLowerCase() === l2.name.toLowerCase()
            ? 0
            : 1;
        }
        if (l1) return -1;
        if (l2) return 1;
        return 0;
      });
  }, [lists, activeCopy]);

  // check if list is already imported
  const isImported = Object.keys(lists).includes(listUrlInput);

  return (
    <Wrapper>
      <AutoColumn gap="14px">
        <Row>
          <Input
            id="list-add-input"
            scale="lg"
            placeholder={texts.placeholder}
            value={listUrlInput}
            onChange={handleInput}
            background="rgba(0, 0, 0, 0.25)"
            padding="16px 23px"
            placeholderOpacity
            boxShadow="inset 0px 4px 4px rgba(0, 0, 0, 0.2)"
          />
        </Row>
        {addError ? (
          <Text color="redBg" fontSize="11px" style={{ textOverflow: "ellipsis", overflow: "hidden" }}>
            {addError}
          </Text>
        ) : null}
      </AutoColumn>
      {tempList && (
        <AutoColumn style={{ paddingTop: 0, marginTop: 20 }}>
          <div>
            <RowBetween>
              <RowFixed>
                {tempList.logoURI && listLogo}
                <AutoColumn gap="4px" style={{ marginLeft: "20px" }}>
                  <Text bold>{tempList.name}</Text>
                  <Text color="text" fontSize="11px" textTransform="lowercase">
                    {tempList.tokens.length} {texts.tokens}
                  </Text>
                </AutoColumn>
              </RowFixed>
              {isImported ? (
                <RowFixed>
                  <CheckIcon width="16px" style={{ marginRight: 10 }} />
                  <Text>{texts.loaded}</Text>
                </RowFixed>
              ) : (
                <Button width="fit-content" variant="text" scale="sm" onClick={handleImport}>
                  {texts.import}
                </Button>
              )}
            </RowBetween>
          </div>
        </AutoColumn>
      )}
      <ListContainer>
        <AutoColumn gap="md">
          {sortedLists.map((listUrl) => (
            <ListRow key={listUrl} listUrl={listUrl} {...listRowProps} />
          ))}
        </AutoColumn>
      </ListContainer>
    </Wrapper>
  );
}

export default ManageLists;
