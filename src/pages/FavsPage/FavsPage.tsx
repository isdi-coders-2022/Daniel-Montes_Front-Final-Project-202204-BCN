import { infoAction } from "../../components/Modals/Modals";
import Favs from "../../components/Favs/Favs";
import PenguinsPageStyles from "../PenguinsPage/PenguinsPageStyles";

const FavsPage = () => {
  infoAction("Loading Favs full list, please wait...");

  return (
    <>
      <PenguinsPageStyles>
        <h1>Favs</h1>
        <div className="container">
          <Favs />
        </div>
      </PenguinsPageStyles>
    </>
  );
};

export default FavsPage;
