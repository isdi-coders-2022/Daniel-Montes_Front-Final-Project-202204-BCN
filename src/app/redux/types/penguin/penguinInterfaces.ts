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
  imageBackup: string;
}

export interface IPenguins {
  results: IPenguin[];
}

export interface INewFav {
  id: number;
  name: string;
  category: string;
  likes: number;
  description: string;
  image: string;
  imageBackup: string;
  owner: string;
}

export interface IFavsPenguins {
  results: IPenguin[];
}

export interface PenguinsState {
  id: number;
  name: string;
  category: string;
  likes: number;
  description: string;
  image: string;
  imageBackup: string;
}

export interface Ierror {
  message: string;
}
