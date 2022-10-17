import AppHeader from "../app-header/app-header";
import SearchPanel from "../search-panel/search-panel";
import PostList from "../post-list/post-list";
import AddPost from "../post-add-form/post-add-form";
import "./app.scss";
import { Component } from "react";
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { text: "i`m learning React", important: true, id: "qwer1" },
        { text: "Are you learning Front-end ?", important: false, id: "qwer3" },
        { text: "Hello world!!!", important: true, id: "qwer2" },
      ],
    };
    this.deleteItem = this.deleteItem.bind(this);
  }

  deleteItem(id) {
    this.setState(({ data }) => {
      const index = data.findIndex((elem) => elem.id === id);

      const before = data.slice(0, index);
      const after = data.slice(index + 1);

      const newArr = [...before, ...after];

      return { data: newArr };
    });
  }

  render() {
    return (
      <div className="app">
        <AppHeader name="Illia Slobodianiuk" all={0} likes={0} />
        <SearchPanel />
        <PostList posts={this.state.data} onDelete={this.deleteItem} />
        <AddPost />
      </div>
    );
  }
}
