import AppHeader from "../app-header/app-header";
import SearchPanel from "../search-panel/search-panel";
import PostList from "../post-list/post-list";
import AddPost from "../post-add-form/post-add-form";
import "./app.css";
const App = (props) => {
  return (
    <div className="app">
      <AppHeader name="Illia Slobodianiuk" all={0} likes={0} />
      <SearchPanel />
      <PostList />
      <AddPost/>
    </div>
  );
};

export default App;
