import Post from "../post-list-item/post-list-item";
const PostList = ({ posts }) => {
  let arrOfPosts = posts.map((elem) => (
    <Post key={elem.id} text={elem.text} important={elem.important} />
  ));
  return <div className="app-list">{arrOfPosts}</div>;
};

export default PostList;
