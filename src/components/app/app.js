import AppHeader from "../app-header/app-header";
import Post from "../post-list-item/post-list-item";
import "./app.css";
const App = (props) => {
  return (
    <div className="app">
      <AppHeader name="Illia Slobodianiuk" all={0} likes={0} />
      <Post text='hello world'/>
      <Post text='hello world'/>
      <Post text='hello world'/>
    </div>
  );
};

export default App;
