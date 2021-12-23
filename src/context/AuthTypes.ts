export interface AuthState {
  isLoggedIn: boolean;
  username?: string;
  favoriteIcon?: string;
}

export interface AuthContextProps {
  authState: AuthState;
  signIn: () => void;
}

export type AuthAction = {type: "SIGN_IN"};
