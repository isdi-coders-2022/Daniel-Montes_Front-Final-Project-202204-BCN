export interface PenguinInfo {
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

export interface PenguinsState {
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
