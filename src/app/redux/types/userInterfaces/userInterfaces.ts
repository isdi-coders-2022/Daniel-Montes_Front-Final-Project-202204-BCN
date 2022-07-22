export interface UserInfo {
  id: string;
  username: string;
  logged: boolean;
  isAdmin: boolean;
  image: string;
}

export interface UserState {
  id: string;
  username: string;
  logged: boolean;
  isAdmin: boolean;
  image: string;
}

export interface LoginResponse {
  id: string;
  name: string;
  username: string;
  isAdmin: boolean;
  image: string;
}

export interface LoginData {
  username: string;
  password: string;
}
export interface UserRegister {
  name: string;
  username: string;
  password: string;
  image: string | File;
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

export interface IParameter {
  title: string;
}
