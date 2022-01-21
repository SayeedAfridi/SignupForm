import { UserActionTypes, UserState } from './user.types';

const initialState: UserState = {
  user: undefined,
  isSigninup: false,
  error: null,
};

export const userReducer = (state = initialState, action: any): UserState => {
  switch (action.type) {
    case UserActionTypes.signup_start:
      return {
        ...state,
        isSigninup: true,
      };
    case UserActionTypes.signup_error:
      return {
        ...state,
        isSigninup: false,
        error: action.payload,
      };

    case UserActionTypes.signup_success:
      return {
        ...state,
        isSigninup: false,
        user: action.payload,
      };
    case UserActionTypes.logout:
      return initialState;
    default:
      return state;
  }
};
