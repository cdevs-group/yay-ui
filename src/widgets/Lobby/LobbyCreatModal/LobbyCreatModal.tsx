import React from "react";
import { Modal } from "../../Modal";
import { LobbyCreatModalProps } from "../types";
import { Text } from "../../../components/Text";
import styled from "styled-components";
import TabsSmall from "../../../components/Tabs/TabsSmall";
import { Button } from "../../../components/Button";
import { Flex } from "../../../components/Box";

const LobbyCreatModal = ({
  texts,
  onDismiss = () => null,
  activeTab,
  toggleTab,
  tabsList,
  handleCreate,
  handleJoin,
  propsCreateButton,
  balance,
  isError,
}: LobbyCreatModalProps) => {
  return (
    <Modal title={texts.title} onDismiss={onDismiss}>
      <Content>
        <TitleTabs>{texts.tabsTitle}</TitleTabs>
        <TabsSmall tabValue={activeTab} tabsList={tabsList} onClick={toggleTab} />
        <BalanceBlock>
          {isError ? (
            <Text color="darkPink">{texts.error}</Text>
          ) : (
            <Flex>
              <Text mr="10px">{texts.balance}</Text>
              <Text color="green">{balance}</Text>
            </Flex>
          )}
        </BalanceBlock>
        <Buttons>
          <Button disabled={!!propsCreateButton} onClick={handleJoin} width="100%" marginRight="15px" variant="option">
            <ButtonText>{texts.join}</ButtonText>
          </Button>
          <Button
            disabled={isError}
            onClick={handleCreate}
            width="100%"
            variant="green"
            padding="0 10px"
            {...propsCreateButton}
          >
            <ButtonText>{texts.create}</ButtonText>
          </Button>
        </Buttons>
      </Content>
    </Modal>
  );
};

export default LobbyCreatModal;

const Content = styled.div`
  padding: 0 22px 30px 27px;
  margin-top: -17px;
`;
const TitleTabs = styled(Text)`
  margin-bottom: 10px;
  font-size: 15px;
  line-height: 19px;
  letter-spacing: 0.5px;
  color: ${({ theme }) => theme.colors.textGray};
`;
const Buttons = styled.div`
  margin-top: 29px;
  display: flex;
  justify-content: center;
  font-size: 11px;
`;
const ButtonText = styled(Text)`
  font-size: 11px;
  ${({ theme }) => theme.mediaQueries.sm} {
    font-size: 15px;
  }
`;

const BalanceBlock = styled(Flex)`
  margin-top: 29px;
  ${Text} {
    font-size: 11px;
  }
`;
