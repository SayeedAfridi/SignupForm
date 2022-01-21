import { Text } from '@src/components';
import { Container } from '@src/containers';
import { HomeFeatures } from '@src/features';
import useInteractionManagerMount from '@src/hooks/useInteractionManagerMount';
import { AppNavigationProps } from '@src/navigator/navigator.types';
import { selectUser } from '@src/redux/user/user.selectors';
import React from 'react';
import { InteractionManager } from 'react-native';
import { useSelector } from 'react-redux';

const HomeScreen: React.FC<AppNavigationProps<'Home'>> = ({}) => {
  const user = useSelector(selectUser);
  return (
    <Container>
      <HomeFeatures user={user!} />
    </Container>
  );
};

export default HomeScreen;
