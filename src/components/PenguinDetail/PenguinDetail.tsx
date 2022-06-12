import { useAppSelector } from "../../app/redux/hooks/hooks";

import FormsStyles from "../../Styles/FormsStyles";

const PenguinDetail = (): JSX.Element => {
  const { penguin } = useAppSelector((state) => state.penguin);

  return (
    <FormsStyles>
      <img
        src={penguin.image ? penguin.imageBackup : ""}
        alt={`Penguin: ${penguin.name}`}
      />
      <span>{penguin.category}</span>

      <h2>{penguin.name}</h2>

      <span>{penguin.likes}</span>

      <span>Description:</span>
      <p> {penguin.description} </p>
    </FormsStyles>
  );
};

export default PenguinDetail;
