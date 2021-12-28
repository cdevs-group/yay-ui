import React from "react";
import styled from "styled-components";
import { ILikesProps } from "./types";
import { Text, HeartIcon } from "../../..";

const Likes: React.FC<ILikesProps> = ({ likes, wrapperStyle, textStyle, onLikeAdd }) => {
  return (
    <LikesWrapper style={wrapperStyle} onClick={() => onLikeAdd()}>
      <HeartIcon />
      <LikesText style={textStyle}>{likes}</LikesText>
    </LikesWrapper>
  );
};

export default Likes;

const LikesWrapper = styled.div`
  display: flex;
  width: 67px;
  height: 32px;
  background-color: ${({ theme }) => theme.colors.bgCard6};
  color: white;
  padding: 8px 10px;
  border-radius: 8px;
  cursor: pointer;
`;

const LikesText = styled(Text)`
  font-size: 13px;
  line-height: 16px;
  letter-spacing: 0.03em;
  padding-left: 5px;
  color: ${({ theme }) => theme.colors.whiteText};
`;
