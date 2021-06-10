import React from 'react';
import styled from 'styled-components';
import { BaseLayout } from '.';
import { BG2_IMG, BG_IMG, BG3_IMG } from '../../constants/images';
import { Text } from '../Text';

export default {
  title: 'Components/Layouts',
  argTypes: {},
};

const Wrap = styled.div`
  width: 100%;
  background: #fff;
  padding: 30px;
`;

export const Base: React.FC = () => {
  return (
    <Wrap>
      <BaseLayout src={BG_IMG}>
        <Text color="text">Layout Base</Text>
      </BaseLayout>
    </Wrap>
  );
};

export const BTC: React.FC = () => {
  return (
    <Wrap>
      <BaseLayout src={BG2_IMG}>
        <Text color="text">Layout BTC vs ETH</Text>
      </BaseLayout>
    </Wrap>
  );
};

export const UpOrDown: React.FC = () => {
  return (
    <Wrap>
      <BaseLayout src={BG3_IMG}>
        <Text color="text">Layout Up or Down?</Text>
      </BaseLayout>
    </Wrap>
  );
};
