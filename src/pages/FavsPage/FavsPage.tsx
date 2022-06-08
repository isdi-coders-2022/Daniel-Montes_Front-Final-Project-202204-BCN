import { useAppSelector } from "../../app/redux/hooks/hooks";
import { penguinsSelector } from "../../app/redux/features/penguinSlice/penguinSlice";
import Navbar from "../../components/Navbar/Navbar";
import Penguins from "../../components/Penguins/Penguins";
import PenguinsPageStyles from "../PenguinsPage/PenguinsPageStyles";

const FavsPage = () => {
  const penguins = useAppSelector(penguinsSelector);

  return (
    <PenguinsPageStyles>
      <div className="container">
        <Navbar />
        <h1>Favs</h1>
        <Penguins results={penguins} />
      </div>
    </PenguinsPageStyles>
  );
};

export default FavsPage;
