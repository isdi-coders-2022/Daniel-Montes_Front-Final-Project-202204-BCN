import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/redux/hooks/hooks";
import { loadFavsThunk } from "../../app/redux/thunks/penguinThunk/penguinThunk";
import Favs from "../../components/Favs/Favs";

let firstRun = true;

const FavsPage = (): JSX.Element => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (firstRun) {
      dispatch(loadFavsThunk());
      firstRun = false;
    }
  }, [dispatch]);

  const { allPenguins } = useAppSelector((state) => state.penguins);

  return <Favs allPenguins={allPenguins} />;
};

export default FavsPage;
