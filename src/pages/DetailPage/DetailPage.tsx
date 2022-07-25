import { useEffect } from "react";
import {
  headerLastTitleActionCreator,
  headerTitleActionCreator,
} from "../../app/redux/features/uiSlice/uiSlice";
import { useAppDispatch, useAppSelector } from "../../app/redux/hooks/hooks";
import {
  getPenguinThunk,
  loadFavsThunk,
  loadPenguinsThunk,
} from "../../app/redux/thunks/penguinThunk/penguinThunk";
import PenguinDetail from "../../components/PenguinDetail/PenguinDetail";
import DetailPageStyles from "./DetailPageStyles";

const DetailPage = (): JSX.Element => {
  const dispatch = useAppDispatch();

  const { penguin } = useAppSelector((state) => state.penguins);
  const { allPenguins } = useAppSelector((state) => state.penguins);
  const { headerTitle, headerLastTitle } = useAppSelector((state) => state.ui);

  const thisTitle = "Detail";

  const idPenguin = document.location.href.substring(
    document.location.href.lastIndexOf("/") + 1,
    document.location.href.length
  );

  useEffect(() => {
    headerLastTitle === "Favourites"
      ? dispatch(loadFavsThunk())
      : dispatch(loadPenguinsThunk());
    dispatch(getPenguinThunk(idPenguin));

    const SetTitleHeader = (title: string, lastTitle: string) => {
      dispatch(headerTitleActionCreator(title));
      dispatch(headerLastTitleActionCreator(lastTitle));
    };

    if (headerTitle !== thisTitle) SetTitleHeader(thisTitle, headerTitle);
  }, [dispatch, idPenguin, headerTitle, headerLastTitle]);

  return (
    <DetailPageStyles className="penguin--container">
      <PenguinDetail allPenguins={allPenguins} penguin={penguin} />
    </DetailPageStyles>
  );
};

export default DetailPage;
