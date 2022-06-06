export interface ISpinner {
  show: boolean;
}

const Spinner = ({ show }: ISpinner) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";
  return (
    <div className={showHideClassName}>
      <div className="modal-main">
        <div data-testid="spinner" className="metronome">
          <div className="metronome__dot"></div>
          <div className="metronome__dot"></div>
          <div className="metronome__dot"></div>
          <div className="metronome__dot"></div>
        </div>
      </div>
    </div>
  );
};

export default Spinner;
