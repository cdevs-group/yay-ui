import React from "react";
import styled from "styled-components";

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

const PriceBlock: React.FC = () => {

  const payoutArr = [
    {name: <div>Start Price:</div>, price: <div className="bold">$ 1`200</div>},
    {name: <div>Current Price:</div>, price: <div className="bold">$ 3`500</div>},
    {name: <div className="prize">Prize Pool:</div>, price: <div className="boldPrice">12.000 BNB</div>},
  ]

  return (
    <Wrap>
      {payoutArr.map((item, i) => (
        <div key={i}>
          <Item>{item.name} {item.price}</Item>
        </div>
      ))}
    </Wrap>
  );
};

export default PriceBlock;
