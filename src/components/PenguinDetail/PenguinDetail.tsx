import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../app/redux/hooks/hooks";
import {
  editPenguinThunk,
  getPenguinThunk,
  resetPenguinThunk,
} from "../../app/redux/thunks/penguinThunk/penguinThunk";
import { IPenguin } from "../../app/redux/types/penguin/penguinInterfaces";
import iconPhotoEmpty from "../../images/contact-photo-add.png";
import { blankFormData, cleanArray } from "../../utils/utils";
import ActionButtons from "../ActionButtons/ActionButtons";
import { correctAction } from "../Modals/Modals";

interface Props {
  allPenguins: IPenguin[];
  penguin: IPenguin;
}

const PenguinDetail = ({ penguin, allPenguins }: Props): JSX.Element => {
  const dispatch = useAppDispatch();
  const thisPenguin = useAppSelector((state) => state.penguins.penguin);

  const idUser = useAppSelector((state) => state.user.id);
  const isLiker = penguin.likers.includes(idUser);

  const [, setFormData] = useState<IPenguin>(blankFormData);

  const penguinImage =
    penguin.image === "" && !penguin.imageBackup.includes("/")
      ? iconPhotoEmpty
      : penguin.imageBackup;

  const getDetailPrev = () => {
    const actualPos = allPenguins.map((e) => e.id).indexOf(thisPenguin.id);
    let prevPenguinId = "";

    if (actualPos === 0 || actualPos <= -1) {
      prevPenguinId = allPenguins[allPenguins.length - 1]?.id.toString();
      correctAction("End of list!");
    } else {
      const newPos = actualPos - 1;
      prevPenguinId = allPenguins[newPos]?.id.toString();
    }

    dispatch(resetPenguinThunk());
    dispatch(getPenguinThunk(prevPenguinId));
  };

  const getDetailNext = () => {
    const actualPos = allPenguins.map((e) => e.id).indexOf(thisPenguin.id);
    let nextPenguinId = "";

    if (actualPos === allPenguins.length - 1) {
      nextPenguinId = allPenguins[0]?.id.toString();
      correctAction("Begin of list!");
    } else {
      const newPos = actualPos + 1;
      nextPenguinId = allPenguins[newPos]?.id.toString();
    }

    dispatch(resetPenguinThunk());
    dispatch(getPenguinThunk(nextPenguinId));
  };

  const deleteFromLikers = () => {
    const newData = { ...penguin };
    newData.likers = newData.likers.filter((liker) => liker !== idUser);
    newData.likes = penguin.likes >= 1 ? penguin.likes - 1 : penguin.likes;

    setFormData(newData);
    dispatch(editPenguinThunk(newData, "Delete Like."));
  };

  const addToLikers = () => {
    const newData = { ...penguin };
    newData.likers = newData.likers.concat(idUser);
    newData.likes = penguin.likes + 1;

    setFormData(newData);

    dispatch(editPenguinThunk(newData, "Add Like."));
  };

  const handleLikes = () => {
    if (Array(penguin.likers)) {
      cleanArray(penguin.likers);

      isLiker ? deleteFromLikers() : addToLikers();
    }
  };

  const selectIconLike = isLiker
    ? " bounce detail-animatedLike"
    : ` bounce2 detail-animatedLikeInit`;

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
        <button className={`animated${selectIconLike}`} onClick={handleLikes} />
      </div>
      <div className="detail-description-container">
        <span className="detail-description">{penguin.description}</span>
      </div>
    </div>
  );
};

export default PenguinDetail;
