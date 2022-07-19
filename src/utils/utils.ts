import { IPenguin } from "../app/redux/types/penguin/penguinInterfaces";

export const blankFormData: IPenguin = {
  id: "",
  name: "",
  category: "",
  likers: [] || "",
  likes: 0,
  favs: [] || "",
  description: "",
  image: "",
  imageBackup: "",
};

export const toPascalCase = (strValue: string) => {
  return strValue.replace(/\w+/g, function (w) {
    return w[0].toUpperCase() + w.slice(1).toLowerCase();
  });
};

export const cleanArray = (array: any): any => {
  array = Array.from(new Set(array));
  array = array.filter(function (field: any) {
    return field != null && field !== "" && field !== "undefined";
  });

  return array;
};
