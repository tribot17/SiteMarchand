import React from "react";
import { NavLink } from "react-router-dom";


const DisplayPromAndNews = (props) => {
  const url = "t" + props.url;
  return (
    <>
      <NavLink exact to={url} activeClassName="navActive">
        <div className="inside">
          <img src={props.img} alt=""/>
          <div className="textProduct">
          <h4>{props.name}</h4>
          <h4>{props.price}</h4>
          </div>
          <i class="fa-solid fa-magnifying-glass"></i>
        </div>
      </NavLink>
    </>
  );
};

export default DisplayPromAndNews;
