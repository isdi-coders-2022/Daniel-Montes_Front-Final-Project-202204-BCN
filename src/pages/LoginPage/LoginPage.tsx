import LoginForm from "../../components/LoginForm/LoginForm";
import { LoginPageStyles } from "./LoginPageStyles";

const LoginPage = (): JSX.Element => {
  return (
    <LoginPageStyles>
      <h1>AdoptaUnPingüino.com</h1>
      <LoginForm />
    </LoginPageStyles>
  );
};

export default LoginPage;
