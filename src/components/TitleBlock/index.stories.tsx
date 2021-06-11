import React from 'react';
import { TitleBlock } from '.';
import { COINS2 } from '../../constants/images';
import Timer from '../Timer/Timer';

export default {
  title: 'Components/TitleBlock',
  component: TitleBlock,
};

export const Title: React.FC = () => {
  return (
    <TitleBlock
      src={COINS2}
      title="Up or Down?"
      subtitle="Which coin will have better price perfomace in"
    >
      <Timer time={170} color="green" />
    </TitleBlock>
  );
};
