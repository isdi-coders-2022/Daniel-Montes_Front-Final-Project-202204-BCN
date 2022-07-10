export const initialFormData = {
  id: "",
  name: "",
  category: "",
  likers: [""],
  likes: 0,
  favs: [""],
  description: "",
  image: "",
  imageBackup: "",
};

export const toPascalCase = (strValue: string) => {
  return strValue.replace(/\w+/g, function (w) {
    return w[0].toUpperCase() + w.slice(1).toLowerCase();
  });
};

export const addToCleanArray = (
  array: Array<string>,
  newValue: string
): any => {
  if (Array(array)) {
    array.push(newValue);
    array = Array.from(new Set(array));
    array = array.filter(function (field) {
      return field != null && field !== "";
    });
    return array;
  }
};
