import { Button, Spacer, Text, ThemeToggler } from '@src/components';
import { logout } from '@src/redux/user/user.actions';
import { makeStyles } from '@src/theme/theme.utils';
import { User } from '@src/types';
import { fp, hp } from '@src/utils';
import React from 'react';
import { View } from 'react-native';
import { useDispatch } from 'react-redux';

export interface HomeFeaturesProps {
  user: User;
}

const useStyles = makeStyles((theme) => ({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: theme.spacing.m,
  },
}));

const HomeFeatures: React.FC<HomeFeaturesProps> = ({ user }) => {
  const styles = useStyles();
  const dispatch = useDispatch();
  const homeLogout = () => {
    dispatch(logout());
  };
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
      <Text variant='title' style={{ fontSize: fp(3) }}>
        Welcome! {user.identifier}
      </Text>
      <Spacer space='large' />
      <Button onPress={homeLogout} variant='secondary' title='Logout' />
    </View>
  );
};

export default HomeFeatures;
