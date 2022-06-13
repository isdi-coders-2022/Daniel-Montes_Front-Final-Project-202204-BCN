import { useEffect } from "react";
import { useParams } from "react-router-dom";
import PenguinDetail from "../../components/PenguinDetail/PenguinDetail";
import { useAppDispatch } from "../../app/redux/hooks/hooks";
import { getPenguinThunk } from "../../app/redux/thunks/penguinThunk/penguinThunk";
import Navbar from "../../components/Navbar/Navbar";
import DetailPageStyles from "./DetailPageStyles";

const DetailPage = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const { idPenguin } = useParams();

  useEffect(() => {
    if (idPenguin) {
      dispatch(getPenguinThunk(idPenguin));
    }
  }, [dispatch, idPenguin]);

  return (
    <DetailPageStyles>
      <Navbar title="Penguin Detail" />;
      <PenguinDetail />
    </DetailPageStyles>
  );
};

export default DetailPage;
