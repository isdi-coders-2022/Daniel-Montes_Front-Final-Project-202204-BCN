import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/redux/hooks/hooks";
import { loadPenguinsThunk } from "../../app/redux/thunks/penguinThunk/penguinThunk";
import PenguinDetail from "../../components/PenguinDetail/PenguinDetail";
import DetailPageStyles from "./DetailPageStyles";

const DetailPage = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const { idPenguin } = useParams();
  const { penguin } = useAppSelector((state) => state.penguins);

  useEffect(() => {
    dispatch(loadPenguinsThunk());
  }, [dispatch]);

  return (
    <>
      <DetailPageStyles className="penguin--container">
        <PenguinDetail key={idPenguin} penguin={penguin} />
      </DetailPageStyles>
    </>
  );
};

export default DetailPage;
