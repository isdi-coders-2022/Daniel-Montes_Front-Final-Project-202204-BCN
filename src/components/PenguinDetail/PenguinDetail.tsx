import { useAppDispatch, useAppSelector } from "../../app/redux/hooks/hooks";
import { getPenguinThunk } from "../../app/redux/thunks/penguinThunk/penguinThunk";
import { IPenguin } from "../../app/redux/types/penguin/penguinInterfaces";
import iconPhotoEmpty from "../../images/contact-photo-add.png";
import ActionButtons from "../ActionButtons/ActionButtons";

interface Props {
  allPenguins: IPenguin[];
  penguin: IPenguin;
}

const PenguinDetail = ({ penguin, allPenguins }: Props): JSX.Element => {
  const dispatch = useAppDispatch();
  const thisPenguin = useAppSelector((state) => state.penguins.penguin);

  const penguinImage =
    penguin.image === "" && !penguin.imageBackup.includes("/")
      ? iconPhotoEmpty
      : penguin.imageBackup;

  const getDetailPrev = () => {
    const actualPos = allPenguins.map((e) => e.id).indexOf(thisPenguin.id);

    const newPos = actualPos > 0 ? actualPos - 1 : 0;
    const prevPenguinId = allPenguins[newPos]?.id.toString();

    dispatch(getPenguinThunk(prevPenguinId));
  };

  const getDetailNext = () => {
    const actualPos = allPenguins.map((e) => e.id).indexOf(thisPenguin.id);
    debugger;
    const newPos =
      actualPos >= 0
        ? actualPos + 1
        : actualPos > allPenguins.length
        ? allPenguins.length
        : actualPos;

    const nextPenguinId = allPenguins[newPos]?.id.toString();

    dispatch(getPenguinThunk(nextPenguinId));
  };

  return (
    <div className="detail-container">
      <h1 className="display-none">Detail</h1>
      <h2 className="detail-name">{penguin.name}</h2>

      <ActionButtons penguin={penguin} />
      <div className="img-container">
        <button onClick={getDetailPrev} className="imgDetailPrev detailPrev" />
        <img
          src={penguinImage}
          alt={`Pinguino ${penguin.name}`}
          className="detail-image"
        />
        <button onClick={getDetailNext} className="imgDetailNext detailNext" />
      </div>
      <div className="detail-info">
        <span className="category">{penguin.category}</span>
        <span className="likes">{penguin.likes}</span>
        <button className="animated  bounce2 detail-animatedLikeInit"></button>
      </div>
      <span className="detail-description">{penguin.description}</span>
    </div>
  );
};

export default PenguinDetail;
