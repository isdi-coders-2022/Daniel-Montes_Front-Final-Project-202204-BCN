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
  idPenguin: IPenguin | null;
  penguin: IPenguin | null;
}

const CreateForm = ({ idPenguin, penguin }: Props): JSX.Element => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const isNew = document.location.href.includes("/create");

  const initialFormData: IRegisterForm = {
    id: isNew ? "" : penguin?.id || "",
    name: isNew ? "" : penguin?.name || "",
    category: isNew ? "" : penguin?.category || "",
    likes: isNew ? 0 : penguin?.likes || 0,
    likers: isNew ? [] : penguin?.likers || [],
    favs: isNew ? [] : penguin?.favs || [],
    description: isNew ? "" : penguin?.description || "",
    image: isNew ? "" : penguin?.image || "",
    imageBackup: isNew ? "" : penguin?.imageBackup || "",
    originalname: isNew ? "" : penguin?.originalname || "",
  };

  const [formData, setFormData] = useState(initialFormData);
  const idUser = useAppSelector((state) => state.user.id);

  const handleInputChange = (
    event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
  ): void => {
    setFormData({
      ...formData,
      [event.target.id]: event.target.value,
    });

    if (Array(modFields)) {
      modFields = Array.from(new Set(modFields));
      modFields.push(event.target.id);

      modFields = modFields.filter(function (field) {
        return field != null && field !== "";
      });
    }
  };

  const handleImageChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setFormData({
      ...formData,
      image: event.target.files?.[0] as File,
      originalname: event.target.files?.[0].name as string,
    });
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    const listFields = modFields.join(", ");

    try {
      const userFormData = new FormData();
      userFormData.append("id", formData.id);
      userFormData.append("name", formData.name);
      userFormData.append("category", formData.category);
      userFormData.append("description", formData.description);
      userFormData.append("image", formData.image);
      userFormData.append("favs", idUser);
      userFormData.append("likers", idUser);

      const comments = document.location.href.includes("create")
        ? "New Penguin created!"
        : "Fields updated: " + listFields;

      dispatch(
        document.location.href.includes("create")
          ? createFavThunk(userFormData)
          : editPenguinThunk(formData, comments)
      );

      setFormData(initialFormData);
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
