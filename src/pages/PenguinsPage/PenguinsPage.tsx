import { loadPenguinsThunk } from "../../app/redux/thunks/penguinThunk/penguinThunk";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/redux/hooks/hooks";
import Penguins from "../../components/Penguins/Penguins";
import PenguinsPageStyles from "./PenguinsPageStyles";
import { stopLoadingAction } from "../../components/Modals/Modals";

const PenguinsPage = () => {
  const dispatch = useAppDispatch();
  const { allPenguins } = useAppSelector((state) => state.penguins);
  useEffect(() => {
    dispatch(loadPenguinsThunk());
    stopLoadingAction();
  }, [dispatch]);

  return (
    <>
      <PenguinsPageStyles>
        <h1 className="display-none">AdoptaUnPingüino.com</h1>
        <Penguins penguins={allPenguins} />
      </PenguinsPageStyles>
    </>
  );
};

export default PenguinsPage;
