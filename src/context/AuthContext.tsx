import React, { createContext, useReducer } from 'react';
import { AuthState, AuthContextProps } from './AuthTypes';
import { authReducer } from './AuthReducer';

const authInitialState: AuthState = {
  isLoggedIn: false,
};

export const AuthContext = createContext({} as AuthContextProps);

export const AuthProvider = ({ children }: any) => {
  const [authState, dispatch] = useReducer(authReducer, authInitialState);

  const signIn = () => dispatch({ type: 'SIGN_IN' });

  const logOut = () => dispatch({ type: 'LOG_OUT' });

  const changeFavIcon = (icon: string) => dispatch({ type: 'CHANGE_FAV_ICON', payload: icon });

  return (
    <AuthContext.Provider
      value={{
        authState,
        signIn,
        logOut,
        changeFavIcon,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
