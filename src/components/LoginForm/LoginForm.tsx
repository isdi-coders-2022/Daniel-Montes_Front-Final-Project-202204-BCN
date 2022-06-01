import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { LoginFormStyles } from "./LoginFormStyles";
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
    <LoginFormStyles>
      <div className="container">
        <h2>Login</h2>
        <form autoComplete="off" noValidate onSubmit={submitLogin}>
          <label htmlFor="username">
            <span className="span-hidden">username</span>
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
            <span className="span-hidden">password</span>
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
            <button disabled={buttonDisabled}>Log In</button>
          </div>
          <div className="link">
            New user? please
            <Link to="/create"> register</Link>
          </div>
        </form>
      </div>
    </LoginFormStyles>
  );
};
export default LoginForm;
