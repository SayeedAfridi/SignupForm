import React from 'react';
import { Container } from '@src/containers';
import { SignupFeature } from '@src/features';
import { AppNavigationProps } from '@src/navigator/navigator.types';
import { KeyboardAvoidingScrollView } from '@src/components';

const SignupScreen: React.FC<AppNavigationProps<'Signup'>> = (props) => {
  return (
    <Container>
      <KeyboardAvoidingScrollView>
        <SignupFeature {...props} />
      </KeyboardAvoidingScrollView>
    </Container>
  );
};

export default SignupScreen;
