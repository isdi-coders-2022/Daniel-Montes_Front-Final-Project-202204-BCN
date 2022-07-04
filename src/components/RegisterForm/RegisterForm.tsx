import { ChangeEvent, useState } from "react";
import { useAppDispatch } from "../../app/redux/hooks/hooks";
import { registerThunk } from "../../app/redux/thunks/userThunk/userThunk";
import { NavLink } from "react-router-dom";
import { correctAction } from "../Modals/Modals";
import RegisterPageStyles from "../../Styles/FormsStyles";
import { headerTitleActionCreator } from "../../app/redux/features/uiSlice/uiSlice";

let HiderImage = "";
let HiderImageOn = "";
let imageURL = "";
interface FormData {
  name: string;
  username: string;
  password: string;
  image: string | File;
}

const RegisterForm = (): JSX.Element => {
  const blankFields: FormData = {
    name: "",
    username: "",
    password: "",
    image: "",
  };

  const [formData, setFormData] = useState<FormData>(blankFields);
  const dispatch = useAppDispatch();

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>): void => {
    event.preventDefault();
    setFormData({
      ...formData,
      [event.target.id]: event.target.value,
    });
  };

  const handleSubmit = (event: ChangeEvent<HTMLFormElement>): void => {
    event.preventDefault();

    dispatch(registerThunk(formData));
    dispatch(headerTitleActionCreator("Wellcome"));
    setFormData(blankFields);
  };

  const handleImageChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setFormData({
      ...formData,
      image: event.target.files?.item(0) as File,
    });
    correctAction("Added image: " + event.target.value);
  };

  if (!document.location.href.includes("create")) {
    HiderImageOn = "";
    HiderImage = " display-none";
  } else {
    HiderImage = "";
    HiderImageOn = " display-none";
  }

  return (
    <RegisterPageStyles className="register-container">
      <form
        className="form-register"
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <NavLink to="/login" className="link">
          Already have an account? Please Log In
        </NavLink>
        <img
          className={`penguin-image${HiderImageOn}`}
          src={String(formData.image)}
          alt={formData.name}
        />
        <input
          className={`penguin-image${HiderImage}`}
          id="image"
          type="text"
          onChange={handleImageChange}
          autoComplete="off"
        />
        {imageURL}
        <label htmlFor="name"> Name </label>
        <input
          type="text"
          id="name"
          autoComplete="off"
          placeholder="Name"
          value={formData.name}
          onChange={handleInputChange}
          name="Name"
        />
        <label htmlFor="username"> Username </label>
        <input
          type="text"
          id="username"
          autoComplete="off"
          placeholder="Username"
          value={formData.username}
          onChange={handleInputChange}
          name="Username"
        />
        <label htmlFor="password"> Password </label>
        <input
          type="password"
          id="password"
          autoComplete="off"
          value={formData.password}
          placeholder="Password"
          onChange={handleInputChange}
          name="Password"
        />
        <button type="submit" className="bt-register">
          Register
        </button>
      </form>
      <div className="register-parent-div">
        <button className="btn-register-upload">Add Photo</button>
        <input
          type="file"
          name="upfile"
          accept="image/*"
          className="file-upload"
          onChange={handleImageChange}
        />
      </div>
    </RegisterPageStyles>
  );
};

export default RegisterForm;
