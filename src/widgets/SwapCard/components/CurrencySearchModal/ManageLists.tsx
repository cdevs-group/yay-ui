import React, { useCallback, useState, useEffect } from "react";
import styled from "styled-components";
import Column, { AutoColumn } from "../../../../components/Layouts/Column";
import Row, { RowFixed, RowBetween } from "../../../../components/Layouts/Row";
import { Button } from "../../../../components/Button";
import { Text } from "../../../../components/Text";
import { Input } from "../../../../components/Input";
import { CheckIcon } from "../../../../components/Svg";
import { ManageListsProps } from "./types";

const Wrapper = styled(Column)`
  width: 100%;
  height: 100%;
`;

const ListContainer = styled.div`
  padding: 1rem 0;
  height: 100%;
`;

function ManageLists({
  tempList,
  addError,
  isImported,
  handleInput,
  listUrlInput,
  texts,
  listLogo,
  handleImport,
  children,
}: ManageListsProps) {
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
        <AutoColumn gap="md">{children}</AutoColumn>
      </ListContainer>
    </Wrapper>
  );
}

export default ManageLists;
