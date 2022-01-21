import React from 'react';
import { Pressable, View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { hp } from '@src/utils';

export interface GoogleButtonProps {}
const size = hp(4.9);

const GoogleButton: React.FC<GoogleButtonProps> = ({}) => {
  return (
    <Pressable
      style={{
        height: size,
        width: size,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F90401',
        borderRadius: size / 2,
      }}
    >
      <FontAwesome size={size * 0.6} name='google' color='#fff' />
    </Pressable>
  );
};

export default GoogleButton;
