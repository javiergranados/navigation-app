export interface AuthState {
  isLoggedIn: boolean;
  username?: string;
  favIcon?: string;
}

export interface AuthContextProps {
  authState: AuthState;
  signIn: () => void;
  logOut: () => void;
  changeFavIcon: (icon: string) => void;
}

export type AuthActions =
  | {type: "SIGN_IN"}
  | {type: "LOG_OUT"}
  | {type: "CHANGE_FAV_ICON", payload: string};
