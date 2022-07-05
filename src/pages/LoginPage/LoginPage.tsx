import LoginForm from "../../components/LoginForm/LoginForm";
import "react-toastify/dist/ReactToastify.css";
import FormsStyles from "../../Styles/FormsStyles";

const LoginPage = (): JSX.Element => {
  return (
    <FormsStyles className="login-container">
      <h1 className="display-none">AdoptaUnPingüino.com</h1>
      <LoginForm />
    </FormsStyles>
  );
};

export default LoginPage;
