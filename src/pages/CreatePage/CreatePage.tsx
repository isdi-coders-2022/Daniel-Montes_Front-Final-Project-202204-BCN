import { useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  headerLastTitleActionCreator,
  headerTitleActionCreator,
} from "../../app/redux/features/uiSlice/uiSlice";
import { useAppDispatch, useAppSelector } from "../../app/redux/hooks/hooks";
import { getPenguinThunk } from "../../app/redux/thunks/penguinThunk/penguinThunk";
import CreateForm from "../../components/CreateForm/CreateForm";
import FormsStyles from "../../Styles/FormsStyles";

const CreatePage = (): JSX.Element => {
  const dispatch = useAppDispatch();

  const { penguin } = useAppSelector((state) => state.penguins);
  const { idPenguin } = useParams();
  const { headerTitle } = useAppSelector((state) => state.ui);

  const SetTitleHeader = (title: string, lastTitle: string) => {
    dispatch(headerTitleActionCreator(title));
    dispatch(headerLastTitleActionCreator(lastTitle));
  };

  const thisTitle = document.location.href.includes("create")
    ? "New..."
    : "Edit...";

  if (headerTitle !== thisTitle) SetTitleHeader(thisTitle, headerTitle);

  useEffect(() => {
    if (typeof idPenguin !== "undefined") {
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
