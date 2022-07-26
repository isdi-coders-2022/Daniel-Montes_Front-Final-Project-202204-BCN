import { useEffect } from "react";
import {
  headerLastTitleActionCreator,
  headerTitleActionCreator,
} from "../../app/redux/features/uiSlice/uiSlice";
import { useAppDispatch, useAppSelector } from "../../app/redux/hooks/hooks";
import { loadLikesThunk } from "../../app/redux/thunks/penguinThunk/penguinThunk";
import Favs from "../../components/Favs/Favs";

const LikesPage = (): JSX.Element => {
  const dispatch = useAppDispatch();

  const thisTitle = "Likes";

  const { headerTitle } = useAppSelector((state) => state.ui);
  const { allPenguins } = useAppSelector((state) => state.penguins);

  useEffect(() => {
    const SetTitleHeader = (title: string, lastTitle: string) => {
      dispatch(headerTitleActionCreator(title));
      dispatch(headerLastTitleActionCreator(lastTitle));
    };

    if (headerTitle !== thisTitle) SetTitleHeader(thisTitle, headerTitle);

    dispatch(loadLikesThunk());
  }, [dispatch, headerTitle, thisTitle]);

  return <Favs allPenguins={allPenguins} />;
};

export default LikesPage;
