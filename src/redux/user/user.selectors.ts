import { UserState } from './user.types';
import { createSelector } from 'reselect';

const selectUserState = (state: { user: UserState }) => state.user;

export const selectIsSigningUp = createSelector(
  [selectUserState],
  (user) => user.isSigninup
);

export const selectSignUpError = createSelector(
  [selectUserState],
  (user) => user.error
);

export const selectUser = createSelector(
  [selectUserState],
  (user) => user.user
);
