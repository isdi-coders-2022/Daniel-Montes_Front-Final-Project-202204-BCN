import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/redux/hooks/hooks";
import { getPenguinThunk } from "../../app/redux/thunks/penguinThunk/penguinThunk";
import CreateForm from "../../components/CreateForm/CreateForm";
import FormsStyles from "../../Styles/FormsStyles";

const CreatePage = (): JSX.Element => {
  const { penguin } = useAppSelector((state) => state.penguin);
  const dispatch = useAppDispatch();
  const { idPenguin } = useParams();

  useEffect(() => {
    if (idPenguin) {
      dispatch(getPenguinThunk(idPenguin));
    }
  }, [dispatch, idPenguin]);

  return (
    <FormsStyles>
      <CreateForm idPenguin={penguin} penguin={penguin} />
    </FormsStyles>
  );
};

export default CreatePage;
