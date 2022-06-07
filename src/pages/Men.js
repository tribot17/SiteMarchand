import React from "react";
import DisplayPromAndNews from "../components/DisplayPromAndNews";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { shoesData } from "../data/db";


const Men = () => {
  return (
    <div className="men">
      <Navigation />
      <div className="home-news">
        <h1>Homme</h1>
        <div className="home-promotions">
          <h2>Les dernières promotions</h2>
          <div className="display-promotions">
            <ul>
              <li className="displayProductPromotions">
                  <DisplayPromAndNews
                    url={"/chassure1"}
                    img={"./img/product6.jpg"}
                    name={"Chassure basse"}
                    price={"15€"}
                  />
              </li>

              <li className="displayProductPromotions">
                  <DisplayPromAndNews
                    url={"/chassure2"}
                    img={"./img/product2.jpg"}
                    name={"Chaussure Noire"}
                    price={"20€"}
                  />
              </li>

              <li className="displayProductPromotions">
                  <DisplayPromAndNews
                    url={"/chassure3"}
                    img={"./img/product3.jpg"}
                    name={"Chaussure Haute Rouge"}
                    price={"25€"}
                  />
              </li>

              <li className="displayProductPromotions">
                  <DisplayPromAndNews
                    url={"/chassure4"}
                    img={"./img/product4.jpg"}
                    name={"Chassure de sport orange"}
                    price={"30€"}
                  />
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="trait"></div>


      <div className="men-product">
        <ul className="displayMenProduct">
          {shoesData &&
            shoesData.map((n, i) => (
              <li className="displayMenCard" key={i}>
                <div className="displayPromOrNews">
                  <DisplayPromAndNews
                    url={`/${n.id}`}
                    img={n.img1}
                    name={n.name}
                    price={`${n.prix} €`}
                  />
                </div>
              </li>
            ))}
        </ul>
      </div>
      <Footer />
    </div>
  );
};

export default Men;
