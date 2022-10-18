import "./post-status-filter.scss";
// import Heart from "./heart.svg";
import { Component } from "react";
export default class PostStatusFilter extends Component {
  constructor(props) {
    super(props);

    this.buttons = [
      { name: "all", label: "All" },
      { name: "likes", label: "Likes" },
    ];
  }
  render() {
    // const windowWidth = window.innerWidth;
    let buttons = this.buttons.map((item) => {
      const active = this.props.filter === item.name;
      const btnClass = active ? "active" : "";
      return (
        <button key={item.name} className={`${item.name} ${btnClass}`} onClick={() => this.props.onFilterSelect(item.name)}>
          {item.label}
        </button>
      );
    });

    return <>{buttons}</>;
  }
}
