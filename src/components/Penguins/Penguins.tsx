import Penguin from "../Penguin/Penguin";
import { finishedLoadingActionCreator } from "../../app/redux/features/uiSlice/uiSlice";

import { IPenguin } from "../../app/redux/types/penguin/penguinInterfaces";
import PageStyles from "../../Styles/PagesStyles";

const loadedState = finishedLoadingActionCreator();
const hidderDelete = loadedState ? "" : " display-none";

const Penguins = ({
  allPenguins,
  idUser,
}: {
  allPenguins: IPenguin[];
  idUser: string;
}) => {
  return (
    <PageStyles className={`penguins-container${hidderDelete}`}>
      {allPenguins.map((penguin, index) => {
        return <Penguin key={index} idUser={idUser} penguin={penguin} />;
      })}
    </PageStyles>
  );
};

export default Penguins;
