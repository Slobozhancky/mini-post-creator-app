import AppHeader from "../app-header/app-header";
import SearchPanel from "../search-panel/search-panel";
import PostList from "../post-list/post-list";
import AddPost from "../post-add-form/post-add-form";
import "./app.css";
const App = (props) => {
  const data = [
    { text: "i`m learning React", important: true, id: 'qwer1' },
    { text: "Are you learning Front-end ?", important: false, id: 'qwer3' },
    { text: "Hello world!!!", important: true, id: 'qwer2' },
  ];

  console.log(data);

  return (
    <div className="app">
      <AppHeader name="Illia Slobodianiuk" all={0} likes={0} />
      <SearchPanel />
      <PostList posts={data} />
      <AddPost />
    </div>
  );
};

export default App;
