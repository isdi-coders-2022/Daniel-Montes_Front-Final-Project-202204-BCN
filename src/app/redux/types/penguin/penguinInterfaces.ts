export interface IPenguin {
  id?: number;
  name: string;
  likes: number;
  image: string;
  category: string;
  imageBackup: string;
  description: string;
  owner?: string;
}

export interface Ipenguin {
  id?: number;
  name: string;
  likes: number;
  image: string;
  category: string;
  imageBackup: string;
  description: string;
  owner?: string;
}

export interface INewPenguin {
  id: number;
  name: string;
  likes: number;
  image: string;
  category: string;
  imageBackup: string;
  description: string;
  owner: string;
}
export interface IFav {
  id: number;
  name: string;
  likes: number;
  image: string;
  category: string;
  imageBackup: string;
  description: string;
  owner: string;
}
export interface INewFav {
  id: number;
  name: string;
  likes: number;
  image: string;
  category: string;
  imageBackup: string;
  description: string;
  owner: string;
}

export interface IDetail {
  penguin: IPenguin;
}
