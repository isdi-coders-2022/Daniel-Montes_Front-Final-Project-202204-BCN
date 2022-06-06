import { ChangeEvent, FormEvent, useState } from "react";
import { useAppDispatch } from "../../app/redux/hooks/hooks";
import { registerThunk } from "../../app/redux/thunks/userThunk/userThunk";
import { NavLink } from "react-router-dom";

interface FormData {
  name: string;
  username: string;
  password: string;
}

const RegisterForm = (): JSX.Element => {
  const blankFields = {
    name: "",
    username: "",
    password: "",
  };

  const [formData, setFormData] = useState<FormData>(blankFields);
  const dispatch = useAppDispatch();

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setFormData({
      ...formData,
      [event.target.id]: event.target.value,
    });
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    dispatch(registerThunk(formData));
    setFormData(blankFields);
  };

  return (
    <div className="container">
      <form noValidate autoComplete="off" onSubmit={handleSubmit}>
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
        Already have an account? Please
        <NavLink to="/login" className="link">
          Log In
        </NavLink>
      </form>
    </div>
  );
};

export default RegisterForm;
