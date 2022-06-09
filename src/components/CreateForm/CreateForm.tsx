import { ChangeEvent, FormEvent, useState } from "react";
import { useAppDispatch } from "../../app/redux/hooks/hooks";
import { useNavigate } from "react-router-dom";
import { createFavThunk } from "../../app/redux/thunks/penguinThunk/penguinThunk";
import { correctAction, infoAction } from "../Modals/Modals";

interface FormData {
  name: string;
  category: string;
  description: string;
  image: string;
}

const CreateForm = (): JSX.Element => {
  const blankFields = {
    name: "",
    category: "",
    description: "",
    image: "",
  };

  const [formData, setFormData] = useState<FormData>(blankFields);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setFormData({
      ...formData,
      [event.target.id]: event.target.value,
    });
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    infoAction("Creating...");

    event.preventDefault();
    dispatch(createFavThunk(""));
    setFormData(blankFields);
    correctAction("Created!");
    navigate("/favs");
  };

  return (
    <div className="container">
      <form noValidate autoComplete="off" onSubmit={handleSubmit}>
        <h1>New fav...</h1>
        <label htmlFor="username"> Name </label>
        <input
          type="text"
          id="username"
          autoComplete="off"
          placeholder="Username"
          value={formData.name}
          onChange={handleInputChange}
          name="Username"
        />
        <label htmlFor="category"> Category </label>
        <input
          type="text"
          id="category"
          autoComplete="off"
          placeholder="Category"
          value={formData.category}
          name="category"
        />
        <label htmlFor="description"> Description </label>
        <input
          type="text"
          id="description"
          autoComplete="off"
          placeholder="Description"
          value={formData.description}
          name="description"
        />
        <button type="submit" className="bt-register">
          Save
        </button>
      </form>
    </div>
  );
};

export default CreateForm;
