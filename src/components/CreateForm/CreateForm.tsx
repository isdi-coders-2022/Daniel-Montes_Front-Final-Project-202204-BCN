import { ChangeEvent, FormEvent, useState } from "react";
import {
  IPenguin,
  IRegisterForm,
} from "../../app/redux/types/penguin/penguinInterfaces";
import { wrongAction } from "../Modals/Modals";
import { useAppDispatch, useAppSelector } from "../../app/redux/hooks/hooks";
import {
  createFavThunk,
  editPenguinThunk,
} from "../../app/redux/thunks/penguinThunk/penguinThunk";
import { useNavigate } from "react-router-dom";
import { headerTitleActionCreator } from "../../app/redux/features/uiSlice/uiSlice";

let HiderImage = "";
let HiderImageOn = "";
let modFields = [""];

interface Props {
  penguin: IPenguin | null;
}

const CreateForm = ({ penguin }: Props): JSX.Element => {
  const userId = useAppSelector((state) => state.user.id);

  const initialFormData: IRegisterForm = {
    id: penguin?.id || "",
    name: penguin?.name || "",
    category: penguin?.category || "",
    likes: penguin?.likes || 0,
    likers: penguin?.likers || {},
    favs: penguin?.favs || {},
    description: penguin?.description || "",
    image: penguin?.image || "",
    imageBackup: penguin?.imageBackup || "",
  };

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState(initialFormData);

  const handleInputChange = (
    event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
  ): void => {
    event.preventDefault();
    setFormData({
      ...formData,
      [event.target.id]: event.target.value,
    });

    if (Array(modFields)) {
      modFields.push(event.target.id);
      modFields = Array.from(new Set(modFields));

      modFields = modFields.filter(function (field) {
        return field != null && field !== "";
      });
    }
  };

  const handleImageChange = (event: ChangeEvent<HTMLInputElement>): void => {
    event.preventDefault();

    setFormData({
      ...formData,
      [event.target.id]: event.target.files?.[0] || "",

      imageBackup: event.target.files?.[0].name as string,
    });
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    try {
      const listFields = modFields.join(", ");

      const newPenguin = new FormData();

      newPenguin.append("name", formData.name);
      newPenguin.append("category", formData.category);
      newPenguin.append("likes", JSON.stringify(formData.likes));
      newPenguin.append("likers", userId);
      newPenguin.append("favs", userId);
      newPenguin.append("image", formData.image);
      newPenguin.append("description", formData.description);
      newPenguin.append("imageBackup", formData.imageBackup);

      const comments = document.location.href.includes("create")
        ? "New Penguin created!"
        : "Fields updated: " + listFields;

      dispatch(
        document.location.href.includes("create")
          ? createFavThunk(newPenguin)
          : editPenguinThunk(newPenguin, comments)
      );

      dispatch(headerTitleActionCreator("Favourites"));

      navigate("/penguins/favs");
    } catch (error) {
      wrongAction("Error:" + error);
    }
  };

  if (!document.location.href.includes("create")) {
    HiderImageOn = "";
    HiderImage = " display-none";
  } else {
    HiderImage = " display-none";
    HiderImageOn = "";
  }

  return (
    <>
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
            alt={formData.name}
            src={penguin?.imageBackup?.toString()}
          />
          <input
            className={`penguin-image${HiderImage}`}
            type="text"
            autoComplete="off"
          />

          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            autoComplete="off"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Name"
            contentEditable="true"
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
          <textarea
            id="description"
            autoComplete="off"
            value={formData.description}
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
          <button className="btn-upload">Add Photo</button>
          <input
            id="image"
            type="file"
            name="upfile"
            accept="image/*"
            onChange={handleImageChange}
          />
        </div>
      </div>
    </>
  );
};

export default CreateForm;
