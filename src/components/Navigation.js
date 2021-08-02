import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  const [menuDisplay1, setmenuDisplay1] = useState(false);
  const [menuDisplay2, setmenuDisplay2] = useState(false);
  let femmeTrue = false;
  let hommeTrue = false;

  if (!menuDisplay1 && menuDisplay2) {
    femmeTrue = true;
  }
  if (menuDisplay1 && !menuDisplay2) {
    hommeTrue = true;
  }

  const setDisplayMenu = () => {
    console.log("menu1");
    if (menuDisplay2) {
      setmenuDisplay2(false);
    }
    if (menuDisplay1) {
      setmenuDisplay1(false);
    } else {
      setmenuDisplay1(true);
    }
  };
  const setDisplayMenu2 = () => {
    if (menuDisplay1) {
      setmenuDisplay1(false);
    }
    if (menuDisplay2) {
      setmenuDisplay2(false);
    } else {
      setmenuDisplay2(true);
    }
  };

  const goOnWomenPage = () => {
    <NavLink exact to="/femme" activeClassName="navActive"></NavLink>;
  };

  return (
    <div className="navbar">
      <ul id="navbarUl">
        <li>
          <NavLink exact to="/" activeClassName="navActive">
            <i className="fas fa-home"></i>
            <span>Acceuil</span>
          </NavLink>
        </li>
        <li>
          <div onClick={setDisplayMenu}>
            <i className="fas fa-male"></i>
            <span>Homme</span>
          </div>

          {hommeTrue ? (
            <div className="nav-menu-men">
              <ul id="men-ul">
                <h3>Vetemement Homme</h3>
                <li>
                  <p>
                    <NavLink
                      exact
                      to="/homme"
                      activeClassName="ulActive"
                      className="textNav"
                    >
                      Chaussure
                    </NavLink>
                  </p>
                </li>
              </ul>
            </div>
          ) : (
            <div></div>
          )}
        </li>
        <li>
          <div onClick={setDisplayMenu2}>
            <i className="fas fa-female"></i>
            <span>Femme</span>
            {femmeTrue ? (
              <div className="nav-menu-women">
                <ul id="women-ul" onClick={goOnWomenPage}>
                  <h3>Vetemement Femme</h3>
                  <li>
                    <p>
                      <NavLink
                        exact
                        to="/femme"
                        activeClassName="ulActive"
                        className="textNav"
                      >
                        Chaussure
                      </NavLink>
                    </p>
                  </li>
                </ul>
              </div>
            ) : (
              <div></div>
            )}
          </div>
        </li>
        <div className="panierAndAccount">
          <li>
            <NavLink exact to="/moncompte" activeClassName="navActive">
              <i className="fas fa-user"></i>
              <span>Mon compte</span>
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/panier" activeClassName="navActive">
              <i className="fas fa-shopping-basket"></i>
              <span>Panier</span>
            </NavLink>
          </li>
        </div>
      </ul>
    </div>
  );
};

export default Navigation;
