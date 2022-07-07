import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/redux/hooks/hooks";
import { getPenguinThunk } from "../../app/redux/thunks/penguinThunk/penguinThunk";
import CreateForm from "../../components/CreateForm/CreateForm";
import FormsStyles from "../../Styles/FormsStyles";

const CreatePage = (): JSX.Element => {
  const { penguin } = useAppSelector((state) => state.penguins);
  const dispatch = useAppDispatch();
  const { idPenguin } = useParams();

  useEffect(() => {
    if (idPenguin) {
      dispatch(getPenguinThunk(idPenguin));
    }
  }, [dispatch, idPenguin]);

  return (
    <FormsStyles>
      <CreateForm penguin={penguin} />
    </FormsStyles>
  );
};

export default CreatePage;
