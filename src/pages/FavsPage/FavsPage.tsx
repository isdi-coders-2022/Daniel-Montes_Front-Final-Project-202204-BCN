import { loadFavsThunk } from "../../app/redux/thunks/penguinThunk/penguinThunk";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/redux/hooks/hooks";
import Penguins from "../../components/Penguins/Penguins";
import PenguinsPageStyles from "../PenguinsPage/PenguinsPageStyles";
import { stopLoadingAction } from "../../components/Modals/Modals";

const FavsPage = () => {
  const dispatch = useAppDispatch();
  const { allPenguins } = useAppSelector((state) => state.penguins);
  useEffect(() => {
    dispatch(loadFavsThunk());
    stopLoadingAction();
  }, [dispatch]);

  return (
    <>
      <PenguinsPageStyles>
        <Penguins penguins={allPenguins} />
      </PenguinsPageStyles>
    </>
  );
};

export default FavsPage;
