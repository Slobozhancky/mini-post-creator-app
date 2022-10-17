import AppHeader from "../app-header/app-header";
import SearchPanel from "../search-panel/search-panel";
import PostList from "../post-list/post-list";
import AddPost from "../post-add-form/post-add-form";
import { nanoid } from "nanoid";
import "./app.scss";
import { Component } from "react";
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          text: "i`m learning React",
          important: true,
          like: false,
          id: "qwer1",
        },
        {
          text: "Are you learning Front-end ?",
          important: false,
          like: false,
          id: "qwer3",
        },
        { text: "Hello world!!!", important: true, like: false, id: "qwer2" },
      ],
    };

    this.deletePost = this.deletePost.bind(this);
    this.addPost = this.addPost.bind(this);
    this.onToggleImportant = this.onToggleImportant.bind(this);
    this.onToggleLiked = this.onToggleLiked.bind(this);
  }

  deletePost(id) {
    this.setState(({ data }) => {
      const index = data.findIndex((elem) => elem.id === id);

      const before = data.slice(0, index);
      const after = data.slice(index + 1);

      const newArr = [...before, ...after];

      return { data: newArr };
    });
  }

  addPost(input) {
    const newPost = {
      text: input,
      import: false,
      id: nanoid(),
    };

    this.setState(({ data }) => {
      const newArr = [...data, newPost];
      return { data: newArr };
    });
  }

  onToggleImportant(id) {
    console.log("important");
  }

  onToggleLiked(id) {
    this.setState(({ data }) => {
      const index = data.findIndex((elem) => elem.id === id);

      const old = data[index];
      const newItem = { ...old, like: !old.like };

      const newArr = [
        ...data.slice(0, index),
        newItem,
        ...data.slice(index + 1),
      ];

      return {
        data: newArr,
      };
    });
  }

  render() {
    const liked = this.state.data.filter((item) => item.like).length;
    const allPosts = this.state.data.length;

    return (
      <div className="app">
        <AppHeader name="Illia Slobodianiuk" all={allPosts} likes={liked} />
        <SearchPanel />
        <PostList
          posts={this.state.data}
          onDelete={this.deletePost}
          onToggleImportant={this.onToggleImportant}
          onToggleLiked={this.onToggleLiked}
        />
        <AddPost onAdd={this.addPost} />
      </div>
    );
  }
}
