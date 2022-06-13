import { INewPenguin } from "../../app/redux/types/penguin/penguinInterfaces";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../app/redux/hooks/hooks";
import { createFavThunk } from "../../app/redux/thunks/penguinThunk/penguinThunk";
import {
  correctAction,
  infoAction,
  stopLoadingAction,
  wrongAction,
} from "../Modals/Modals";

const CreateForm = (): JSX.Element => {
  const { username } = useAppSelector((state) => state.users);

  const blankFields: INewPenguin = {
    name: "",
    category: "",
    likes: 0,
    description: "",
    image: "",
    imageBackup: "",
    owner: username,
    id: "",
  };

  const dispatch = useAppDispatch();

  const [formData, setFormData] = useState(blankFields);

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setFormData({
      ...formData,
      [event.target.id]: event.target.value,
    });
  };

  const handleSubmit = (event: React.FormEvent): void => {
    try {
      infoAction("Creating fav...(handleSubmit)");
      event.preventDefault();

      const newFav = new FormData();

      newFav.append("name", formData.id);
      newFav.append("name", formData.name);
      newFav.append("category", formData.category);
      // newFav.append("likes", JSON.stringify(formData.likes));
      newFav.append("description", formData.description);
      newFav.append("image", formData.image);
      newFav.append("imageBackup", formData.imageBackup);
      newFav.append("owner", formData.owner);

      if (newFav) {
        stopLoadingAction();
        dispatch(createFavThunk(newFav));
        setFormData(blankFields);

        correctAction("Created!");
      } else {
        stopLoadingAction();
        wrongAction("Error creating!");
      }
    } catch {
      stopLoadingAction();
      wrongAction("Error creating!");
    }
  };

  const uploadImage = (event: React.ChangeEvent<HTMLInputElement>): void => {
    try {
      infoAction("Uploading image...");
      setFormData({
        ...formData,
        [event.target.id]: event.target.files?.[0] || "",
      });
      correctAction("Image uploaded!");
      stopLoadingAction();
    } catch {
      stopLoadingAction();
      wrongAction("Error creating fav!");
    }
  };

  return (
    <div className="container">
      <h1>New favorite...</h1>

      <form
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
        className="form-create"
      >
        <label htmlFor="image">Image</label>
        <input
          className="penguin-image"
          id="image"
          type="file"
          onChange={uploadImage}
          autoComplete="off"
          placeholder="Image"
        />
        <label htmlFor="title">Name</label>
        <input
          type="text"
          id="name"
          autoComplete="off"
          value={formData.name}
          onChange={handleInputChange}
          placeholder="Name"
        />
        <label htmlFor="title">Category</label>
        <input
          type="text"
          id="category"
          autoComplete="off"
          value={formData.category}
          onChange={handleInputChange}
          placeholder="Category"
        />
        <label htmlFor="times">Likes</label>
        <input
          type="number"
          id="likes"
          autoComplete="off"
          value={formData.likes}
          placeholder="Likes"
          onChange={handleInputChange}
          className="input-likes"
        />
        <label htmlFor="description">Description</label>
        <input
          type="text"
          id="description"
          autoComplete="off"
          value={formData.description}
          placeholder="Description"
          onChange={handleInputChange}
        />

        <button type="submit" className="bt-save" placeholder="bt-save">
          Save
        </button>
      </form>
    </div>
  );
};

export default CreateForm;
