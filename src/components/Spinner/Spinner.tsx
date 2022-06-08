export interface ISpinner {
  hide: boolean;
}

const Spinner = ({ hide }: ISpinner) => {
  const showHideClassName = hide ? "modal display-block" : "modal display-none";
  return (
    <div className={showHideClassName}>
      <div className="block">
        <div className="item"></div>
        <div className="item"></div>
        <div className="item"></div>
        <div className="item"></div>
        <div className="item"></div>
        <div className="item"></div>
        <div className="item"></div>
        <div className="item"></div>
      </div>
    </div>
  );
};

export default Spinner;
