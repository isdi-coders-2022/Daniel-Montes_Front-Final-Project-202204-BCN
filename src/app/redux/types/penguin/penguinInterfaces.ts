export interface IPenguin {
  id?: string;
  name: string;
  likes: number;
  image: string;
  category: string;
  imageBackup: string;
  description: string;
  owner?: string;
}

export interface Ipenguin {
  id?: string;
  name: string;
  likes: number;
  image: string;
  category: string;
  imageBackup: string;
  description: string;
  owner?: string;
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
  id: string;
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
