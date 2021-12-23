import { AuthAction, AuthState } from './AuthTypes';

const authReducer = (state: AuthState, action: AuthAction): AuthState => {
  switch (action.type) {
    case 'SIGN_IN':
      return {
        ...state,
        isLoggedIn: true,
        username: 'no-username-yet',
      };
    default:
      return state;
  }
};

export { authReducer };
