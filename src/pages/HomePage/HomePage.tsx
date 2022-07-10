import { useEffect } from "react";
import { headerTitleActionCreator } from "../../app/redux/features/uiSlice/uiSlice";
import { useAppDispatch } from "../../app/redux/hooks/hooks";
import Home from "../../components/Home/Home";

const HomePage = (): JSX.Element => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(headerTitleActionCreator("Home"));
  }, [dispatch]);

  return <Home />;
};

export default HomePage;
