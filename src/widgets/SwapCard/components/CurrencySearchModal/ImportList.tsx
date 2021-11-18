import React, { useState, useCallback } from "react";
import styled from "styled-components";
import { Button, CheckboxInput, Flex, Link, Text } from "../../../..";
import { AutoColumn } from "../../../../components/Layout/Column";
import { RowBetween, RowFixed } from "../../../../components/Layout/Row";
import { Message } from "../../../../components/Message";

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
                    <Text small color="textSubtle" ml="6px">
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

          <Message variant="danger">
            <Flex flexDirection="column">
              <Text fontSize="20px" textAlign="center" color="redBg" mb="16px">
                {texts.importRisk}
              </Text>
              <Text color="redBg" mb="8px">
                {texts.adding}
              </Text>
              <Text bold color="redBg" mb="16px">
                {typeof "If you purchase a token from this list, you may not be able to sell it back."}
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

          <Button disabled={!confirmed} onClick={handleAddList}>
            {texts.import}
          </Button>
          {addError ? (
            <Text color="failure" style={{ textOverflow: "ellipsis", overflow: "hidden" }}>
              {addError}
            </Text>
          ) : null}
        </AutoColumn>
      </AutoColumn>
    </Wrapper>
  );
}

export default ImportList;
