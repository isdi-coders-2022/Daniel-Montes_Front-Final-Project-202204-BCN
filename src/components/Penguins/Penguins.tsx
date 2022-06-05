import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/redux/hooks/hooks";
import { loadPenguinsThunk } from "../../app/redux/thunks/penguinThunk/penguinThunk";
import Penguin from "../Penguin/Penguin";

const Penguins = (): JSX.Element => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(loadPenguinsThunk());
  }, [dispatch]);

  const { AllPenguins } = useAppSelector((state) => state.penguins);
  return (
    <ul className="penguins-container">
      {AllPenguins.map((penguin, index) => {
        return <Penguin key={index} penguin={penguin} />;
      })}
    </ul>
  );
};

export default Penguins;
