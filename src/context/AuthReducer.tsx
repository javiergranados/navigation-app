import { AuthActions, AuthState } from './AuthTypes';

const authReducer = (state: AuthState, action: AuthActions): AuthState => {
  switch (action.type) {
    case 'SIGN_IN':
      return {
        ...state,
        isLoggedIn: true,
        username: 'no-username-yet',
      };
    case 'CHANGE_FAV_ICON':
      return {
        ...state,
        favIcon: action.payload,
      };
    default:
      return state;
  }
};

export { authReducer };
