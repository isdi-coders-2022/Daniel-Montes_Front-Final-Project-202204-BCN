import { useAppDispatch, useAppSelector } from "../../app/redux/hooks/hooks";
import { deletePenguinThunk } from "../../app/redux/thunks/penguinThunk/penguinThunk";

const PenguinDetail = (): JSX.Element => {
  const { penguin } = useAppSelector((state) => state.penguin);
  const dispatch = useAppDispatch();

  const HidderDelete = document.location.href.includes("/penguins/favs")
    ? ""
    : " display-none";

  const handleDelete = (): void => {
    if (penguin.id) {
      dispatch(deletePenguinThunk(`${penguin.id}`));
    }
  };

  return (
    <div className="penguin-detail-container">
      <ul>
        <li className="li-detail">
          <h2 className="penguin-name">{penguin.name}</h2>
        </li>
        <li>
          <div className="penguin-image-container">
            <img
              src={penguin.image}
              alt={`Pinguino ${penguin.name}`}
              className="penguin-image-detail"
            />
          </div>
        </li>
        <li>
          <span className="category">{penguin.category}</span>
          <span className="likes">{penguin.likes}</span>
        </li>
        <li>
          <span className="penguin-description">{penguin.description}</span>
        </li>
        <li>
          {" "}
          <div
            className={`animated bounce animatedDelete${HidderDelete}`}
            onClick={handleDelete}
            title="bt-delete"
          >
            <button className="bt-delete" />
          </div>
        </li>
      </ul>
    </div>
  );
};

export default PenguinDetail;
