export interface IPenguin {
  id: string;
  name: string;
  category: string;
  likes: number;
  likers: [];
  favs: [];
  image: string | File;
  imageBackup: string;
  description: string;
}

export interface IDetail {
  penguin: {
    id: string;
    name: string;
    category: string;
    likes: number;
    likers: [];
    favs: [];
    image: string;
    imageBackup: string;
    description: string;
  };
}

export interface IRegisterForm {
  id: string;
  name: string;
  category: string;
  favs: [];
  likers: [];
  likes: number;
  image: string | File;
  imageBackup: string;
  description: string;
}
