import { loadPenguinsThunk } from "../../app/redux/thunks/penguinThunk/penguinThunk";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/redux/hooks/hooks";
import Penguins from "../../components/Penguins/Penguins";
import PenguinsPageStyles from "./PenguinsPageStyles";

const PenguinsPage = () => {
  const dispatch = useAppDispatch();
  const { allPenguins } = useAppSelector((state) => state.penguins);
  useEffect(() => {
    dispatch(loadPenguinsThunk());
  }, [dispatch]);

  return (
    <>
      <PenguinsPageStyles>
        <Penguins penguins={allPenguins} />
      </PenguinsPageStyles>
    </>
  );
};

export default PenguinsPage;
