import Navigation from "../components/Navigation";
import React from "react";
import DisplayPromAndNews from "../components/DisplayPromAndNews";
import Footer from "../components/Footer";

const Women = () => {
  return (
    <div className="men">
      <Navigation />

      <div className="men-header">
        <h1>Femme</h1>
      </div>
      <div className="home-news">
        <div className="home-promotions">
          <h2>Les dèrnières promotions</h2>
          <div className="display-promotions">
            <ul>
              <li className="home-promotions-card">
                <div className="displayPromOrNews">
                  <DisplayPromAndNews
                    url={"/nike2"}
                    img={"./img/product1.png"}
                    name={"Zapatos"}
                    price={"15€"}
                  />
                  <i class="fas fa-shopping-cart"></i>
                </div>
              </li>
              <li className="home-promotions-card">
                <div className="displayPromOrNews">
                  <DisplayPromAndNews
                    url={"/nike1"}
                    img={"./img/product1.png"}
                    name={"Zapatos"}
                    price={"15€"}
                  />
                  <i class="fas fa-shopping-cart"></i>
                </div>
              </li>
              <li className="home-promotions-card">
                <div className="displayPromOrNews">
                  <DisplayPromAndNews
                    url={"/nike1"}
                    img={"./img/product1.png"}
                    name={"Zapatos"}
                    price={"15€"}
                  />
                  <i class="fas fa-shopping-cart"></i>
                </div>
              </li>
              <li className="home-promotions-card">
                <div className="displayPromOrNews">
                  <DisplayPromAndNews
                    url={"/nike1"}
                    img={"./img/product1.png"}
                    name={"Zapatos"}
                    price={"15€"}
                  />
                  <i class="fas fa-shopping-cart"></i>
                </div>
              </li>
              <li className="home-promotions-card">
                <div className="displayPromOrNews">
                  <DisplayPromAndNews
                    url={"/nike1"}
                    img={"./img/product1.png"}
                    name={"Zapatos"}
                    price={"15€"}
                  />
                  <i class="fas fa-shopping-cart"></i>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="men-product">
        <ul className="displayMenProduct">
          <li className="displayMenCard">
            <div className="displayPromOrNews">
              <DisplayPromAndNews
                url={"/nike1"}
                img={"./img/product1.png"}
                name={"Zapatos"}
                price={"15€"}
              />
              <i class="fas fa-shopping-cart"></i>
            </div>
          </li>
          <li className="displayMenCard">
            <div className="displayPromOrNews">
              <DisplayPromAndNews
                url={"/nike1"}
                img={"./img/product1.png"}
                name={"Zapatos"}
                price={"15€"}
              />
              <i class="fas fa-shopping-cart"></i>
            </div>
          </li>
          <li className="displayMenCard">
            <div className="displayPromOrNews">
              <DisplayPromAndNews
                url={"/nike1"}
                img={"./img/product1.png"}
                name={"Zapatos"}
                price={"15€"}
              />
              <i class="fas fa-shopping-cart"></i>
            </div>
          </li>
          <li className="displayMenCard">
            <div className="displayPromOrNews">
              <DisplayPromAndNews
                url={"/nike1"}
                img={"./img/product1.png"}
                name={"Zapatos"}
                price={"15€"}
              />
              <i class="fas fa-shopping-cart"></i>
            </div>
          </li>
        </ul>
      </div>
      <Footer />
    </div>
  );
};

export default Women;
