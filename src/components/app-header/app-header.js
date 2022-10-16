import React from "react";
import "./app-header.css";
const AppHeader = (props) => {
  return (
    <div className="app-header">
      <h1>{props.name}</h1>
      <h2>
        {props.all} всего, из них понравилось {props.likes}
      </h2>
    </div>
  );
};

export default AppHeader;
