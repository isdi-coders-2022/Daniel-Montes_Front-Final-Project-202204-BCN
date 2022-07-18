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
import { cleanArray } from "../../utils/utils";

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
  const newFormData = new FormData();

  const handleInputChange = (
    event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
  ): void => {
    event.preventDefault();
    setFormData({
      ...(formData.id ? formData : penguin),
      [event.target.id]: event.target.value,
    });

    modFields.push(event.target.id);
  };

  const handleImageChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setFormData({ ...formData, image: event.target.files?.[0] as File });

    newFormData.append("image", formData.image);

    modFields.push(event.target.id);
  };

  const processCreate = () => {
    newFormData.append("name", formData.name);
    newFormData.append("category", formData.category);
    newFormData.append("likes", JSON.stringify(1));
    newFormData.append("likers", idUser);
    newFormData.append("favs", idUser);
    newFormData.append("image", formData.image);
    newFormData.append("imageBackup", formData.imageBackup);
    newFormData.append("description", formData.description);

    dispatch(createFavThunk(newFormData));
  };

  const processEdit = () => {
    modFields = cleanArray(modFields);
    debugger;
    dispatch(
      editPenguinThunk(formData, "Update fields: " + modFields.join(", "))
    );
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    try {
      isCreate ? processCreate() : processEdit();

      dispatch(loadFavsThunk());
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
          src={penguin.imageBackup || formData.imageBackup}
          alt={penguin.name || formData.name}
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
          autoComplete="off"
          value={formData.name || penguin.name}
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
