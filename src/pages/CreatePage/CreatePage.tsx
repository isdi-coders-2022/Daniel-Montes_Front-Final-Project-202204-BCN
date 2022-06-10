import CreatePageStyles from "./CreatePageStyles";
import CreateForm from "../../components/CreateForm/CreateForm";

const CreatePage = (): JSX.Element => {
  return (
    <>
      <CreatePageStyles>
        <CreateForm />
      </CreatePageStyles>
    </>
  );
};

export default CreatePage;
