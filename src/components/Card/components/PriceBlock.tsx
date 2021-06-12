import React from "react";
import styled from "styled-components";
import { PriceBlockProps } from "./types";

const Wrap = styled.div`
  margin-top: 25px;
`

const Item = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
  font-size: 13px;
  line-height: 16px;
  color: ${({ theme }) => theme.colors.text};
  & div.bold {
    font-weight: bold;
  }
  & div.grey {
    font-size: 15px;
    line-height: 19px;
    color: ${({ theme }) => theme.colors.greyText2};
  }
  & div.prize {
    margin-top: 21px;
    font-weight: 500;
    font-size: 15px;
    line-height: 19px;
  }
  & div.boldPrice {
    margin-top: 20px;
    font-weight: 500;
    font-size: 21px;
    line-height: 27px;
  }
`

const PriceBlock: React.FC<PriceBlockProps> = ({arr}) => {

  return (
    <Wrap>
      {arr.map((item, i) => (
        <div key={i}>
          <Item>{item.name} {item.price}</Item>
        </div>
      ))}
    </Wrap>
  );
};

export default PriceBlock;
