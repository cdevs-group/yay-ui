import React from "react";
import { Modal } from "../../Modal";
import styled from "styled-components";
import { Text } from "../../../components/Text";
import { Button } from "../../../components/Button";
import { Gift3 } from "../../../constants/images";

interface IProps {
  onDismiss?: () => null;
  handleButton: () => void;
  texts: {
    title: string;
    content: string;
    textButton: string;
  };
  img?: string;
}

const LobbyResultModal = ({ onDismiss, texts, handleButton, img }: IProps) => {
  return (
    <Modal onDismiss={onDismiss}>
      <Content>
        <ImgBlock>
          <img src={img || Gift3} />
        </ImgBlock>
        <Text mb="8px">{texts.title}</Text>
        <Text>{texts.content}</Text>
        <ButtonStyle onClick={handleButton}>{texts.textButton}</ButtonStyle>
      </Content>
    </Modal>
  );
};

export default LobbyResultModal;

const Content = styled.div`
  margin-top: -55px;
  padding: 0 40px;
  text-align: center;
  ${({ theme }) => theme.mediaQueries.xs} {
    padding: 0 70px;
  }
`;

const ImgBlock = styled.div`
  text-align: center;
`;
const ButtonStyle = styled(Button)`
  margin: 20px auto 25px;
  height: auto;
  display: block;
  background: none;
  border: none;
  font-weight: normal;
  font-size: 15px;
  line-height: 19px;
  letter-spacing: 0.05em;
  color: ${({ theme }) => theme.colors.green};
  padding: 0;
  text-align: center;
  box-shadow: none;
`;
