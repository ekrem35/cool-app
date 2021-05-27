export interface UserProps {
  mail: string;
  token: string;
}

export interface ReduxState {
  user: UserProps;
}
