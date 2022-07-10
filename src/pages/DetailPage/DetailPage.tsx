import { useEffect } from "react";
import { headerTitleActionCreator } from "../../app/redux/features/uiSlice/uiSlice";
import { useAppDispatch, useAppSelector } from "../../app/redux/hooks/hooks";
import { getPenguinThunk } from "../../app/redux/thunks/penguinThunk/penguinThunk";
import PenguinDetail from "../../components/PenguinDetail/PenguinDetail";
import DetailPageStyles from "./DetailPageStyles";

// let firstRun = true;

const DetailPage = (): JSX.Element => {
  const dispatch = useAppDispatch();

  const { penguin } = useAppSelector((state) => state.penguins);

  const idPenguin = document.location.href.substring(
    document.location.href.lastIndexOf("/") + 1,
    document.location.href.length
  );

  useEffect(() => {
    if (typeof idPenguin !== "undefined" || idPenguin === "") {
      dispatch(getPenguinThunk(idPenguin));
    }
    dispatch(headerTitleActionCreator("Detail"));

    // firstRun = false;
    // }
  }, [dispatch, idPenguin]);

  return (
    <DetailPageStyles className="penguin--container">
      <PenguinDetail penguin={penguin} />
    </DetailPageStyles>
  );
};

export default DetailPage;
