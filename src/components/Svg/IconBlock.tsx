import styled from "styled-components";

const IconBlock = ({active, children}) =>{
  return <Block active={active}>
    {children}
  </Block>
}

const Block = styled.div`
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: ${props=>props.active?'#47DA3B':''};
  border-radius:7x;
`;

IconBlock.defaultProps = {
};

export default IconBlock;
