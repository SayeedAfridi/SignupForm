import { Button, Spacer, Text, TextInput } from '@src/components';
import KeyboardAvoidingScrollView from '@src/components/KeyboardAwareScrollView';
import { Container } from '@src/containers';
import { AppNavigationProps } from '@src/navigator/navigator.types';
import { makeStyles } from '@src/theme/theme.utils';
import { fp, hp } from '@src/utils';
import React from 'react';
import { View } from 'react-native';

const useStyles = makeStyles((theme) => ({
  container: {
    flex: 1,
    margin: theme.spacing.m,
  },
  title: {
    fontSize: fp(4),
    lineHeight: fp(5),
    margin: theme.spacing.s,
  },
  subTitle: {
    marginLeft: theme.spacing.s,
    color: theme.colors.grey,
  },
  socialContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
}));

const SignupScreen: React.FC<AppNavigationProps<'Signup'>> = ({}) => {
  const styles = useStyles();
  return (
    <Container>
      <KeyboardAvoidingScrollView>
        <View style={styles.container}>
          <Spacer space={10} />
          <Text style={styles.title} variant='title'>
            Create{'\n'}an account
          </Text>
          <Text style={styles.subTitle} variant='body'>
            Fill the details & create your account
          </Text>
          <Spacer space={5} />
          <TextInput
            placeholder='Username / Email ID'
            touched
            error='Please enter a valid email'
          />
          <TextInput placeholder='Password' password />
          <TextInput placeholder='Confirm Password' password />
          <Spacer space={3} />
          <Button title='Toggle theme' variant='primary' />
          <Spacer space={3} />
          <View style={styles.socialContainer}>
            <Text variant='tiny'>Or Sign in with</Text>
          </View>
        </View>
      </KeyboardAvoidingScrollView>
    </Container>
  );
};

export default SignupScreen;
