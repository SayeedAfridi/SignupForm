import { Text } from '@src/components';
import { useTheme } from '@src/hooks';
import useInteractionManagerMount from '@src/hooks/useInteractionManagerMount';
import { AppNavigationProps, AppRoutes } from '@src/navigator/navigator.types';
import { selectUser } from '@src/redux/user/user.selectors';
import React from 'react';
import { ActivityIndicator, View } from 'react-native';
import { useSelector } from 'react-redux';

const SignupScreen: React.FC<AppNavigationProps<'Startup'>> = ({
  navigation,
}) => {
  const theme = useTheme();
  const user = useSelector(selectUser);

  useInteractionManagerMount(() => {
    let route: keyof AppRoutes = 'Signup';
    if (user) {
      route = 'Home';
    }
    setTimeout(() => {
      navigation.replace(route);
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
