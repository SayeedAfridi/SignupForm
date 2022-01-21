import React from 'react';
import { Pressable, View } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { hp, wp } from '@src/utils';

export interface FacebookButtonProps {}
const size = hp(5);

const FacebookButton: React.FC<FacebookButtonProps> = ({}) => {
  return (
    <Pressable
      style={{
        height: size,
        width: size,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: size / 2,
      }}
    >
      <Entypo size={size} name='facebook-with-circle' color='#0C5795' />
      <View
        style={{
          position: 'absolute',
          backgroundColor: 'white',
          top: wp(2),
          zIndex: -1,
          height: wp(5.5),
          width: wp(3),
        }}
      />
    </Pressable>
  );
};

export default FacebookButton;
