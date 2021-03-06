export interface IUser {
  id: number;
  username: string;
  password?: string;
  token?: string;
}

export interface IToken {
  token: string;
}

export interface ILoginRequest {
  username: string;
  password: string;
}
