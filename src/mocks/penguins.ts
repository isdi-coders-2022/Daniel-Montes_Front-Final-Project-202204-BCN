import { IPenguin } from "../app/redux/types/penguin/penguinInterfaces";

export const mockPenguin: IPenguin = {
  id: "mockPenguin",
  name: "penguin1",
  category: "category1",
  likes: 0,
  likers: ["penguin1"],
  favs: ["penguin1"],
  image: "image1",
  imageBackup: "sadsadasd.jpg",
  description: "description1",
};

export const mockPenguins: IPenguin[] = [
  {
    id: "1",
    name: "Penguin1",
    category: "Penguin",
    likes: 2,
    likers: ["penguin1"],
    favs: ["penguin1"],
    image: "image.jpg",
    imageBackup: "ImageBackup.jpg",
    description: "Cal is a penguin",
  },
  {
    id: "2",
    name: "Penguin2",
    category: "Penguin",
    likes: 1,
    likers: ["penguin1"],
    favs: ["penguin1"],
    image: "image.jpg",
    imageBackup: "ImageBackup.jpg",
    description: "Cal is a penguin",
  },
];
