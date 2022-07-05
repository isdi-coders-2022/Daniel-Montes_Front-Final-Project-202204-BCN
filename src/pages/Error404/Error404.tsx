import Error404Styles from "./Error404Styles";

export const Error404Page = () => {
  return (
    <Error404Styles>
      <div className="notfound-container">
        <h2>
          Page Not Found!
          <span className="notfound-message">
            ..."{document.location.pathname}"
          </span>
        </h2>
      </div>
    </Error404Styles>
  );
};
