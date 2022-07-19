import Penguin from "../Penguin/Penguin";
import { finishedLoadingActionCreator } from "../../app/redux/features/uiSlice/uiSlice";

import { IPenguin } from "../../app/redux/types/penguin/penguinInterfaces";
import PagesStyles from "../../Styles/PagesStyles";

const loadedState = finishedLoadingActionCreator();
const hidderDelete = loadedState ? "" : " display-none";

interface Props {
  allPenguins: IPenguin[];
}
const Penguins = ({ allPenguins }: Props) => {
  return (
    <PagesStyles className={`penguins-container${hidderDelete}`}>
      {allPenguins.map((penguin, index) => {
        return <Penguin key={index} penguin={penguin} />;
      })}
    </PagesStyles>
  );
};

export default Penguins;
