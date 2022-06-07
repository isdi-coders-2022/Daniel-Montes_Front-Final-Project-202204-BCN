import LoginForm from "../../components/LoginForm/LoginForm";
import { LoginPageStyles } from "./LoginPageStyles";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
