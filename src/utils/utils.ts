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
  const newStrValue = strValue.replace(/\w+/g, function (w) {
    return w[0].toUpperCase() + w.slice(1).toLowerCase();
  });
  return newStrValue;
};
