import LoginForm from "../../components/LoginForm/LoginForm";
import { LoginPageStyles } from "./LoginPageStyles";
const LoginPage = (): JSX.Element => {
  return (
    <LoginPageStyles>
      <h2>AdoptaUnPingüino.com</h2>
      <LoginForm />
    </LoginPageStyles>
  );
};

export default LoginPage;
