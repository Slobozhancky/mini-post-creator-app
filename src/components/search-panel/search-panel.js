import { Component } from "react";
import PostStatusFilter from "../post-status-filter/post-status-filter";
import "./search-panel.scss";
export default class SearchPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: "",
    };
    this.onUpdateSearch = this.onUpdateSearch.bind(this);
  }

  onUpdateSearch(event) {
    const term = event.target.value;
    this.setState({ term });
    this.props.onUpdateSearch(term);
  }
  render() {
    return (
      <div className="search-panel">
        <input
          className="search-input"
          placeholder="Поиск по записям"
          onChange={this.onUpdateSearch}
        />
        <PostStatusFilter />
      </div>
    );
  }
}
