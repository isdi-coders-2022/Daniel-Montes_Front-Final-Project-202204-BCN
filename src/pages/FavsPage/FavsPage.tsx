import { useEffect } from "react";
import {
  headerLastTitleActionCreator,
  headerTitleActionCreator,
} from "../../app/redux/features/uiSlice/uiSlice";
import { useAppDispatch, useAppSelector } from "../../app/redux/hooks/hooks";
import Favs from "../../components/Favs/Favs";

const FavsPage = (): JSX.Element => {
  const dispatch = useAppDispatch();

  const thisTitle = "Favourites";

  const idUser = useAppSelector((state) => state.user.id);
  const { headerTitle } = useAppSelector((state) => state.ui);
  const { allPenguins } = useAppSelector((state) => state.penguins);

  useEffect(() => {
    const SetTitleHeader = (title: string, lastTitle: string) => {
      dispatch(headerTitleActionCreator(title));
      dispatch(headerLastTitleActionCreator(lastTitle));
    };
    if (headerTitle !== thisTitle) SetTitleHeader(thisTitle, headerTitle);
  }, [dispatch, headerTitle, thisTitle]);

  return <Favs idUser={idUser} allPenguins={allPenguins} />;
};

export default FavsPage;
