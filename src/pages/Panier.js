import React from "react";
import DisplayPanier from "../components/DisplayPanier";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import { clothData } from "../data/db";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { PanierRef } from "../data/firebaseConfig";

const Panier = () => {
  const [PanierData] = useCollectionData(PanierRef, { idField: "id" });
  let itemList = [];
  let total = 0;

  const fetchPanier = () => {
    itemList = PanierData;
  };
  fetchPanier();

  const calculatTotal = () => {
    try {
      PanierData.forEach((item) => {
        if (item.uid === localStorage.getItem("id")) {
          total += item.quantity * item.prix;
        }
        return total;
      });
    } catch (err) {
      console.log(err);
    }
  };
  calculatTotal();

  return (
    <div className="panier">
      <Navigation />

      <div className="panier-display">
        <div>
          <h1>Panier</h1>
          <ul className="listPanier">
            <DisplayPanier />
          </ul>
        </div>

        <div className="recapitulatif">
          <h1>Récapitulatif</h1>
          <h3>Total : {total}€</h3>
          <button>Paiement</button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Panier;
