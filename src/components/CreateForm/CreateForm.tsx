import React, { ChangeEvent, FormEvent, useState } from "react";
import { IPenguin } from "../../app/redux/types/penguin/penguinInterfaces";
import { useAppDispatch, useAppSelector } from "../../app/redux/hooks/hooks";
import { createFavThunk } from "../../app/redux/thunks/penguinThunk/penguinThunk";
import { correctAction, wrongAction } from "../Modals/Modals";
import { useNavigate } from "react-router-dom";

interface ICreateForm {
  name: string;
  likes: number;
  category: string;
  description: string;
  image: string | File;
  owner: string;
}

interface Props {
  idPenguin: IPenguin | null;
  penguin: IPenguin | null;
}

const CreateForm = ({ idPenguin, penguin }: Props) => {
  const dispatch = useAppDispatch();

  const { name } = useAppSelector((state) => state.users);
  const blankFields = {
    name: "",
    category: "",
    description: "",
    image: "",
    likes: 0,
    owner: name,
  };

  const initialFormData: ICreateForm = {
    name: penguin?.name || "",
    likes: penguin?.likes || 0,
    category: penguin?.category || "",
    description: penguin?.description || "",
    image: penguin?.image || "",
    owner: penguin?.owner || name,
  };

  let imageURL = "";
  const navigate = useNavigate();

  const [formData, setFormData] = useState<ICreateForm>(initialFormData);

  const handleInputChange = (
    event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
  ): void => {
    setFormData({
      ...formData,
      [event.target.id]: event.target.value,
    });

    imageURL = event.target.value;
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    try {
      event.preventDefault();
      debugger;
      setFormData({
        ...formData,
        owner: name,
      });
      dispatch(createFavThunk(formData));

      setFormData(blankFields);

      navigate("penguins/favs");
    } catch (error) {
      wrongAction("Error:" + error);
    }
  };
  const HiderImage = !document.location.href.includes("detail")
    ? " display-none"
    : "";

  const handleImageChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setFormData({
      ...formData,
      image: event.target.files?.[0] as File,
    });
    correctAction("Uploading: " + event.target.value);
  };

  return (
    <div className="container">
      <form
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
        className="form-create"
      >
        <label htmlFor="image">Image</label>
        <img
          className="item penguin-image "
          src={String(formData.image)}
          alt={formData.name}
        />
        <input
          className={`penguin-image ${HiderImage}`}
          id="image"
          type="text"
          onChange={handleImageChange}
          autoComplete="off"
          placeholder="Image"
        />
        {imageURL}
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          autoComplete="off"
          value={formData.name}
          onChange={handleInputChange}
          placeholder="Name"
        />
        <label htmlFor="category">Category</label>
        <input
          type="text"
          id="category"
          autoComplete="off"
          value={formData.category}
          onChange={handleInputChange}
          placeholder="Category"
        />
        <label htmlFor="likes">Likes</label>
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
        <div className="parent-div">
          <button className="btn_upload">Choose photo</button>
          <input
            type="file"
            name="upfile"
            accept="image/*"
            className="file-upload"
            onChange={handleImageChange}
          />
        </div>
        <input
          type="submit"
          className="bt-save"
          placeholder="bt-save"
          value="Save"
        />
      </form>
    </div>
  );
};

export default CreateForm;
