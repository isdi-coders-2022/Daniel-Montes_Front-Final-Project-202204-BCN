export interface IUser {
  name: string;
  username: string;
  email: string;
  password: string;
  city: string;
}

export interface LoginResponse {
  name: string;
  username: string;
}

export interface LoginData {
  username: string;
  password: string;
}

export interface iToken {
  token: string;
}

export interface DataAxiosLogin {
  data: iToken;
  status: number;
}

export interface Ierror {
  message: string;
}
