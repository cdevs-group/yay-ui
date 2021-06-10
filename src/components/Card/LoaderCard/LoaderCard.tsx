import React from "react";
import styled, { keyframes } from "styled-components";

let orangeAnimation = keyframes`
  0%, 100% { transform: translate(0, 0); }
  25% { transform: translate(0, -20px); }
  50% { transform: translate(20px, 0); }
  75% { transform: translate(-20px, 0); }
`;

let redAnimation = keyframes`
  0%, 100% { transform: translate(0, 0); }
  25% { transform: translate(0, 20px); }
  50% { transform: translate(-20px, 0); }
  75% { transform: translate(20px, 0); }
`;

let greenAnimation = keyframes`
  0%, 100% { transform: translate(0, 0); }
  25% { transform: translate(20px, 0px); }
  50% { transform: translate(0, 20px); }
  75% { transform: translate(0, -20px); }
`;

let yellowAnimation = keyframes`
  0%, 100% { transform: translate(0, 0); }
  25% { transform: translate(-20px, 0); }
  50% { transform: translate(0, -20px); }
  75% { transform: translate(0, 20px); }
`;

const Wrap = styled.div`
    height: 470px;
  `

  const Loader = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    align-content: center; 
    justify-content: flex-end; 
    height: 50%;
  `

  const OrangeCircle = styled.div`
    position: absolute;
    width: 22px;
    height: 22px;
    animation: ${orangeAnimation} 2s linear infinite;
    border-radius: 50%;
    background: #FF9525;
  `

  const GreenCircle = styled.div`
    position: absolute;
    width: 22px;
    height: 22px;
    animation: ${greenAnimation} 2s linear infinite;
    border-radius: 50%;
    background: #69E35F;

  `

  const RedCircle = styled.div`
    position: absolute;
    width: 22px;
    height: 22px;
    animation: ${redAnimation} 2s linear infinite;
    border-radius: 50%;
    background: #FF6161;
  `

  const YellowCircle = styled.div`
    position: absolute;
    width: 22px;
    height: 22px;
    animation: ${yellowAnimation} 2s linear infinite;
    border-radius: 50%;
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

const LoaderCard: React.FC = () => {

  return (
    <Wrap >
      <Loader>
        {/* <Img src="https://i.imgur.com/l568ECv.gif"/> */}
        <OrangeCircle/>
        <GreenCircle/>
        <RedCircle/>
        <YellowCircle/>
      </Loader>
      <Text>Calculating...</Text>                 
    </Wrap>
  );
};
export default LoaderCard;
