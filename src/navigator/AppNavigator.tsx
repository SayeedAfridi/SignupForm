import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SignupScreen, StartupScreen } from '@src/screens';
import { AppRoutes } from './navigator.types';

const { Navigator, Screen } = createNativeStackNavigator<AppRoutes>();

const AppNavigator: React.FC = () => {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        animation: 'slide_from_right',
      }}
      initialRouteName='Startup'
    >
      <Screen name='Startup' component={StartupScreen} />
      <Screen name='Signup' component={SignupScreen} />
    </Navigator>
  );
};

export default AppNavigator;
