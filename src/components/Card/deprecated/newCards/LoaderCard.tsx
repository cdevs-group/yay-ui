import React from "react";
import styled from "styled-components";
import Loader from "../../../Loader/Loader";

const LoaderCard: React.FC = () => {
  const Wrap = styled.div`
    /* height: 470px; */
  `;

  const Text = styled.div`
    margin: 30px 0 100px;
    font-weight: 500;
    font-size: 15px;
    line-height: 19px;
    color: #fff;
    text-align: center;
  `;

  return (
    <Wrap>
      <Loader />
      <Text>Calculating...</Text>
    </Wrap>
  );
};

export default LoaderCard;
