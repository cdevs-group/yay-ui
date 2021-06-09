import React from "react";
import styled, { keyframes } from "styled-components";

const LoaderCard: React.FC = () => {

  const Wrap = styled.div`
    height: 470px;
  `

  const loaderCircles = keyframes `
    0% {
      width: 0.5em;
    }
    35% {
      width: 2.5em;
    }
    70% {
      width: 0.5em;
    }
    100% {
    }
  }
  
  /* @keyframes after {
    0% {
      height: 0.5em;
    }
    35% {
      height: 2.5em;
    }
    70% {
      height: 0.5em;
    }
    100% {
    }
  } */
  `

  const Loader = styled.div`
    position: relative;
    width: 2.5em;
    height: 2.5em;
    transform: rotate(165deg);
    animation: ${loaderCircles} 2s linear infinite;
    /* &:before, &:after {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      display: block;
      width: 22px;
      height: 22px;
      border-radius: 50%;
      background: green;
      transform: translate(-50%, -50%);
    }
    &:before {
      animation: before 2s infinite;
    }
    &:after {
      animation: after 2s infinite;
    } */
    /* display: flex;
    flex-direction: column;
    align-items: center;
    align-content: center; 
    justify-content: flex-end; 
    height: 55%; */
  `

  const Img = styled.img`
    width: 30px;
    height: 30px;
  `

  const TopLine = styled.div`
    display: flex;
    margin-bottom: 8px;

    & div:first-child {
      margin-right: 8px;
    }
  `

  const OrangeCircle = styled.div`
    width: 22px;
    height: 22px;
    border-radius: 50%;
    background: #FF9525;
  `

  const GreenCircle = styled(OrangeCircle)`
    background: #69E35F;
  `

  const RedCircle = styled(OrangeCircle)`
    background: #FF6161;
  `

  const YellowCircle = styled(OrangeCircle)`
    background: #ECCB57;
  `

  const Text = styled.div`
    margin: 30px 0 100px;
    font-weight: 500;
    font-size: 15px;
    line-height: 19px;
    color: #fff;
    text-align: center;
  `

  return (
    <Wrap >
      <Loader>
        {/* <Img src="https://i.imgur.com/l568ECv.gif"/> */}
        {/* <TopLine>
          <OrangeCircle/>
          <GreenCircle/>
        </TopLine>
        <TopLine>
          <RedCircle/>
          <YellowCircle/>
        </TopLine> */}
      </Loader>
      <Text>Calculating...</Text>                 
    </Wrap>
  );
};
export default LoaderCard;
