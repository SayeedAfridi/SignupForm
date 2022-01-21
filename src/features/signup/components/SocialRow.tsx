import { Spacer } from '@src/components';
import React from 'react';
import { View } from 'react-native';
import FacebookButton from './FacebookButton';
import GoogleButton from './GoogleButton';

export interface SocialRowProps {}

const SocialRow: React.FC<SocialRowProps> = ({}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <FacebookButton />
      <Spacer direction='horinzontal' space={5} />
      <GoogleButton />
    </View>
  );
};

export default SocialRow;
