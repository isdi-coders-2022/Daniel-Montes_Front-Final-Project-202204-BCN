import {
  headerLastTitleActionCreator,
  headerTitleActionCreator,
} from "../../app/redux/features/uiSlice/uiSlice";
import { useAppDispatch, useAppSelector } from "../../app/redux/hooks/hooks";
import Home from "../../components/Home/Home";

const HomePage = (): JSX.Element => {
  const dispatch = useAppDispatch();

  const { headerTitle } = useAppSelector((state) => state.ui);

  const SetTitleHeader = (title: string, lastTitle: string) => {
    dispatch(headerTitleActionCreator(title));
    dispatch(headerLastTitleActionCreator(lastTitle));
  };

  const thisTitle = "Wellcome";
  if (headerTitle !== thisTitle) SetTitleHeader(thisTitle, headerTitle);

  return <Home />;
};

export default HomePage;
