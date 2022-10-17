import Post from "../post-list-item/post-list-item";
const PostList = ({ posts, onDelete }) => {
  let arrOfPosts = posts.map((elem) => (
    <Post
      key={elem.id}
      text={elem.text}
      important={elem.important}
      onDelete={() => onDelete(elem.id)}
    />
  ));
  return <div className="app-list">{arrOfPosts}</div>;
};

export default PostList;
