import "./post-status-filter.scss";
import Heart from "./heart.svg";
const PostStatusFilter = () => {
  const windowWidth = window.innerWidth;
  let text = "Понравилось";
  if (windowWidth < 376) {
    text = <img src={Heart} alt="heart" width="15px" />;
  }
  return (
    <>
      <button className="all">Все</button>
      <button className="likes">{text}</button>
    </>
  );
};

export default PostStatusFilter;
