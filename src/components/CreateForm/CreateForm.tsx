import { useNavigate } from "react-router-dom";
import { INewFav } from "../../app/redux/types/penguin/penguinInterfaces";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../app/redux/hooks/hooks";
import { createFavThunk } from "../../app/redux/thunks/favThunk/favThunk";
import { correctAction, infoAction, stopLoadingAction } from "../Modals/Modals";
import CreateFormStyles from "./CreateFormStyles";
import Navbar from "../Navbar/Navbar";

const CreateForm = (): JSX.Element => {
  const { username } = useAppSelector((state) => state.users);

  const blankFields: INewFav = {
    name: "",
    category: "",
    likes: 0,
    description: "",
    image: "",
    imageBackup: "",
    owner: username,
    id: 0,
  };

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

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
    event.preventDefault();

    const newFav = new FormData();

    newFav.append("name", formData.name);
    newFav.append("likes", JSON.stringify(formData.likes));
    newFav.append("category", formData.category);
    newFav.append("description", formData.description);
    newFav.append("image", formData.image);
    newFav.append("owner", formData.owner);

    dispatch(createFavThunk(newFav));
    setFormData(blankFields);

    correctAction("Created!");
    navigate("/favs");
  };

  const uploadImage = (event: React.ChangeEvent<HTMLInputElement>): void => {
    infoAction("Uploading image...");
    setFormData({
      ...formData,
      [event.target.id]: event.target.files?.[0] || "",
    });
    stopLoadingAction();
  };

  return (
    <CreateFormStyles>
      <Navbar title="New Fav..." />
      <div className="container">
        <form noValidate autoComplete="off" onSubmit={handleSubmit}>
          <label htmlFor="image">Image</label>
          <input
            className="image penguin-image"
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
            className="times"
            type="number"
            id="likes"
            autoComplete="off"
            value={formData.likes}
            placeholder="Likes"
            onChange={handleInputChange}
          />
          <label htmlFor="description">Description</label>
          <input
            className="description"
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
    </CreateFormStyles>
  );
};

export default CreateForm;
