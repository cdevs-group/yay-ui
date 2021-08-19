import React from "react";
import styled from "styled-components";
import { ComingSoonIcon } from "../../constants/images";
import { Button } from "../Button";
import Text from "../Text/Text";

interface ComingSoonProps {
  href: string;
  text: string;
  buttonText: string;
  img?: string;
  handleClick: () => void;
}

const Wrap = styled.div`
  position: relative;
  padding: 26px 20px;
  max-width: 404px;
  background: ${({ theme }) => theme.colors.bgGray};
  border-radius: 15px;
  color: ${({ theme }) => theme.colors.text};
  text-align: center;
  letter-spacing: 0.5px;
`;

const SoonImg = styled.div`
  display: flex;
  justify-content: center;
  margin: -140px auto -20px;
`;

const TextBottom = styled(Text)`
  margin-bottom: 26px;
  line-height: 16px;
`;

const BackLink = styled.div`
  display: flex;
  justify-content: center;
  cursor: pointer;
`;

const ComingSoonWithButton = ({ href, text, buttonText, img, handleClick }: ComingSoonProps) => {
  return (
    <Wrap>
      <SoonImg>
        <img src={img || ComingSoonIcon} />
      </SoonImg>
      <TextBottom size="sm">{text}</TextBottom>
      <BackLink>
        <Button variant="green" onClick={handleClick} width="100%">
          {buttonText}
        </Button>
      </BackLink>
    </Wrap>
  );
};

export default ComingSoonWithButton;
