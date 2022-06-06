import { useAppSelector } from "../../app/redux/hooks/hooks";
import { penguinsSelector } from "../../app/redux/features/penguinSlice/penguinSlice";
import Penguins from "../../components/Penguins/Penguins";
import PenguinsPageStyles from "./PenguinsPageStyles";
import Navbar from "../../components/Navbar/Navbar";

const PenguinsPage = () => {
  const penguins = useAppSelector(penguinsSelector);

  return (
    <div className="container">
      <PenguinsPageStyles>
        <Navbar />
        <h1>Discover</h1>
        <Penguins results={penguins} />
      </PenguinsPageStyles>
    </div>
  );
};
export default PenguinsPage;
