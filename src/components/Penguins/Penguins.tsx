import Penguin from "../Penguin/Penguin";
import { IPenguin } from "../../app/redux/types/penguin/penguinInterfaces";

import { finishedLoadingActionCreator } from "../../app/redux/features//uiSlice/uiSlice";

interface Props {
  penguins: IPenguin[];
}

const loadedState = finishedLoadingActionCreator();

const HidderDelete = loadedState ? "" : " display-none";
const Penguins = ({ penguins }: Props) => {
  return (
    <div className={`penguins-container${HidderDelete}`}>
      {penguins.map((penguin, index) => {
        return <Penguin key={index} penguin={penguin} />;
      })}
    </div>
  );
};

export default Penguins;
