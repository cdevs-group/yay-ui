import React from "react";
import styled from "styled-components";
import StyledCardForlater from "./StyledCard";
import { StyledCardProps } from "../../Card/types";

interface CardProps extends StyledCardProps {}

const Wrap = styled.div`
  width: 335px;
`;
const Block = styled.div`
  height: 367px;
`;

const CardForLater: React.FC<CardProps> = ({ children, ...props }) => {
  return (
    <Wrap>
      <Block>
        <StyledCardForlater {...props}>{children}</StyledCardForlater>
      </Block>
      {/* <BottomContent>
        <Button>
          <ChartIcon />
        </Button>
        <CenterBlock>
          <button className="arrowLeft">
            <GreenArrow color="#47DA3B" />
          </button>
          <BottomCard />
          <TopCard />
          <button className="arrowRight">
            <GreenArrow color="#47DA3B" />
          </button>
        </CenterBlock>
        <Button>
          <HistoryIcon />
        </Button>
      </BottomContent> */}
    </Wrap>
  );
};
export default CardForLater;
