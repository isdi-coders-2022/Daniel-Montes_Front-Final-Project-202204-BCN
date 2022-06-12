import RegisterForm from "../../components/RegisterForm/RegisterForm";
import RegisterPageStyles from "../../Styles/FormsStyles";

const RegisterPage = (): JSX.Element => {
  return (
    <RegisterPageStyles>
      <h1>AdoptaUnPingüino.com</h1>
      <RegisterForm />
    </RegisterPageStyles>
  );
};

export default RegisterPage;
