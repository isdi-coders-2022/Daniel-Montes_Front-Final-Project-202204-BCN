import { IPenguin } from "../../app/redux/types/penguin/penguinInterfaces";
import Penguin from "../Penguin/Penguin";
import PenguinsPageStyles from "../../Styles/PagesStyles";
interface Props {
  allPenguins: IPenguin[];
}

const Favs = ({ allPenguins }: Props): JSX.Element => {
  return (
    <PenguinsPageStyles className={`penguins-container`}>
      <h1 className="display-none">AdoptAPenguin.com</h1>
      {allPenguins.map((penguin, index) => {
        return <Penguin key={index} penguin={penguin} />;
      })}
    </PenguinsPageStyles>
  );
};
export default Favs;
