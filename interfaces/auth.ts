export interface ICredentials {
  identifier: string;
  password: string;
}

export interface AuthData {
  jwt: string;
  user: IUser;
}

export interface IUser {
  id: number;
  username: string;
  email: string;
}
