import { ChangeEvent, FormEvent, useState } from "react";
import {
  IPenguin,
  IRegisterForm,
} from "../../app/redux/types/penguin/penguinInterfaces";
import { correctAction, wrongAction } from "../Modals/Modals";
import { useAppDispatch, useAppSelector } from "../../app/redux/hooks/hooks";
import {
  createFavThunk,
  editPenguinThunk,
} from "../../app/redux/thunks/penguinThunk/penguinThunk";
import { useNavigate } from "react-router-dom";

interface Props {
  penguin: IPenguin;
}

let HiderImage = "";
let HiderImageOn = "";
let imageURL = "";

const CreateForm = ({ penguin }: Props): JSX.Element => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const initialFormData: IRegisterForm = {
    id: penguin?.id || "",
    name: penguin?.name || "",
    category: penguin?.category || "",
    likers: penguin?.likers || [],
    likes: penguin?.likes || 0,
    favs: penguin?.favs || [],
    description: penguin?.description || "",
    image: penguin?.image,
    imageBackup: penguin?.imageBackup || "",
  };

  const isCreate = document.location.href.includes("create");

  const idUser = useAppSelector((state) => state.user.id);

  const [formData, setFormData] = useState<IRegisterForm>(initialFormData);

  const handleInputChange = (
    event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
  ): void => {
    setFormData({
      ...formData,
      [event.target.id]: event.target.value,
    });

    imageURL = event.target.value;
  };

  const handleImageChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setFormData({
      ...formData,
      image: event.target.files?.[0] as File,
    });
    correctAction("Added image: " + event.target.value);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    try {
      if (isCreate) {
        formData.likers = [idUser];
        formData.favs = [idUser];
        formData.likes = 1;
      }

      debugger;
      const newFormData = new FormData();

      newFormData.append("id", formData.id);
      newFormData.append("name", formData.name);
      newFormData.append("category", formData.category);
      newFormData.append("likes", JSON.stringify(formData.likes));
      newFormData.append("likers", JSON.stringify(formData.likers));
      newFormData.append("favs", JSON.stringify(formData.favs));
      newFormData.append("image", formData.image);
      newFormData.append("imageBackup", formData.imageBackup);
      newFormData.append("description", formData.description);
      debugger;
      !isCreate
        ? dispatch(editPenguinThunk(newFormData, "Updated"))
        : dispatch(createFavThunk(formData));

      setFormData(initialFormData);

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
        <label htmlFor="image">Image</label>
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
          type="text"
          id="id"
          autoComplete="off"
          value={penguin.id || formData.id}
          onChange={handleInputChange}
          placeholder="Id"
          contentEditable="false"
          className="display-none"
        />
        {imageURL}
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          autoComplete="off"
          value={penguin.name || formData.name}
          onChange={handleInputChange}
          placeholder="Name"
          contentEditable="true"
        />
        <label htmlFor="category">Category</label>
        <input
          type="text"
          id="category"
          autoComplete="off"
          value={penguin.category || formData.category}
          onChange={handleInputChange}
          placeholder="Category"
        />
        <label htmlFor="likes">Likes</label>
        <input
          type="number"
          id="likes"
          autoComplete="off"
          value={penguin.likes || formData.likes}
          placeholder="Likes"
          onChange={handleInputChange}
          className="input-likes"
        />
        <label htmlFor="description">Description</label>
        <input
          type="text"
          id="description"
          autoComplete="off"
          value={penguin.description || formData.description}
          placeholder="Description"
          onChange={handleInputChange}
          className="input-description"
        />
        <input
          type="submit"
          className="bt-save"
          placeholder="bt-save"
          value="Save"
        />
      </form>
      <div className="parent-div">
        <button className="btn_upload">Add Photo</button>
        <input
          id="image"
          type="file"
          name="upfile"
          accept="image/*"
          className="file-upload"
          onChange={handleImageChange}
        />
      </div>
    </div>
  );
};

export default CreateForm;
