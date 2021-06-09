import styled from "styled-components";
import CoinIcon from "../CoinIcon";
import DualshockIcon from "../DualshockIcon";
import  Arrow  from "./components/Arrow";
import CardBalancefrom from './components/CardBalance'

const CardsBalance = () =>{
  return <Cards>
    <CardBalancefrom
        title='2000 YAY'
        text='Ready to harvest'
      ><CoinIcon/>
    </CardBalancefrom>
    <CardBalancefrom
        right
        title='3`000 YAY'
        text='Your Balance'
      ><DualshockIcon/>
    </CardBalancefrom>
    <Arrow center={true}/>
  </Cards>
}

const Cards = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0 16px;
`;

CardsBalance.defaultProps = {
};

export default CardsBalance;
