import React, { Component } from "react";
import "./post-list-item.scss";
import { ReactComponent as Star } from "./star.svg";
import { ReactComponent as Trash } from "./trash.svg";
import { ReactComponent as Heart } from "./heart.svg";

export default class Post extends Component {
  render() {
    const {
      text,
      onDelete,
      onToggleImportant,
      onToggleLiked,
      important,
      like,
    } = this.props;

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
          <button onClick={onToggleImportant}>
            <Star className={classNameStar} />
          </button>
          <button onClick={onToggleLiked}>
            <Heart className={classNameHeart} />
          </button>
          <button onClick={onDelete}>
            <Trash className="trash" />
          </button>
        </span>
      </div>
    );
  }
}
