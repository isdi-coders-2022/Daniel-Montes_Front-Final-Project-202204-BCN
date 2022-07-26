import { useEffect } from "react";
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

  const { headerTitle } = useAppSelector((state) => state.ui);
  const { penguin } = useAppSelector((state) => state.penguins);

  const isCreate = document.location.href.includes("create");
  const isRegister = document.location.href.includes("register");
  debugger;
  const thisTitle = isCreate
    ? "New..."
    : isRegister
    ? "Register..."
    : "Edit...";

  const idToProcess = document.location.href.substring(
    document.location.href.lastIndexOf("/") + 1,
    document.location.href.length
  );

  useEffect(() => {
    const SetTitleHeader = (title: string, lastTitle: string) => {
      dispatch(headerTitleActionCreator(title));
      dispatch(headerLastTitleActionCreator(lastTitle));
    };

    if (headerTitle !== thisTitle) SetTitleHeader(thisTitle, headerTitle);

    if (!isCreate) {
      dispatch(getPenguinThunk(idToProcess));
    }
  }, [dispatch, idToProcess, headerTitle, thisTitle, isCreate]);

  return (
    <FormsStyles>
      <CreateForm penguin={penguin} />
    </FormsStyles>
  );
};

export default CreatePage;
