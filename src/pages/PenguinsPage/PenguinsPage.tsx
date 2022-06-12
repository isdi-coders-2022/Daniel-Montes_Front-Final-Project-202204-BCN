import Penguins from "../../components/Penguins/Penguins";
import PenguinsPageStyles from "./PenguinsPageStyles";
import Navbar from "../../components/Navbar/Navbar";
import { infoAction } from "../../components/Modals/Modals";

const PenguinsPage = () => {
  infoAction("Loading full list...");
  return (
    <PenguinsPageStyles className="container projecyLayout">
      <Navbar title="Discover" />
      <Penguins />
    </PenguinsPageStyles>
  );
};
export default PenguinsPage;
