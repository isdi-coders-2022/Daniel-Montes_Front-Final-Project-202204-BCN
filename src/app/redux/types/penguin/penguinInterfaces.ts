export interface penguinInfo {
  name: string;
  username: string;
  logged: boolean;
}

export interface IPenguin {
  id: string;
  name: string;
  category: string;
  likes: number;
  description: string;
  image: string;
}

export interface penguinsState {
  id: string;
  name: string;
  category: string;
  likes: number;
  description: string;
  image: string;
}

export interface Ierror {
  message: string;
}
