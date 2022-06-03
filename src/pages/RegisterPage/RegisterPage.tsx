import RegisterForm from "../../components/RegisterForm/RegisterForm";
import RegisterPageStyles from "./RegisterPageStyled";

const RegisterPage = (): JSX.Element => {
  return (
    <RegisterPageStyles>
      <RegisterForm />
    </RegisterPageStyles>
  );
};

export default RegisterPage;
