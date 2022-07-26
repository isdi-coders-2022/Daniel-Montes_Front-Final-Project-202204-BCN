import { ChangeEvent, FormEvent, useState } from "react";

import { wrongAction } from "../Modals/Modals";
import { useAppDispatch, useAppSelector } from "../../app/redux/hooks/hooks";
import {
  createFavThunk,
  editPenguinThunk,
} from "../../app/redux/thunks/penguinThunk/penguinThunk";
import { useNavigate } from "react-router-dom";
import { blankFormData, cleanArray } from "../../utils/utils";
import {
  IPenguin,
  IRegisterForm,
} from "../../app/redux/types/penguin/penguinInterfaces";

interface Props {
  penguin: IPenguin;
}

let HiderImage = "";
let HiderImageOn = "";
let modFields = [""];

const CreateForm = ({ penguin }: Props): JSX.Element => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const isCreate = document.location.href.includes("create");

  const { user } = useAppSelector((state) => state);

  const initialFormData: IRegisterForm = {
    id: penguin ? penguin.id : "",
    name: penguin ? penguin.name : "",
    category: penguin ? penguin.category : "",
    likers: penguin ? penguin.likers : [],
    likes: penguin ? penguin.likes : 0,
    favs: penguin ? penguin.favs : [],
    description: penguin ? penguin.description : "",
    image: penguin ? penguin.image : "",
    imageBackup: penguin ? penguin.imageBackup : "",
  };

  const [formData, setFormData] = useState(initialFormData);

  const newFormData = new FormData();

  const handleInputChange = (
    event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
  ): void => {
    event.preventDefault();

    setFormData({
      ...(formData.id || isCreate ? formData : penguin),
      [event.target.id]: event.target.value,
    });

    modFields.push(event.target.id);
  };

  const handleImageChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setFormData({
      ...(formData.id || isCreate ? formData : penguin),
      image: event.target.files?.[0] as File,
    });

    modFields.push(event.target.id);
  };

  const processCreate = () => {
    newFormData.append("name", formData.name);
    newFormData.append("category", formData.category);
    newFormData.append("likes", JSON.stringify(1));
    newFormData.append("likers", user.id);
    newFormData.append("favs", user.id);
    newFormData.append("image", formData.image);
    newFormData.append("imageBackup", formData.imageBackup);
    newFormData.append("description", formData.description);

    dispatch(createFavThunk(newFormData));
  };

  const processEdit = () => {
    modFields = cleanArray(modFields);

    dispatch(
      editPenguinThunk(formData, "Update fields: " + modFields.join(", "))
    );
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    try {
      isCreate ? processCreate() : processEdit();

      setFormData(blankFormData);

      navigate("/penguins/favs");
    } catch (error) {
      wrongAction("Error:" + error);
    }
  };

  if (!isCreate) {
    HiderImageOn = "";
    HiderImage = " display-none";
  } else {
    HiderImage = "";
    HiderImageOn = " display-none";
  }

  return (
    <div className="container">
      <form
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
        className="form-create"
      >
        <div className="parent-div">
          <button className="btn-upload" />
          <input
            id="image"
            type="file"
            name="upfile"
            accept="image/*"
            className="file-upload"
            onChange={handleImageChange}
          />
        </div>
        <img
          className={`penguin-image${HiderImageOn}`}
          src={formData.imageBackup || penguin.imageBackup}
          alt={formData.name || penguin.name}
        />
        <input
          className={`penguin-image${HiderImage}`}
          type="text"
          onChange={handleImageChange}
          autoComplete="off"
        />

        <label htmlFor="name">Name</label>
        <input
          id="name"
          type="text"
          placeholder="Name"
          value={formData.name || penguin.name}
          autoComplete="off"
          onChange={handleInputChange}
        />

        <label htmlFor="category">Category</label>
        <input
          id="category"
          type="text"
          placeholder="Category"
          value={formData.category || penguin.category}
          autoComplete="off"
          onChange={handleInputChange}
        />
        <label htmlFor="likes">Likes</label>
        <input
          id="likes"
          type="number"
          placeholder="Likes"
          value={formData.likes || penguin.likes}
          autoComplete="off"
          className="input-likes"
          onChange={handleInputChange}
        />
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          placeholder="Description"
          value={formData.description || penguin.description}
          autoComplete="off"
          className="input-description"
          onChange={handleInputChange}
        />
        <button
          type="submit"
          className="bt-save"
          placeholder="bt-save"
          value="Save"
        >
          Save
        </button>
      </form>
    </div>
  );
};

export default CreateForm;
