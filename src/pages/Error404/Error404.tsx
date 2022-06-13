import imageHeart from "../../images/heartLike.png";

export const Error404Page = () => {
  return (
    <div>
      <p className="not-found" />
      <img src={imageHeart} alt="penguins are cute" />
      Page <br></br>Not Found!
    </div>
  );
};
