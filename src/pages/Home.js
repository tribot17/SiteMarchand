import React from "react";
import DisplayPromAndNews from "../components/DisplayPromAndNews";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";

const Home = () => {
  //Set id
  if (localStorage.getItem("connected") === null) {
    let uid = Math.random() * 1000;
    localStorage.setItem("id", uid);
    localStorage.setItem("connected", true);
  }

  return (
    <div className="home">
      <Navigation />

      <div className="home-image-header">
        {/* <div id="flesh-droite">
          <i className="fas fa-arrow-left"></i>
        </div>
        <div id="flesh-gauche">
          <i className="fas fa-arrow-right"></i>
        </div> */}
      </div>

      <div className="home-promotions">
        <h2>Les dernières promotions</h2>

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

            <li className="home-promotions-card">
              <div className="displayPromOrNews">
                <DisplayPromAndNews
                  url={"/chassure5"}
                  img={"./img/product5.jpg"}
                  name={"Chaussure basse blanche"}
                  price={"15€"}
                />
              </div>
            </li>
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
