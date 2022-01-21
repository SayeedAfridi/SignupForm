import React from 'react';
import { View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Button, Text } from '@src/components';
import useDarkModeToggler from '@src/hooks/useDarkModeToggler';
import { makeStyles } from '@src/theme';
import { Container } from '@src/containers';

const useStyles = makeStyles((theme) => ({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
    alignItems: 'center',
    justifyContent: 'center',
  },
}));

const AppProvider: React.FC = ({}) => {
  const toggle = useDarkModeToggler();
  const styles = useStyles();
  return (
    <Container>
      <View style={styles.container}>
        <Text>Hello World</Text>
        <Button variant='primary' onPress={toggle} title='Primary' />
        <StatusBar style='auto' />
      </View>
    </Container>
  );
};

export default AppProvider;
