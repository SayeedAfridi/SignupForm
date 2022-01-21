import { StackActions } from '@react-navigation/native';
import { rootNavRef } from '@src/navigator/RootNavigationContainer';
import { apiService } from '@src/services';
import { User } from '@src/types';
import { UserActionTypes } from './user.types';

const userSignupStart = () => ({
  type: UserActionTypes.signup_start,
});

const userSignupError = (error: any) => ({
  type: UserActionTypes.signup_error,
  payload: error,
});

const userSignupSuccess = (user: User) => ({
  type: UserActionTypes.signup_success,
  payload: user,
});

export const userSignupStartAsync = (data: User) => {
  return async (dispatch: any) => {
    try {
      dispatch(userSignupStart());
      const user = await apiService.signup(data);
      dispatch(userSignupSuccess(user));
      rootNavRef.current?.dispatch(StackActions.replace('Home'));
    } catch (error) {
      dispatch(userSignupError(error));
    }
  };
};

const logoutUser = () => ({
  type: UserActionTypes.logout,
});

export const logout = () => {
  return (dispatch: any) => {
    rootNavRef?.current?.dispatch(StackActions.replace('Signup'));
    dispatch(logoutUser());
  };
};
