import { Text } from '@src/components';
import { useTheme } from '@src/hooks';
import useInteractionManagerMount from '@src/hooks/useInteractionManagerMount';
import { AppNavigationProps } from '@src/navigator/navigator.types';
import React from 'react';
import { ActivityIndicator, View } from 'react-native';

const SignupScreen: React.FC<AppNavigationProps<'Startup'>> = ({
  navigation,
}) => {
  const theme = useTheme();
  useInteractionManagerMount(() => {
    setTimeout(() => {
      navigation.replace('Signup');
    }, 500);
  });
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: theme.colors.background,
      }}
    >
      <Text>Please Wait...</Text>
      <View style={{ height: 16 }} />
      <ActivityIndicator color={theme.colors.text} size='large' />
    </View>
  );
};

export default SignupScreen;
