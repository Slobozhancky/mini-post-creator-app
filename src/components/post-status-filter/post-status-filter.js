import Button from "../btn/btn";
import "./post-status-filter.css";

const PostStatusFilter = () => {
  return (
    <>
      <Button className="all" text="Все" />
      <Button className="likes" text="Понравилось" />
    </>
  );
};

export default PostStatusFilter;
