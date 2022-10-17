import Post from "../post-list-item/post-list-item";
const PostList = ({ posts, onDelete, onToggleImportant, onToggleLiked }) => {
  let arrOfPosts = posts.map((elem) => (
    <Post
      key={elem.id}
      text={elem.text}
      important={elem.important}
      like={elem.like}
      onDelete={() => onDelete(elem.id)}
      onToggleImportant = {() => onToggleImportant(elem.id)}
      onToggleLiked = {() => onToggleLiked(elem.id)}
    />
  ));
  return <div className="app-list">{arrOfPosts}</div>;
};

export default PostList;
