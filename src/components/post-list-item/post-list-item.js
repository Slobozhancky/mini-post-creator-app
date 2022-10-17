import React, { Component } from "react";
import "./post-list-item.css";
import { ReactComponent as Star } from "./star.svg";
import { ReactComponent as Trash } from "./trash.svg";
import { ReactComponent as Heart } from "./heart.svg";

export default class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      important: false,
      like: false,
    };

    this.onImportant = this.onImportant.bind(this);
    this.onLike = this.onLike.bind(this);
  }

  onImportant() {
    this.setState(({ important }) => ({ important: !important }));
  }

  onLike() {
    this.setState(({ like }) => ({ like: !like }));
  }

  render() {
    const { text } = this.props;
    const { important, like } = this.state;

    let className = "post-text";
    if (important === true) {
      className += " important";
    }

    let classNameStar = "star";
    if (important === true) {
      classNameStar += " important";
    }

    let classNameHeart = "heart";
    if (like === true) {
      classNameHeart += " active";
    }

    return (
      <div className="app-list-item">
        <p className={className}>
          {String(text).length > 80 ? String(text).slice(0, 80) + "..." : text}
        </p>
        <span className="btn-group">
          <button onClick={this.onImportant}>
            <Star className={classNameStar} />
          </button>
          <button onClick={this.onLike}>
            <Heart className={classNameHeart} />
          </button>
          <button>
            <Trash className="trash" />
          </button>
        </span>
      </div>
    );
  }
}
