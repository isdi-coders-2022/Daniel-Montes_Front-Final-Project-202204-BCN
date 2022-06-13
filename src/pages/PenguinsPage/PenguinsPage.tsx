import Penguins from "../../components/Penguins/Penguins";
import PenguinsPageStyles from "./PenguinsPageStyles";
import { infoAction } from "../../components/Modals/Modals";

const PenguinsPage = () => {
  infoAction("Loading full list...");
  return (
    <PenguinsPageStyles className="container projecyLayout">
      <h1 className="display-none">Penguins</h1>
      <Penguins />
    </PenguinsPageStyles>
  );
};
export default PenguinsPage;
