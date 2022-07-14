import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/redux/hooks/hooks";
import {
  editPenguinThunk,
  getPenguinThunk,
  loadFavsThunk,
  loadPenguinsThunk,
} from "../../app/redux/thunks/penguinThunk/penguinThunk";
import { IPenguin } from "../../app/redux/types/penguin/penguinInterfaces";
import { initialFormData, toPascalCase } from "../../utils/utils";
import iconPhotoEmpty from "../../images/contact-photo-add.png";
import { Modal } from "../Modals/ModalPrompt";
import { ReactDimmer } from "react-dimmer";

interface Props {
  penguin: IPenguin;
}

const Penguin = ({ penguin }: Props): JSX.Element => {
  const idUser = useAppSelector((state) => state.user.id);
  const isFavsPage = document.location.href.includes("favs");

  const [formData, setFormData] = useState<IPenguin>(initialFormData);
  const [isModalOpen, setModal] = useState(false);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const message = "Delete penguin: " + penguin?.name + "?";

  const handleDelete = (): void => {
    setModal((prevState) => !prevState);
  };

  const handleMoreDetail = () => {
    navigate(`/detail/${penguin.id}`);
  };

  const handleEdit = () => {
    dispatch(getPenguinThunk(penguin.id));
    navigate(`/penguins/edit/${penguin.id}`);
  };

  const deleteFromLikers = () => {
    const newPenguin = {
      ...penguin,
      likers: penguin.likers.filter((liker) => liker !== idUser),
      likes: penguin.likes >= 1 ? penguin.likes - 1 : penguin.likes,
    };

    setFormData(newPenguin);
    dispatch(editPenguinThunk(newPenguin, "Deleted Like!"));
  };

  const addToLikers = () => {
    const newPenguin = {
      ...penguin,
      likers: penguin.likers.concat(idUser),
      likes: penguin.likes + 1,
    };

    setFormData(newPenguin);
    dispatch(editPenguinThunk(newPenguin, "Added Like!"));
  };

  const handleLikes = () => {
    if (Array(formData.likers)) {
      const uniqueLikers = Array.from(new Set(formData.likers));
      const newFormData = formData;
      newFormData.likers = uniqueLikers;

      uniqueLikers.includes(idUser) ? deleteFromLikers() : addToLikers();

      isFavsPage ? dispatch(loadFavsThunk()) : dispatch(loadPenguinsThunk());
    }
  };

  const deleteFromFavs = () => {
    const newPenguin = {
      ...penguin,
      favs: penguin.favs.filter((fav) => fav !== idUser),
    };

    setFormData(newPenguin);
    dispatch(editPenguinThunk(newPenguin, "Deleted from favorites!"));
  };

  const addToFavs = () => {
    const newPenguin = {
      ...penguin,
      favs: penguin.favs.concat(idUser),
    };
    setFormData(newPenguin);
    dispatch(editPenguinThunk(newPenguin, "Added to favorites! "));
  };

  const handleFavs = () => {
    if (Array(formData.favs)) {
      const uniqueLikers = Array.from(new Set(formData.favs));
      let newFormData = formData;
      newFormData.favs = uniqueLikers;

      uniqueLikers.includes(idUser) ? deleteFromFavs() : addToFavs();

      isFavsPage ? dispatch(loadFavsThunk()) : dispatch(loadPenguinsThunk());
    }
  };

  const isFav = penguin.favs.includes(idUser);
  const isLiker = penguin.likers.includes(idUser);

  const selectIconFav = isFav
    ? " bounce animatedFavDelete"
    : " bounce2 animatedFav";

  const selectIconLike = isLiker
    ? " bounce animatedLike"
    : ` bounce2 animatedLikeInit`;

  const isURL = penguin.imageBackup.includes("/");

  const penguinImage =
    penguin.image === "" && !isURL ? iconPhotoEmpty : penguin.imageBackup;

  const contactImageClass =
    penguin.image === "" && !isURL ? " iconPhotoEmpty" : "";

  return (
    <div className="item penguin-container">
      <h1 className="display-none">AdoptAPenguin.com</h1>
      <h2 className="penguin-name">{toPascalCase(`${penguin.name}`)}</h2>

      <div className="penguin-image-container">
        <div className="penguin-image-content">
          <img
            src={penguinImage}
            alt={penguin.name}
            className={`penguin-image${contactImageClass}`}
          />
          <div className="penguin-buttons">
            <button
              onClick={handleFavs}
              className={`animated ${selectIconFav}`}
            />
            <button
              className={`animated bounce animatedEdit`}
              onClick={handleEdit}
            />
            <button
              className={`animated bounce animatedDelete`}
              onClick={handleDelete}
            />
          </div>
        </div>
      </div>
      <div className="penguin-datalist">
        <span className="category">{toPascalCase(`${penguin.category}`)}</span>
        <span className="likes">{penguin.likes}</span>
        <button
          className={`animated ${selectIconLike}`}
          onClick={handleLikes}
        />
      </div>
      <div className="penguin-description">
        {penguin.description.substring(0, 100)}

        <span className="link effect" onClick={handleMoreDetail}>
          ...More
        </span>
      </div>

      {isModalOpen && (
        <Modal
          closeModal={setModal}
          type="delete"
          idPenguin={penguin.id}
          message={message}
        />
      )}
      <ReactDimmer
        isOpen={isModalOpen}
        exitDimmer={setModal}
        zIndex={90}
        blur={1.5}
      />
    </div>
  );
};

export default Penguin;
