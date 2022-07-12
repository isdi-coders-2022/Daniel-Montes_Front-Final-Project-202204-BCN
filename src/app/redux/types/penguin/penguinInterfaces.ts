export interface IPenguin {
  id: string;
  name: string;
  category: string;
  likes: number;
  likers: {}[];
  favs: {}[];
  image: string;
  imageBackup: string;
  description: string;
}

export interface IDetail {
  penguin: {
    id: string;
    name: string;
    category: string;
    likes: number;
    likers: {}[];
    favs: {}[];
    image: string;
    imageBackup: string;
    description: string;
  };
}

export interface IRegisterForm {
  id: string;
  name: string;
  category: string;
  favs: string[];
  likers: string[];
  likes: number;
  image: string;
  imageBackup: string;
  description: string;
}
