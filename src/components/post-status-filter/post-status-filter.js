import Button from "../btn/btn";
import "./post-status-filter.scss";

const PostStatusFilter = () => {
  return (
    <>
      <Button className="all" text="Все" />
      <Button className="likes" text="Понравилось" />
    </>
  );
};

export default PostStatusFilter;
