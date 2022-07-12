import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import {
  IPenguin,
  IRegisterForm,
} from "../../app/redux/types/penguin/penguinInterfaces";
import { wrongAction } from "../Modals/Modals";
import { useAppDispatch, useAppSelector } from "../../app/redux/hooks/hooks";
import {
  createFavThunk,
  editPenguinThunk,
  getPenguinThunk,
} from "../../app/redux/thunks/penguinThunk/penguinThunk";
import { useNavigate } from "react-router-dom";
import { addToCleanArray } from "../../utils/utils";

let HiderImage = "";
let HiderImageOn = "";
let modFields = [""];

interface Props {
  penguin: IPenguin | null;
}

const CreateForm = ({ penguin }: Props): JSX.Element => {
  const userId = useAppSelector((state) => state.user.id);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const urlParam = document.location.href.substring(
    document.location.href.lastIndexOf("/") + 1,
    document.location.href.length
  );

  const idPenguin = urlParam !== "create" ? urlParam : "";

  useEffect(() => {
    if (typeof idPenguin !== "undefined" && idPenguin === "") {
      dispatch(getPenguinThunk(idPenguin));
    }
  }, [dispatch, idPenguin]);

  const initialFormData: IRegisterForm = {
    id: penguin?.id || "",
    name: penguin?.name || "",
    category: penguin?.category || "",
    likes: 1,
    favs: [`${userId}`],
    likers: [`${userId}`],
    description: penguin?.description || "",
    image: penguin?.image || "",
    imageBackup: penguin?.imageBackup || "",
  };

  const [formData, setFormData] = useState(initialFormData);

  const handleInputChange = (
    event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
  ): void => {
    event.preventDefault();
    setFormData({
      ...formData,
      [event.target.id]: event.target.value,
    });

    modFields = addToCleanArray(modFields, event.target.id);
  };

  const handleImageChange = (event: ChangeEvent<HTMLInputElement>): void => {
    event.preventDefault();

    modFields = addToCleanArray(modFields, event.target.id);

    setFormData({
      ...formData,
      [event.target.id]: event.target.files?.[0],
      imageBackup: event.target.files?.[0].name as string,
      favs: [userId],
      likers: [userId],
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
      newPenguin.append("image", formData.image);
      newPenguin.append("favs", userId);
      newPenguin.append("likers", userId);
      newPenguin.append("imageBackup", formData.imageBackup);
      newPenguin.append("description", formData.description);

      const comments = document.location.href.includes("create")
        ? "Create new penguin"
        : "Update fields: " + listFields;

      dispatch(
        document.location.href.includes("create")
          ? createFavThunk(newPenguin)
          : editPenguinThunk(newPenguin, comments)
      );

      // dispatch(loadPenguinsActionCreator(allPenguins));
      // dispatch(
      //   document.location.href.includes("create")
      //     ? loadFavsThunk()
      //     : loadPenguinsThunk()
      // );
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
            alt={`Detailed ` + formData.name}
            src={penguin?.image || penguin?.imageBackup}
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
          <button className={`btn-upload animated animatedEdit`} />
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
