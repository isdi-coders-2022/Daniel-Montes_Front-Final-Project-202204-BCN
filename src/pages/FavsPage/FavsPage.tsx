import { useEffect } from "react";
import { headerTitleActionCreator } from "../../app/redux/features/uiSlice/uiSlice";
import { useAppDispatch, useAppSelector } from "../../app/redux/hooks/hooks";
import { loadFavsThunk } from "../../app/redux/thunks/penguinThunk/penguinThunk";
import Favs from "../../components/Favs/Favs";

const FavsPage = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const { headerTitle } = useAppSelector((state) => state.ui);

  useEffect(() => {
    dispatch(headerTitleActionCreator("Favourites"));
    dispatch(loadFavsThunk());
  }, [dispatch, headerTitle]);

  const { allPenguins } = useAppSelector((state) => state.penguins);

  return <Favs allPenguins={allPenguins} />;
};

export default FavsPage;
