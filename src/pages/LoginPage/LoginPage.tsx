import LoginForm from "../../components/LoginForm/LoginForm";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { LoginPageStyles } from "./LoginPageStyles";

const LoginPage = (): JSX.Element => {
  return (
    <LoginPageStyles>
      <ToastContainer />
      <h1>AdoptaUnPingüino.com</h1>
      <LoginForm />
    </LoginPageStyles>
  );
};

export default LoginPage;
