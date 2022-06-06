import { useAppSelector } from "../../app/redux/hooks/hooks";
import { penguinsSelector } from "../../app/redux/features/penguinSlice/penguinSlice";
import Penguins from "../../components/Penguins/Penguins";
import PenguinsPageStyles from "./PenguinsPageStyles";

const PenguinsPage = () => {
  const penguins = useAppSelector(penguinsSelector);

  return (
    <div className="container">
      <h1>Discover</h1>
      <PenguinsPageStyles>
        <Penguins results={penguins} />
      </PenguinsPageStyles>
    </div>
  );
};
export default PenguinsPage;
