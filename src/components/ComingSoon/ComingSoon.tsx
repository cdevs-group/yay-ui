import React from "react";
import styled from "styled-components";
import { ComingSoonIcon } from "../../constants/images";
import Text from "../Text/Text";
import { Link } from "../Link";

interface ComingSoonProps {
  href: string;
  text: string;
  backText: string;
  img?: string;
}

const Wrap = styled.div`
  position: relative;
  padding: 0 55px;
  width: 404px;
  height: 335px;
  background: ${({ theme }) => theme.colors.bgGray};
  border-radius: 15px;
  color: ${({ theme }) => theme.colors.text};
  text-align: center;
  letter-spacing: 0.5px;
`;

const SoonImg = styled.div`
  position: absolute;
  top: -23%;
  left: -5%;
`;

const TextBottom = styled(Text)`
  margin-bottom: 26px;
  padding-top: 220px;
  line-height: 16px;
`;

const BackLink = styled.div`
  display: flex;
  justify-content: center;
  cursor: pointer;
`;

const ComingSoon = ({ href, text, backText, img }: ComingSoonProps) => {
  return (
    <Wrap>
      <SoonImg>
        <img src={img || ComingSoonIcon} />
      </SoonImg>
      <TextBottom size="sm">{text}</TextBottom>
      <BackLink>
        <Link color="#47DA3B" href={href}>
          {backText}
        </Link>
      </BackLink>
    </Wrap>
  );
};

export default ComingSoon;
