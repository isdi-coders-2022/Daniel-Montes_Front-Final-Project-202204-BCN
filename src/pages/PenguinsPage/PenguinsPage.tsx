import { useAppSelector } from "../../app/redux/hooks/hooks";
import { penguinsSelector } from "../../app/redux/features/penguinSlice/penguinSlice";
import Penguins from "../../components/Penguins/Penguins";
import PenguinsPageStyles from "./PenguinsPageStyles";
import Navbar from "../../components/Navbar/Navbar";

const PenguinsPage = () => {
  const penguins = useAppSelector(penguinsSelector);

  return (
    <PenguinsPageStyles>
      <div className="container">
        <Navbar />

        <Penguins results={penguins} />
      </div>
    </PenguinsPageStyles>
  );
};
export default PenguinsPage;
