import Penguin from "../Penguin/Penguin";
import { IPenguin } from "../../app/redux/types/penguin/penguinInterfaces";

interface Props {
  penguins: IPenguin[];
}

const Penguins = ({ penguins }: Props) => {
  return (
    <div className="penguins-container">
      {penguins.map((penguin, index) => {
        return <Penguin key={index} penguin={penguin} />;
      })}
    </div>
  );
};

export default Penguins;
