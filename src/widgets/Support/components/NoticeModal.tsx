import React from "react";
import styled from "styled-components";
import { Text } from "../../../components/Text";
import { GhostsIcon } from "../../../constants/images";
import { Button } from "../../../components/Button";

const NoticeModal = ({ title, text, button, href }: { href: string; title: string; text: string; button: string }) => {
  return (
    <Wrapper>
      <Modal>
        <Title>{title}</Title>
        <img src={GhostsIcon} alt="success" />
        <Description>{text}</Description>
        <Button as="a" href={href} target="_blank" width="100%" variant="green">
          {button}
        </Button>
      </Modal>
    </Wrapper>
  );
};

export default NoticeModal;

const Wrapper = styled.div`
  margin-top: 40px;
`;
const Modal = styled.div`
  padding: 27px;
  margin: 0 auto;
  max-width: 404px;
  max-height: 100vh;
  min-width: 303px;
  width: 100%;
  background: ${({ theme }) => theme.colors.bgGray};
  box-shadow: 0px 20px 36px -8px rgba(14, 14, 44, 0.1), 0px 1px 1px rgba(0, 0, 0, 0.05);
  border-radius: 15px;
  z-index: ${({ theme }) => theme.zIndices.modal};
  overflow-y: auto;
  text-align: center;
  ${({ theme }) => theme.mediaQueries.xs} {
    min-width: 360px;
    width: 100%;
  }

  ${({ theme }) => theme.mediaQueries.sm} {
    padding: 27px;
    min-width: 404px;
    width: 100%;
  }
`;
const Title = styled(Text)`
  font-weight: normal;
  font-size: 21px;
  line-height: 27px;
  letter-spacing: 0.5px;
  text-align: left;
`;
const Description = styled(Text)`
  margin: 20px 0 44px;
  font-weight: normal;
  font-size: 13px;
  line-height: 16px;
  text-align: center;
  letter-spacing: 0.05em;
`;
