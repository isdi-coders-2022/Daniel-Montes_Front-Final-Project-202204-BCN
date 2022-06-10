import { ChangeEvent, FormEvent, useState } from "react";
import { useAppDispatch } from "../../app/redux/hooks/hooks";
import { useNavigate } from "react-router-dom";
import { createFavThunk } from "../../app/redux/thunks/penguinThunk/penguinThunk";
import { correctAction, infoAction } from "../Modals/Modals";
import CreateFormStyles from "./CreateFormStyles";
import Navbar from "../Navbar/Navbar";

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
    infoAction(
      "Finally operation was unsuccessful, we really sorry about that..."
    );
    navigate("/favs");
  };

  return (
    <CreateFormStyles>
      <Navbar />
      <div className="container">
        <form noValidate autoComplete="off" onSubmit={handleSubmit}>
          <h1>New fav...</h1>

          <input
            type="text"
            id="photo"
            autoComplete="off"
            placeholder="Photo"
            value={formData.image}
            onChange={handleInputChange}
            name="Photo"
            className="photo"
          />

          <input
            type="text"
            id="name"
            autoComplete="off"
            placeholder="Name"
            value={formData.name}
            onChange={handleInputChange}
            name="Name"
          />

          <input
            type="text"
            id="category"
            autoComplete="off"
            placeholder="Category"
            value={formData.category}
            name="category"
          />

          <input
            type="text"
            id="description"
            autoComplete="off"
            placeholder="Description"
            value={formData.description}
            name="description"
          />
          <button type="submit" className="bt-save" placeholder="bt-save">
            Save
          </button>
        </form>
      </div>
    </CreateFormStyles>
  );
};

export default CreateForm;
