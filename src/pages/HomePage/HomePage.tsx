import Home from "../../components/Home/Home";
import { stopLoadingAction } from "../../components/Modals/Modals";

import HomePageStyles from "./HomePageStyles";

const HomePage = (): JSX.Element => {
  const stopLoad = () => {
    stopLoadingAction();
  };
  return (
    <HomePageStyles onLoad={stopLoad}>
      <Home />
    </HomePageStyles>
  );
};

export default HomePage;
