import { Button, Spacer, Text, TextInput, ThemeToggler } from '@src/components';
import { makeStyles } from '@src/theme/theme.utils';
import { fp, hp } from '@src/utils';
import React from 'react';
import { View } from 'react-native';
import SocialRow from './components/SocialRow';
import { useFormik } from 'formik';
import { User } from '@src/types';
import * as yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { userSignupStartAsync } from '@src/redux/user/user.actions';
import {
  selectIsSigningUp,
  selectSignUpError,
} from '@src/redux/user/user.selectors';

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

export interface SignupFeatureProps {}

const initialValues: User & { confirmPassword: string } = {
  identifier: '',
  password: '',
  confirmPassword: '',
};

const validationSchema = yup.object().shape({
  identifier: yup.string().required('Please enter your username/email'),
  password: yup
    .string()
    .required('Please enter your password')
    .min(6, 'Password must be 6 character long'),
  confirmPassword: yup
    .string()
    .equals([yup.ref('password')], "Password doesn't match.")
    .required('Please confirm your password'),
});

const SignupFeature: React.FC<SignupFeatureProps> = ({}) => {
  const styles = useStyles();
  const dispatch = useDispatch();

  const loading = useSelector(selectIsSigningUp);

  const onSubmit = (v: typeof initialValues) => {
    const { identifier, password } = v;
    dispatch(userSignupStartAsync({ identifier, password }));
  };

  const { handleChange, handleBlur, handleSubmit, values, errors, touched } =
    useFormik({
      initialValues,
      validationSchema,
      onSubmit,
    });
  return (
    <View style={styles.container}>
      <View
        style={{
          position: 'absolute',
          top: hp(1),
          right: hp(1),
        }}
      >
        <ThemeToggler />
      </View>
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
        autoCapitalize='none'
        value={values.identifier}
        error={errors.identifier}
        touched={touched.identifier}
        onChangeText={handleChange('identifier')}
        onBlur={handleBlur('identifier')}
      />
      <TextInput
        placeholder='Password'
        password
        value={values.password}
        error={errors.password}
        touched={touched.password}
        onChangeText={handleChange('password')}
        onBlur={handleBlur('password')}
      />
      <TextInput
        placeholder='Confirm Password'
        password
        value={values.confirmPassword}
        error={errors.confirmPassword}
        touched={touched.confirmPassword}
        onChangeText={handleChange('confirmPassword')}
        onBlur={handleBlur('confirmPassword')}
      />
      <Spacer space={3} />

      <Button
        loading={loading}
        onPress={handleSubmit}
        title='Continue'
        variant='primary'
      />

      <Spacer space={6} />
      <View style={styles.socialContainer}>
        <Text variant='tiny'>Or Sign in with</Text>
        <Spacer space='small' />
        <SocialRow />
      </View>
    </View>
  );
};

export default SignupFeature;
