import { Component } from "react";
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
        <input
          className="search-input"
          placeholder="Search by notes"
          onChange={this.onUpdateSearch}
        />
    );
  }
}
