import { ChangeEvent, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../app/redux/hooks/hooks";
import { registerThunk } from "../../app/redux/thunks/userThunk/userThunk";
import { NavLink } from "react-router-dom";
import RegisterPageStyles from "../../Styles/FormsStyles";
import {
  headerLastTitleActionCreator,
  headerTitleActionCreator,
} from "../../app/redux/features/uiSlice/uiSlice";
import { UserRegister } from "../../app/redux/types/userInterfaces/userInterfaces";

let HiderImage = "";
let HiderImageOn = "";
let imageURL = "";

const thisTitle = "Wellcome";

const RegisterForm = (): JSX.Element => {
  const initialFormData: UserRegister = {
    username: "",
    password: "",
    image: "",
  };

  const { headerTitle } = useAppSelector((state) => state.ui);

  const [formData, setFormData] = useState(initialFormData);

  const dispatch = useAppDispatch();

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setFormData({
      ...formData,
      [event.target.id]: event.target.value,
    });
  };
  const handleImageChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setFormData({
      ...formData,
      image: event.target.files?.[0] as File,
    });
  };

  const processRegistration = () => {
    const newFormData = new FormData();
    newFormData.append("username", formData.username);
    newFormData.append("password", formData.password);
    newFormData.append("image", formData.image);

    dispatch(registerThunk(newFormData));
  };

  const handleSubmit = (event: ChangeEvent<HTMLFormElement>): void => {
    event.preventDefault();

    processRegistration();

    setFormData(initialFormData);
  };

  if (!document.location.href.includes("create")) {
    HiderImageOn = "";
    HiderImage = " display-none";
  } else {
    HiderImage = "";
    HiderImageOn = " display-none";
  }

  useEffect(() => {
    const SetTitleHeader = (title: string, lastTitle: string) => {
      dispatch(headerTitleActionCreator(title));
      dispatch(headerLastTitleActionCreator(lastTitle));
    };

    if (headerTitle !== thisTitle) SetTitleHeader(thisTitle, headerTitle);
  }, [dispatch, headerTitle]);

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
          alt={formData.username}
        />
        <input
          className={`penguin-image${HiderImage}`}
          id="image"
          type="text"
          onChange={handleImageChange}
          autoComplete="off"
        />
        {imageURL}

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
