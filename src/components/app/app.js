import AppHeader from "../app-header/app-header";
import SearchPanel from "../search-panel/search-panel";
import PostList from "../post-list/post-list";
import AddPost from "../post-add-form/post-add-form";
import PostStatusFilter from "../post-status-filter/post-status-filter";
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

      term: "",
      filter: "all",
    };

    this.deletePost = this.deletePost.bind(this);
    this.addPost = this.addPost.bind(this);
    this.onToggleImportant = this.onToggleImportant.bind(this);
    this.onToggleLiked = this.onToggleLiked.bind(this);
    this.onUpdateSearch = this.onUpdateSearch.bind(this);
    this.onFilterSelect = this.onFilterSelect.bind(this);
  }

  searchPost(items, term) {
    if (term.length === 0) {
      return items;
    }

    return items.filter((item) => {
      return item.text.indexOf(term) > -1;
    });
  }

  filterPost(items, filter) {
    if (filter === "like") {
      return items.filter((item) => item.like);
    } else {
      return items;
    }
  }

  onUpdateSearch(term) {
    this.setState({ term });
  }
  onFilterSelect(filter) {
    this.setState({ filter });
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
    this.setState(({ data }) => {
      const index = data.findIndex((elem) => elem.id === id);

      const old = data[index];
      const newItem = { ...old, important: !old.important };

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
    const visiblePosts = this.filterPost(
      this.searchPost(this.state.data, this.state.term),
      this.state.filter
    );

    return (
      <div className="app">
        <AppHeader name="Illia Slobodianiuk" all={allPosts} likes={liked} />
        <div class="search-panel">
          <SearchPanel
            onUpdateSearch={this.onUpdateSearch}
            filter={this.state.filter}
          />
          <PostStatusFilter
            filter={this.state.filter}
            onFilterSelect={this.onFilterSelect}
          />
        </div>
        <PostList
          posts={visiblePosts}
          onDelete={this.deletePost}
          onToggleImportant={this.onToggleImportant}
          onToggleLiked={this.onToggleLiked}
        />
        <AddPost onAdd={this.addPost} />
      </div>
    );
  }
}
