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
    id: "",
    name: "",
    category: "",
    likes: 1,
    likers: [userId],
    favs: [userId],
    description: "",
    image: "",
    imageBackup: "",
    originalname: "",
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
    });
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    try {
      const listFields = modFields.join(", ");

      const newFormData = new FormData();

      newFormData.append("name", formData.name);
      newFormData.append("category", formData.category);
      newFormData.append("favs", JSON.stringify(formData.favs));
      newFormData.append("likers", JSON.stringify(formData.likers));
      newFormData.append("likes", "1");
      newFormData.append("image", formData.image);
      newFormData.append("description", formData.description);

      const comments = document.location.href.includes("create")
        ? "New Penguin created!"
        : "Fields updated: " + listFields;

      dispatch(
        document.location.href.includes("create")
          ? createFavThunk(newFormData)
          : editPenguinThunk(formData, comments)
      );

      // setFormData(initialFormData);
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
            id="image"
            type="text"
            onChange={handleImageChange}
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
