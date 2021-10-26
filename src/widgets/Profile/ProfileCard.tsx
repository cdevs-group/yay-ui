import React from "react";
import styled from "styled-components";
import { YAY_TOKEN_CIRCLE } from "../../constants/images";
import { ProfileCardProps } from "./types";

const ProfileCard: React.FC<ProfileCardProps> = ({ token }) => {
  return (
    <Card>
      <Token src={token || YAY_TOKEN_CIRCLE} alt="token1" />
    </Card>
  );
};

export default ProfileCard;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 373px;
  padding: 0 27px 29px 27px;
  background: ${({ theme }) => theme.colors.bgGray};
  border-radius: 10px;
`;

const Token = styled.img`
  margin-top: -33px;
`;
