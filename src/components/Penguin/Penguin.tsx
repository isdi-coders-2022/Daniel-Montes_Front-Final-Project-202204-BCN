import { IPenguin } from "../../app/redux/types/penguin/penguinInterfaces";

interface Props {
  penguin: IPenguin;
}

const Penguin = (props: Props): JSX.Element => {
  return (
    <div className="penguin-container">
      <img src={props.penguin.image} alt={props.penguin.name} />
      <h4>{props.penguin.name}</h4>
      <ul className="penguin-datalist">
        <li>{props.penguin.category}</li>
        <li>{props.penguin.likes}</li>
        <li>{props.penguin.description}</li>
      </ul>
    </div>
  );
};

export default Penguin;
