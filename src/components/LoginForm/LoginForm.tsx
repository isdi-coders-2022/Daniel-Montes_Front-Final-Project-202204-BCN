import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { useAppDispatch } from "../../app/redux/hooks/hooks";
import { LoginData } from "../../app/redux/types/userInterfaces";
import { loginThunk } from "../../app/redux/thunks/userThunk/userThunk";

const LoginForm = () => {
  const blankData: LoginData = {
    username: "",
    password: "",
  };
  const [formData, setFormData] = useState(blankData);
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (formData.username !== "" && formData.password !== "")
      setButtonDisabled(false);
    else {
      setButtonDisabled(true);
    }
  }, [formData]);
  const resetForm = () => {
    setFormData(blankData);
  };

  const changeData = (event: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [event.target.id]: event.target.value });
  };

  const submitLogin = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    resetForm();
    dispatch(loginThunk(formData));
  };

  return (
    <div className="container">
      <form autoComplete="off" noValidate onSubmit={submitLogin}>
        <div className="link">
          New user? please
          <Link to="/create"> register</Link>
        </div>
        <label htmlFor="username">
          <input
            id="username"
            value={formData.username}
            onChange={changeData}
            placeholder="Username"
            autoComplete="username"
            alt="Username"
          />
        </label>
        <label className="label-password" htmlFor="password">
          <input
            id="password"
            type="password"
            value={formData.password}
            onChange={changeData}
            placeholder="Password"
            autoComplete="password"
            alt="Password"
          />
        </label>
        <div className="submitContainer">
          <button disabled={buttonDisabled} className="button">
            Log In
          </button>
        </div>
      </form>
    </div>
  );
};
export default LoginForm;
