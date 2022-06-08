export interface PenguinInfo {
  name: string;
  username: string;
  logged: boolean;
}

export interface IPenguin {
  id: number;
  name: string;
  category: string;
  likes: number;
  description: string;
  image: string;
}

export interface IPenguins {
  results: IPenguin[];
}

export interface IFavsPenguins {
  results: IPenguin[];
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
