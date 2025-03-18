export interface ICredentials {
  identifier: string;
  password: string;
}

export interface AuthData {
  jwt: string;
  user: {
    id: number;
    username: string;
    email: string;
  };
}
