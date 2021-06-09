import React from "react";
import styled from "styled-components";

const LoaderCard: React.FC = () => {

  const Wrap = styled.div``

  const TopLine = styled.div``

  const OrangeCircle = styled.div`
    width: 22px;
    height: 22px;
    border-radius: 50%;
    background: #FF9525;
  `

  const GreenCircle = styled(OrangeCircle)`
    background: #69E35F;
  `

  return (
    <Wrap >
      <TopLine>
        <OrangeCircle/>
        <GreenCircle/>
      </TopLine>
      <TopLine>
        <OrangeCircle/>
        <GreenCircle/>
      </TopLine>       
    </Wrap>
  );
};
export default LoaderCard;
