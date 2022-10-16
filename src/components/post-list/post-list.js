import Post from "../post-list-item/post-list-item";
const PostList = () => {
  return (
    <div className="app-list">
      <Post text="hello world" />
      <Post text="hello world" />
      <Post text="hello world" />
    </div>
  );
};

export default PostList;
