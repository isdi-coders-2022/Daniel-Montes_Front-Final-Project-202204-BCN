import Penguins from "../../components/Penguins/Penguins";
import { useEffect } from "react";
import { loadPenguinsThunk } from "../../app/redux/thunks/penguinThunk/penguinThunk";
import { useAppDispatch, useAppSelector } from "../../app/redux/hooks/hooks";
import {
  headerLastTitleActionCreator,
  headerTitleActionCreator,
} from "../../app/redux/features/uiSlice/uiSlice";

const PenguinsPage = () => {
  const dispatch = useAppDispatch();

  const thisTitle = "Home";

  const { allPenguins } = useAppSelector((state) => state.penguins);
  const { headerTitle } = useAppSelector((state) => state.ui);

  useEffect(() => {
    const SetTitleHeader = (title: string, lastTitle: string) => {
      dispatch(headerTitleActionCreator(title));
      dispatch(headerLastTitleActionCreator(lastTitle));
    };
    if (headerTitle !== thisTitle) SetTitleHeader(thisTitle, headerTitle);

    dispatch(loadPenguinsThunk());
  }, [dispatch, headerTitle]);

  return <Penguins allPenguins={allPenguins} />;
};

export default PenguinsPage;
