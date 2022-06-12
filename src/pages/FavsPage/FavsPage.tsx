import { infoAction } from "../../components/Modals/Modals";
import Navbar from "../../components/Navbar/Navbar";
import Favs from "../../components/Penguins/Penguins";
import PenguinsPageStyles from "../PenguinsPage/PenguinsPageStyles";

const FavsPage = () => {
  infoAction("Loading Favs full list, please wait...");

  return (
    <>
      <PenguinsPageStyles>
        <div className="container">
          <Navbar title="Favs" />

          <Favs />
        </div>
      </PenguinsPageStyles>
    </>
  );
};

export default FavsPage;
