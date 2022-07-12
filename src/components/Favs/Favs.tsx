import { IPenguin } from "../../app/redux/types/penguin/penguinInterfaces";
import Penguin from "../Penguin/Penguin";
import PenguinsPageStyles from "../../Styles/PagesStyles";
import { finishedLoadingActionCreator } from "../../app/redux/features/uiSlice/uiSlice";

const loadedState = finishedLoadingActionCreator();
const hidderDelete = loadedState ? "" : " display-none";

const Favs = ({
  allPenguins,
  idUser,
}: {
  allPenguins: IPenguin[];
  idUser: string;
}): JSX.Element => {
  return (
    <PenguinsPageStyles className={`penguins-container${hidderDelete}`}>
      <h1 className="display-none">AdoptAPenguin.com</h1>
      {allPenguins.map((penguin, index) => {
        return <Penguin key={index} idUser={idUser} penguin={penguin} />;
      })}
    </PenguinsPageStyles>
  );
};
export default Favs;
