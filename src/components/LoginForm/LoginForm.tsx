import { ChangeEvent, FormEvent, useState } from "react";
import { Link } from "react-router-dom";
import { useAppDispatch } from "../../app/redux/hooks/hooks";
import { LoginData } from "../../app/redux/types/userInterfaces/userInterfaces";
import { loginThunk } from "../../app/redux/thunks/userThunk/userThunk";
import { correctAction, infoAction } from "../Modals/Modals";

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
    infoAction("Logging in...");
    event.preventDefault();

    dispatch(loginThunk(formData));
    resetForm();
    correctAction("Logged!");
  };

  return (
    <div className="container">
      <form autoComplete="off" noValidate onSubmit={submitLogin}>
        <div className="link">
          New user? please
          <Link to="/register"> register</Link>
        </div>
        <label htmlFor="username" />
        <input
          id="username"
          value={formData.username}
          onChange={changeData}
          placeholder="Username"
          autoComplete="off"
          alt="Username"
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
        />

        <div className="submitContainer">
          <button disabled={buttonDisabled} className="bt-login">
            Login
          </button>
        </div>
      </form>
    </div>
  );
};
export default LoginForm;
