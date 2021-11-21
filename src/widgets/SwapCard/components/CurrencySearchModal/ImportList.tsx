import { transparentize } from "polished";
import React, { useState } from "react";
import styled from "styled-components";
import { Button, CheckboxInput, Flex, Link, Text } from "../../../..";
import { AutoColumn } from "../../../../components/Layout/Column";
import { RowBetween, RowFixed } from "../../../../components/Layout/Row";

interface ImportProps {
  listURL: string;
  list: any;
  listLogo: React.ReactNode;
  handleAddList: () => void;
  addError: string | null;
  texts: {
    tokens: string;
    import: string;
    adding: string;
    iUnderstand: string;
    importRisk: string;
    byAdding: string;
  };
}

const Wrapper = styled.div`
  position: relative;
  width: 100%;
`;

const TextDot = styled.div`
  height: 3px;
  width: 3px;
  background-color: ${({ theme }) => theme.colors.text};
  border-radius: 50%;
`;

function ImportList({ listURL, list, listLogo, handleAddList, addError, texts }: ImportProps) {
  // user must accept
  const [confirmed, setConfirmed] = useState(false);

  return (
    <Wrapper>
      <AutoColumn gap="md">
        <AutoColumn gap="md">
          <div>
            <RowBetween>
              <RowFixed>
                {list.logoURI && listLogo}
                <AutoColumn gap="sm" style={{ marginLeft: "20px" }}>
                  <RowFixed>
                    <Text bold mr="6px">
                      {list.name}
                    </Text>
                    <TextDot />
                    <Text small color="textGray" ml="6px">
                      {list.tokens.length} {texts.tokens}
                    </Text>
                  </RowFixed>
                  <Link
                    small
                    external
                    ellipsis
                    maxWidth="90%"
                    href={`https://tokenlists.org/token-list?url=${listURL}`}
                  >
                    {listURL}
                  </Link>
                </AutoColumn>
              </RowFixed>
            </RowBetween>
          </div>

          <Message>
            <Flex flexDirection="column">
              <Text fontSize="20px" color="redBg" mb="16px">
                {texts.importRisk}
              </Text>
              <Text color="redBg" mb="8px">
                {texts.adding}
              </Text>
              <Text bold color="redBg" mb="16px">
                {texts.byAdding}
              </Text>
              <Flex alignItems="center">
                <CheckboxInput
                  name="confirmed"
                  type="checkbox"
                  checked={confirmed}
                  onChange={() => setConfirmed(!confirmed)}
                  scale="sm"
                />
                <Text ml="10px" style={{ userSelect: "none" }}>
                  {texts.iUnderstand}
                </Text>
              </Flex>
            </Flex>
          </Message>

          <Button disabled={!confirmed} onClick={handleAddList} variant="option">
            {texts.import}
          </Button>
          {addError ? (
            <Text color="redBg" style={{ textOverflow: "ellipsis", overflow: "hidden" }}>
              {addError}
            </Text>
          ) : null}
        </AutoColumn>
      </AutoColumn>
    </Wrapper>
  );
}

export default ImportList;

const Message = styled.div`
  padding: 20px;
  background: ${({ theme }) => transparentize(0.9, theme.colors.redBg)};
  border-radius: 12px;
`;
