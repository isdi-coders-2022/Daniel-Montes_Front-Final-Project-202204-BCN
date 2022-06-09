import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/redux/hooks/hooks";
import { loadPenguinsThunk } from "../../app/redux/thunks/penguinThunk/penguinThunk";
import {
  IPenguin,
  IPenguins,
} from "../../app/redux/types/penguin/penguinInterfaces";
import Penguin from "../Penguin/Penguin";

const Penguins = ({ results: penguins }: IPenguins) => {
  const dispatch = useAppDispatch();
  const logged = useAppSelector((state) => state.users.logged);

  useEffect(() => {
    if (logged) dispatch(loadPenguinsThunk());
  }, [logged, dispatch]);

  return (
    <div className="penguins-container">
      {penguins.map((penguin: IPenguin) => {
        return <Penguin penguin={penguin} key={penguin.id} />;
      })}
    </div>
  );
};

export default Penguins;
