import React from "react";
import DisplayPromAndNews from "../components/DisplayPromAndNews";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

const Men = () => {
  return (
    <div className="men">
      <Navigation />

      <div className="men-header">
        <h1>Homme</h1>
      </div>

      <div className="home-news">
        <div className="home-promotions">
          <h2>Les dèrnières promotions</h2>

          <div className="display-promotions">
            <ul>
              <li className="home-promotions-card">
                <div className="displayPromOrNews">
                  <DisplayPromAndNews
                    url={"/chassure1"}
                    img={"./img/product6.jpg"}
                    name={"Chassure basse"}
                    price={"15€"}
                  />
                </div>
              </li>

              <li className="home-promotions-card">
                <div className="displayPromOrNews">
                  <DisplayPromAndNews
                    url={"/chassure2"}
                    img={"./img/product2.jpg"}
                    name={"Chaussure Noire"}
                    price={"20€"}
                  />
                </div>
              </li>

              <li className="home-promotions-card">
                <div className="displayPromOrNews">
                  <DisplayPromAndNews
                    url={"/chassure3"}
                    img={"./img/product3.jpg"}
                    name={"Chaussure Haute Rouge"}
                    price={"25€"}
                  />
                </div>
              </li>

              <li className="home-promotions-card">
                <div className="displayPromOrNews">
                  <DisplayPromAndNews
                    url={"/chassure4"}
                    img={"./img/product4.jpg"}
                    name={"Chassure de sport orange"}
                    price={"30€"}
                  />
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
                url={"/chaussure5"}
                img={"./img/product5.jpg"}
                name={"Chassure basse blanche"}
                price={"30€"}
              />
            </div>
          </li>

          <li className="displayMenCard">
            <div className="displayPromOrNews">
              <DisplayPromAndNews
                url={"/chassure2"}
                img={"./img/product2.jpg"}
                name={"Chaussure noire"}
                price={"20€"}
              />
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
            </div>
          </li>
        </ul>
      </div>
      <Footer />
    </div>
  );
};

export default Men;
