import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/redux/hooks/hooks";
import { loadFavsThunk } from "../../app/redux/thunks/penguinThunk/penguinThunk";
import Penguin from "../Penguin/Penguin";

const Favs = () => {
  const useSelector = useAppSelector;

  const dispatch = useAppDispatch();
  const { username } = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(loadFavsThunk(username));
  }, [dispatch, username]);

  const penguins = useSelector((state) => state.penguins);
  return (
    <div className="penguins-container">
      {penguins.map((penguin) => {
        return <Penguin key={penguin.id} penguin={penguin} />;
      })}
    </div>
  );
};

export default Favs;
