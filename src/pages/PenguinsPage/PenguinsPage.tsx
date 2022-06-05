import Penguins from "../../components/Penguins/Penguins";
import PenguinsPageStyles from "./PenguinsPageStyles";

const PenguinsPage = () => {
  return (
    <div className="container">
      <h1>Discover</h1>
      <PenguinsPageStyles>
        <Penguins />
      </PenguinsPageStyles>
    </div>
  );
};
export default PenguinsPage;
