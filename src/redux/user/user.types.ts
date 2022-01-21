import { User } from '@src/types';

export enum UserActionTypes {
  signup_start,
  signup_error,
  signup_success,
  logout,
}

export type UserState = {
  user?: User;
  isSigninup: boolean;
  error?: any;
};
