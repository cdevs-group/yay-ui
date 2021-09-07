import React from "react";
import { Modal } from "../../Modal";
import { LobbyCreatModalProps } from "../types";
import { Text } from "../../../components/Text";
import styled from "styled-components";
import TabsSmall from "../../../components/Tabs/TabsSmall";
import { Button } from "../../../components/Button";

const LobbyCreatModal = ({
  texts,
  onDismiss,
  activeTab,
  toggleTab,
  tabsList,
  handleCreate,
  handleJoin,
}: LobbyCreatModalProps) => {
  return (
    <Modal title={texts.title} onDismiss={onDismiss}>
      <Content>
        <TitleTabs>{texts.tabsTitle}</TitleTabs>
        <TabsSmall tabValue={activeTab} tabsList={tabsList} onClick={toggleTab} />
        <Buttons>
          <Button onClick={handleJoin} width="100%" marginRight="15px" variant="option">
            <ButtonText>{texts.join}</ButtonText>
          </Button>
          <Button onClick={handleCreate} width="100%" variant="green">
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
`;
const TitleTabs = styled(Text)`
  margin-bottom: 10px;
  font-size: 15px;
  line-height: 19px;
  letter-spacing: 0.5px;
  color: ${({ theme }) => theme.colors.textGray};
`;
const Buttons = styled.div`
  margin-top: 50px;
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
