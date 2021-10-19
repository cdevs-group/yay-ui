import React from "react";
import styled from "styled-components";
import { ProfileCardProps } from "./types";

const ProfileCard: React.FC<ProfileCardProps> = ({}) => {
  return <Card>111</Card>;
};

export default ProfileCard;

const Card = styled.div`
  background: ${({ theme }) => theme.colors.bgGray};
`;
