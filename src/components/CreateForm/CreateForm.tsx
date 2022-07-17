import { ChangeEvent, FormEvent, useState } from "react";
import { IPenguin } from "../../app/redux/types/penguin/penguinInterfaces";
import { wrongAction } from "../Modals/Modals";
import { useAppDispatch, useAppSelector } from "../../app/redux/hooks/hooks";
import {
  createFavThunk,
  editPenguinThunk,
  loadFavsThunk,
} from "../../app/redux/thunks/penguinThunk/penguinThunk";
import { useNavigate } from "react-router-dom";
import { initialFormData, cleanArray } from "../../utils/utils";

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

  const idUser = useAppSelector((state) => state.user.id);

  const [formData, setFormData] = useState<IPenguin>(penguin);

  let newFormData = new FormData();
  let newData;

  const handleInputChange = (
    event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
  ): void => {
    event.preventDefault();

    if (isCreate) {
      newFormData.append(event.target.id, event.target.value);
    } else {
      newData = { ...penguin, [event.target.id]: event.target.value };

      setFormData(newData);
    }

    modFields = [...modFields, event.target.id];
    cleanArray(modFields);
  };

  const handleImageChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setFormData({
      ...formData,
      [event.target.id]: event.target.files?.[0] as File,
    });

    newFormData.append("image", formData.image);

    modFields = [...modFields, event.target.id];
    cleanArray(modFields);
  };

  const processCreate = () => {
    setFormData({
      ...formData,
      likes: 1,
      likers: [idUser],
      favs: [idUser],
    });

    newFormData.append("name", penguin.name);
    newFormData.append("category", formData.category);
    newFormData.append("likes", JSON.stringify(formData.likes));
    newFormData.append("likers", idUser);
    newFormData.append("favs", idUser);
    newFormData.append("image", formData.image);
    newFormData.append("imageBackup", formData.imageBackup);
    newFormData.append("description", formData.description);

    dispatch(createFavThunk(newFormData));
    dispatch(loadFavsThunk());
  };

  const processEdit = () => {
    dispatch(editPenguinThunk(newFormData, "Updated fields: " + modFields));

    dispatch(loadFavsThunk());
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    try {
      isCreate ? processCreate() : processEdit();

      setFormData(initialFormData);

      navigate("/penguins");
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
          src={penguin.imageBackup || formData.imageBackup}
          alt={penguin.name || formData.name}
        />
        <input
          className={`penguin-image${HiderImage}`}
          type="text"
          onChange={handleImageChange}
          autoComplete="off"
        />
        <label htmlFor="id">Id</label>
        <input
          id="id"
          type="text"
          autoComplete="off"
          placeholder="Id"
          value={penguin.id || formData.id}
          onChange={handleInputChange}
          className="display-none"
        />
        <label htmlFor="name">Name</label>
        <input
          id="name"
          type="text"
          placeholder="Name"
          value={formData.name}
          autoComplete="off"
          onChange={handleInputChange}
        />
        <label htmlFor="category">Category</label>
        <input
          id="category"
          type="text"
          placeholder="Category"
          value={penguin.category || formData.category}
          autoComplete="off"
          onChange={handleInputChange}
        />
        <label htmlFor="likes">Likes</label>
        <input
          id="likes"
          type="number"
          placeholder="Likes"
          value={penguin.likes || formData.likes}
          autoComplete="off"
          className="input-likes"
          onChange={handleInputChange}
        />
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          placeholder="Description"
          value={penguin.description || formData.description}
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
