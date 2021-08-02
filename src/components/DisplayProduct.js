import React, { useState } from "react";
import Navigation from "./Navigation";
import { clothData } from "../data/db";
import { useParams } from "react-router";
import { PanierRef } from "../data/firebaseConfig";
import { useCollectionData } from "react-firebase-hooks/firestore";

const DisplayProduct = () => {
  let { slug } = useParams();
  let quantity = 1;
  let productData = [];
  const [taille, setTaille] = useState("");
  const [PanierData] = useCollectionData(PanierRef, { idField: "id" });

  clothData.forEach((data) => {
    if (data.id === slug) {
      productData.push(data.name);
      productData.push(data.img1);
      productData.push(data.prix);
      productData.push(data.description);
    }
  });

  const addToPanier = async () => {
    console.log(taille);
    let existe = false;
    let quantToAdd = 0;
    PanierData.map((item) => {
      quantToAdd = item.quantity + 1;
      if (item.name == slug) {
        // console.log(quantToAdd);
        // PanierRef.doc(item.id).update({
        //   quantity: quantity++,
        // });
        existe = true;
      }
    });
    if (!existe) {
      PanierRef.add({
        name: productData[0],
        prix: productData[2],
        taille,
        quantity,
        picture: productData[1],
        uid: localStorage.getItem("id"),
      });
    }
  };

  return (
    <div className="displayProduct">
      <Navigation />
      <div className="displayProductInfo">
        <div className="productImage">
          <img src={productData[1]} />
        </div>

        <div className="productInfo">
          <h1>{productData[0]}</h1>
          <h3>Prix : {productData[2]}€</h3>

          <div className="tailleAndBuy">
            <select
              name="taille"
              id="taille"
              onChange={(e) => setTaille(e.target.value)}
            >
              <option value="">Choissiez une taille</option>
              <option value="S">S</option>
              <option value="M">M</option>
              <option value="L">L</option>
              <option value="XL">XL</option>
            </select>

            <button onClick={addToPanier}>Ajouter au panier</button>
          </div>

          <p>Descrition : {productData[3]}</p>
          <div className="productAvis">
            <p>Avis : </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default DisplayProduct;
