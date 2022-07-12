import Penguins from "../../components/Penguins/Penguins";
import { loadPenguinsThunk } from "../../app/redux/thunks/penguinThunk/penguinThunk";
import { useAppDispatch, useAppSelector } from "../../app/redux/hooks/hooks";
import { useEffect } from "react";
import {
  headerLastTitleActionCreator,
  headerTitleActionCreator,
} from "../../app/redux/features/uiSlice/uiSlice";

const PenguinsPage = (): JSX.Element => {
  const dispatch = useAppDispatch();

  const idUser = useAppSelector((state) => state.user.id);
  const { allPenguins } = useAppSelector((state) => state.penguins);
  const { headerTitle } = useAppSelector((state) => state.ui);

  useEffect(() => {
    const SetTitleHeader = (title: string, lastTitle: string) => {
      dispatch(headerTitleActionCreator(title));
      dispatch(headerLastTitleActionCreator(lastTitle));
    };

    const thisTitle = "Home";
    if (headerTitle !== thisTitle) SetTitleHeader(thisTitle, headerTitle);

    dispatch(loadPenguinsThunk());
  }, [dispatch, headerTitle]);

  return <Penguins allPenguins={allPenguins} idUser={idUser} />;
};

export default PenguinsPage;
