import React, { ChangeEvent, FormEvent, useState } from "react";
import { IPenguin } from "../../app/redux/types/penguin/penguinInterfaces";

import { useAppDispatch } from "../../app/redux/hooks/hooks";
import {
  createFavThunk,
  editPenguinThunk,
} from "../../app/redux/thunks/penguinThunk/penguinThunk";
import {
  correctAction,
  infoAction,
  stopLoadingAction,
  wrongAction,
} from "../Modals/Modals";
import { useNavigate } from "react-router-dom";

interface ICreateForm {
  name: string;
  likes: number;
  category: string;
  description: string;
}

interface Props {
  idPenguin: IPenguin | null;
}

const CreateForm = ({ idPenguin }: Props): JSX.Element => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const blankFields = {
    name: "",
    category: "",
    description: "",
    image: "",
    likes: 0,
  };
  const initialFormData: ICreateForm = {
    name: idPenguin ? idPenguin.name : "",
    likes: idPenguin ? idPenguin.likes : 0,
    category: idPenguin ? idPenguin.category : "",
    description: idPenguin ? idPenguin.description : "",
  };

  const [formData, setFormData] = useState<ICreateForm>(initialFormData);

  const handleInputChange = (
    event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
  ): void => {
    setFormData({
      ...formData,
      [event.target.id]: event.target.value,
    });
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    if (idPenguin) {
      dispatch(editPenguinThunk(idPenguin.id, formData));
      correctAction("Updated successfully");
      setFormData(blankFields);
      navigate("/penguins");
      return;
    }
    dispatch(createFavThunk(formData));

    setFormData(blankFields);
    navigate("/favs");
  };

  const uploadImage = (event: React.ChangeEvent<HTMLInputElement>): void => {
    try {
      infoAction("Uploading image...");
      setFormData({
        ...formData,
        [event.target.id]: event.target.files?.[0] || "",
      });
      correctAction("Image uploaded!");
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

        <button
          type="submit"
          className="bt-save"
          placeholder="bt-save"
          value={idPenguin ? "Edit" : "Create"}
        >
          Save
        </button>
      </form>
    </div>
  );
};

export default CreateForm;
