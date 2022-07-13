import Penguins from "../../components/Penguins/Penguins";
import { useEffect } from "react";
import { loadPenguinsThunk } from "../../app/redux/thunks/penguinThunk/penguinThunk";
import { useAppDispatch, useAppSelector } from "../../app/redux/hooks/hooks";
import { headerTitleActionCreator } from "../../app/redux/features/uiSlice/uiSlice";

const PenguinsPage = () => {
  const dispatch = useAppDispatch();
  const { allPenguins } = useAppSelector((state) => state.penguins);

  useEffect(() => {
    dispatch(headerTitleActionCreator("Home"));
    dispatch(loadPenguinsThunk());
  }, [dispatch]);

  return <Penguins allPenguins={allPenguins} />;
};

export default PenguinsPage;
