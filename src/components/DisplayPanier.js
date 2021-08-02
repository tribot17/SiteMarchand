import React from "react";
import { PanierRef } from "../data/firebaseConfig";
import { useCollectionData } from "react-firebase-hooks/firestore";

const DisplayPanier = () => {
  const [PanierData] = useCollectionData(PanierRef, { idField: "id" });

  const handleChange = async (op, id, quantity) => {
    if (op === "plus") {
      PanierRef.doc(id).update({
        quantity: quantity + 1,
      });
    }
    if (op === "minus") {
      PanierRef.doc(id).update({
        quantity: quantity - 1,
      });
    }
  };

  const handleDelete = (id) => {
    PanierRef.doc(id).delete();
  };
  return (
    <div className="displayPanierCard">
      {PanierData &&
        PanierData.filter(
          (item) => item.uid === localStorage.getItem("id")
        ).map((item) => {
          return (
            <div className="panierCard" key={item.id}>
              <div>
                <h3>Nom de l'article : {item.name}</h3>
                <img src={item.picture} />
              </div>

              <p>prix : {item.prix}€</p>
              <p>Taille : {item.taille}</p>

              <div className="quantity">
                <p>{`Quantité : ${item.quantity}`}</p>

                <i
                  className="fas fa-plus"
                  onClick={() => handleChange("plus", item.id, item.quantity)}
                ></i>
                <i
                  className="fas fa-minus"
                  onClick={() => handleChange("minus", item.id, item.quantity)}
                ></i>
                <i
                  className="fas fa-times"
                  onClick={() => handleDelete(item.id)}
                ></i>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default DisplayPanier;
