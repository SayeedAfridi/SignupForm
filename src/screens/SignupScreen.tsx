import { Button, Text } from '@src/components';
import { Container } from '@src/containers';
import useDarkModeToggler from '@src/hooks/useDarkModeToggler';
import { AppNavigationProps } from '@src/navigator/navigator.types';
import { makeStyles } from '@src/theme/theme.utils';
import React from 'react';
import { View } from 'react-native';

const useStyles = makeStyles((theme) => ({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
}));

const SignupScreen: React.FC<AppNavigationProps<'Signup'>> = ({}) => {
  const styles = useStyles();
  const toggle = useDarkModeToggler();
  return (
    <Container>
      <View style={styles.container}>
        <Text>Hello from signup!</Text>
        <Button title='Toggle theme' onPress={toggle} variant='primary' />
      </View>
    </Container>
  );
};

export default SignupScreen;
