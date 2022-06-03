export interface UserInfo {
  name: string;
  username: string;
}

export interface UserState {
  name: string;
  username: string;
  logged: boolean;
}

export interface LoginResponse {
  name: string;
  username: string;
}

export interface LoginData {
  username: string;
  password: string;
}
export interface UserRegister {
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
