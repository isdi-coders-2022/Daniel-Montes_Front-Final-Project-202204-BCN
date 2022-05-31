import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { LoginFormStyles } from "./LoginFormStyles";
import { useAppDispatch } from "../../app/redux/hooks/hooks";
import { LoginData } from "../../app/redux/types/userInterfaces";
import { loginThunk } from "../../app/redux/thunks/userThunk/userThunk";

const LoginForm = () => {
  const navigate = useNavigate();
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
    navigate("/list");
  };

  return (
    <LoginFormStyles>
      <div className="container">
        <h2>Please, insert your username and password!</h2>
        <form autoComplete="off" noValidate onSubmit={submitLogin}>
          <label htmlFor="username">
            <input
              id="username"
              value={formData.username}
              onChange={changeData}
              placeholder="Username"
            />
          </label>
          <label className="label-password" htmlFor="password">
            <input
              id="password"
              type="password"
              value={formData.password}
              onChange={changeData}
              placeholder="Password"
            />
          </label>
          <div className="submitContainer">
            <button disabled={buttonDisabled}>LogIn</button>
          </div>
          <div className="link">
            <Link to="/create">Create an account</Link>
          </div>
        </form>
      </div>
    </LoginFormStyles>
  );
};
export default LoginForm;
