import Button from "../btn/btn";
import "./post-list-item.css";
import star from "./star.svg";
import trash from "./trash.svg";
console.log(star);
const Post = ({ text }) => {
  return (
    <div className="app-list-item">
      <p>{text}</p>
      <span>
        <Button url={star} />
        <Button url={trash} />
      </span>
    </div>
  );
};

export default Post;
