import Penguins from "../../components/Penguins/Penguins";
import { useEffect } from "react";
import { loadPenguinsThunk } from "../../app/redux/thunks/penguinThunk/penguinThunk";
import { useAppDispatch, useAppSelector } from "../../app/redux/hooks/hooks";

let firstRun = true;

const PenguinsPage = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (firstRun) {
      dispatch(loadPenguinsThunk());
      firstRun = false;
    }
  }, [dispatch]);

  const { allPenguins } = useAppSelector((state) => state.penguins);

  return <Penguins allPenguins={allPenguins} />;
};

export default PenguinsPage;
