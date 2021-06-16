import React from 'react';
import styled from 'styled-components';
import Text from '../../../../components/Text/Text';
import { AccProps } from '../types';

const Account = ({isAuth, accName}:AccProps) =>{
const shortName = (name:any)=>`${new Array(...name).join('').slice(0,4)}...${new Array(...name).reverse().join('').slice(0,4)}`

  return (
    <AccountBlock as='button'>
    {isAuth
    ?<>{shortName(accName)}
    <Avatar/></>:<Avatar className= 'notAuth'>Connect</Avatar>
    }
  </AccountBlock>
  )
};

const AccountBlock = styled(Text)`
  position: relative;
  display: flex;
  min-height: 43px;
  min-width:160px;
  align-items: center;
  padding: 12px 56px 12px 20px;
  background: ${({theme})=>theme.colors.bgOpacity};
  border-radius: 25px;
  box-shadow: ${({theme})=>theme.colors.boxShadow};
  text-shadow: ${({theme})=>theme.colors.textShadow};
  cursor: pointer;
  border:none;
`;
const Avatar = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 10px;
  right: 2px;
  height: 40px;
  width: 40px;
  border-radius: 20px;
  background: ${({theme})=>theme.colors.green};
  &.notAuth{
    width: calc(100% - 4px);
  }
`;

export default Account;
