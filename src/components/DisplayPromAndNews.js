import React from "react";
import { NavLink } from "react-router-dom";

const DisplayPromAndNews = (props) => {
  const url = "t" + props.url;
  return (
    <div>
      <NavLink exact to={url} activeClassName="navActive">
        <div className="inside">
          <img src={props.img} />
          <h3>{props.name}</h3>
          <h3>{props.price}</h3>
        </div>
      </NavLink>
    </div>
  );
};

export default DisplayPromAndNews;
