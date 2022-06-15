export interface IPenguin {
  id: string;
  name: string;
  likes: number;
  image: string;
  category: string;
  imageBackup: string;
  description: string;
  owner: string;
  author: string;
}

export interface Ipenguin {
  id: string;
  name: string;
  likes: number;
  image: string;
  category: string;
  imageBackup: string;
  description: string;
  owner: string;
}

export interface INewPenguin {
  id: string;
  name: string;
  likes: number;
  image: string;
  category: string;
  imageBackup: string;
  description: string;
  owner: string;
}
export interface IFav {
  id: string;
  name: string;
  likes: number;
  image: string;
  category: string;
  imageBackup: string;
  description: string;
  owner: string;
}
export interface INewFav {
  name: string;
  likes: number;
  category: string;
  description: string;
  image: string | File;
  owner: string;
}

export interface IDetail {
  penguin: IPenguin;
}
