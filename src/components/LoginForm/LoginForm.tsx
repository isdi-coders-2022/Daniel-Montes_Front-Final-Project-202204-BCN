import { ChangeEvent, FormEvent, useState } from "react";
import { Link } from "react-router-dom";
import { useAppDispatch } from "../../app/redux/hooks/hooks";
import { LoginData } from "../../app/redux/types/userInterfaces/userInterfaces";
import { loginThunk } from "../../app/redux/thunks/userThunk/userThunk";

const LoginForm = () => {
  const blankData: LoginData = {
    username: "",
    password: "",
  };
  const [formData, setFormData] = useState(blankData);
  const buttonDisabled = formData.password === "" || formData.username === "";
  const dispatch = useAppDispatch();

  const resetForm = () => {
    setFormData(blankData);
  };

  const changeData = (event: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [event.target.id]: event.target.value });
  };

  const submitLogin = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    dispatch(loginThunk(formData));

    resetForm();
  };

  return (
    <form autoComplete="off" noValidate onSubmit={submitLogin}>
      <div className="link">
        New user? please
        <Link to="/users/register"> register</Link>
      </div>
      <label htmlFor="username" />
      <input
        id="username"
        value={formData.username}
        onChange={changeData}
        placeholder="Username"
        autoComplete="off"
        alt="Username"
        className="input-login-user"
      />

      <label className="label-password" htmlFor="password" />
      <input
        id="password"
        type="password"
        value={formData.password}
        onChange={changeData}
        placeholder="Password"
        autoComplete="off"
        alt="Password"
        className="input-login-user"
      />

      <div className="submitContainer">
        <button disabled={buttonDisabled} className="bt-login">
          Login
        </button>
      </div>
    </form>
  );
};
export default LoginForm;
