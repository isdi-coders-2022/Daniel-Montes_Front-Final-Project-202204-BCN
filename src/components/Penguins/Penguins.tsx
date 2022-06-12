import { useEffect } from "react";
import { loadPenguinsThunk } from "../../app/redux/thunks/penguinThunk/penguinThunk";
import Penguin from "../Penguin/Penguin";
import { Ipenguin } from "../../app/redux/types/penguin/penguinInterfaces";
import { useAppDispatch, useAppSelector } from "../../app/redux/hooks/hooks";

const Penguins = (): JSX.Element => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(loadPenguinsThunk());
  }, [dispatch]);

  const results: Ipenguin[] = useAppSelector((state) => state.penguins);
  return (
    <div className="penguins-container">
      {results.map((penguin, index) => {
        return <Penguin key={index} penguin={penguin} />;
      })}
    </div>
  );
};

export default Penguins;
