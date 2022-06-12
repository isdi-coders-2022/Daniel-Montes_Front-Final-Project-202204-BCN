import LoginForm from "../../components/LoginForm/LoginForm";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import FormsStyles from "../../Styles/FormsStyles";

const LoginPage = (): JSX.Element => {
  return (
    <FormsStyles>
      <ToastContainer />
      <h1>AdoptaUnPingüino.com</h1>
      <LoginForm />
    </FormsStyles>
  );
};

export default LoginPage;
