import React, { useState } from "react";
import styled from "styled-components";

const Wrap = styled.div``;

const Payout = styled.div`
  margin-top: 31px;
`;

const Item = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
  font-size: 13px;
  line-height: 16px;
  color: ${({ theme }) => theme.colors.text};
  & div.bold {
    font-weight: 500;
  }
`;

const arr = [
  { name: <div>Payout:</div>, price: "5,09x" },
  { name: <div>Locked Price:</div>, price: <div className="bold">$ 1`200</div> },
  { name: <div className="bold">Prize Pool:</div>, price: <div className="bold">$ 3`500</div> },
];

const ExpiredCardNA: React.FC = () => {
  return (
    <Wrap>
      <Payout>
        {arr.map((item, i) => (
          <div key={i}>
            <Item>
              {item.name} {item.price}
            </Item>
          </div>
        ))}
      </Payout>
    </Wrap>
  );
};
export default ExpiredCardNA;
