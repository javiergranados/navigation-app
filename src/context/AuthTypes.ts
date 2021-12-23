export interface AuthState {
  isLoggedIn: boolean;
  username?: string;
  favIcon?: string;
}

export interface AuthContextProps {
  authState: AuthState;
  signIn: () => void;
  changeFavIcon: (icon: string) => void;
}

export type AuthActions =
  | {type: "SIGN_IN"}
  | {type: "CHANGE_FAV_ICON", payload: string};
