import "firebase/firestore";
import "firebase/auth";
import React, { useState } from "react";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import { firestore } from "../data/firebaseConfig";

const MyAccount = () => {
  const [connected, setConnected] = useState(false);
  const [accountData, setAccountData] = useState();
  const [errorName, setErrorName] = useState(false);
  const [errorSurName, setErrorSurName] = useState(false);
  const [errorEmail, setErrorEmail] = useState(false);
  const [errorPassword, setErrorPassword] = useState(false);
  const [errorConfirm, setErrorConfirm] = useState(false);
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [adress, setAdress] = useState("");
  const [confirm, setConfirm] = useState();
  const [created, setCreated] = useState(false);
  const [errorLogin, setErrorLogin] = useState(false);

  let loginEmail = "";
  let loginPassword = "";
  let dataLogin = [];
  const loginRef = firestore.collection("Account");

  // Fetch data from the database
  const getData = async () => {
    loginRef.get().then((res) =>
      res.forEach((data) => {
        dataLogin.push(data.data());
      })
    );
  };
  getData();

  const onChange = (id, value) => {
    if (id === "nom") {
      if (!value.match(/^[a-zA-Z_.-]*$/)) {
        setErrorName(true);
      } else {
        setName(value);
        setErrorName(false);
      }
    }
    if (id === "prenom") {
      if (!value.match(/^[a-zA-Z0-9_.-]*$/)) {
        setErrorSurName(true);
      } else {
        setSurname(value);
        setErrorSurName(false);
      }
    }
    if (id === "email") {
      if (!value.match(/^[\w_-]+@[\w-]+\.[a-z]{2,4}$/i)) {
        setErrorEmail(true);
        setEmail(null);
      } else {
        setEmail(value);
        setErrorEmail(false);
      }
    }
    if (id === "password") {
      if (
        !value.match(
          /^(?=.*?[A-Z])(?=(.*[a-z]){1,})(?=(.*[\d]){1,})(?=(.*[\W]){1,})(?!.*\s).{8,}$/
        )
      ) {
        setErrorPassword(true);
        setPassword(null);
      } else {
        setPassword(value);
        setErrorPassword(false);
      }
    }
    if (id === "confirm") {
      console.log(password);
      if (password !== value) {
        setErrorConfirm(true);
        setConfirm(false);
        console.log(value, password);
      } else {
        setConfirm(true);
        console.log("confirm ok ");
        setErrorConfirm(false);
      }
    }
    if (id === "adress") {
      setAdress(value);
    }
  };

  const handleSend = (e) => {
    e.preventDefault();
    console.log(adress, email, name, surname, password, confirm);
    if (adress && email && name && surname && password && confirm) {
      loginRef.add({
        name,
        surname,
        email,
        adress,
        password,
      });
      setCreated(true);
    }
  };

  const handleLoginChange = (value, id) => {
    if (id === "email") {
      loginEmail = value;
    }
    if (id === "password") {
      loginPassword = value;
    }
  };

  const handleLogin = async () => {
    dataLogin.forEach((item) => {
      if (item.email === loginEmail && item.password === loginPassword) {
        setAccountData({
          email: item.email,
          name: item.name,
          surname: item.surname,
          adress: item.adress,
        });

        setTimeout(setConnected(true), 1000);
      } else {
        setErrorLogin(true);
      }
    });
  };

  return (
    <div className="myAccount">
      <Navigation />
      <div className="createAccount-Login">
        {connected === true ? (
          <div className="accountDisplay">
            <div className="displayAccountInfo">
              <p id="prenom">Prenom : {accountData.surname}</p>
              <p id="nom">Nom : {accountData.name}</p>
              <p id="email">Adresse-email :{accountData.email} </p>
              <p id="adress">Adresse : {accountData.adress}</p>
            </div>

            <div className="NameAccount">
              <h3>Mon compte</h3>
              <button>Se déconnecter</button>
            </div>
          </div>
        ) : (
          <div className="createAccountDisplay">
            <form id="createAccount">
              <h3>Inscription</h3>
              <div className="InputLabel">
                <label htmlFor="nom">Entrez votre nom</label>
                <input
                  type="text"
                  placeholder="Nom"
                  id="nom"
                  autoComplete="off"
                  onChange={(e) => onChange("nom", e.target.value)}
                />

                {errorName ? (
                  <div>
                    <span>Entrez un nom correct</span>
                  </div>
                ) : (
                  <div></div>
                )}
              </div>

              <div className="InputLabel">
                <label htmlFor="prenom">Entrez votre prenom</label>
                <input
                  type="text"
                  placeholder="Prénom"
                  id="prenom"
                  autoComplete="off"
                  onChange={(e) => onChange("prenom", e.target.value)}
                />
                {errorSurName ? (
                  <div>
                    <span>Entrez un prenom correct</span>
                  </div>
                ) : (
                  <div></div>
                )}
              </div>

              <div className="InputLabel">
                <label htmlFor="address">Entrez votre Adresse</label>
                <input
                  type="text"
                  placeholder="Adresse"
                  id="adresse"
                  autoComplete="off"
                  onChange={(e) => onChange("adress", e.target.value)}
                />
              </div>
              <div className="InputLabel">
                <label htmlFor="Email">Entrez votre email</label>
                <input
                  type="text"
                  placeholder="Email"
                  id="email"
                  autoComplete="off"
                  onChange={(e) => onChange("email", e.target.value)}
                />
                {errorEmail ? (
                  <div>
                    <span>Entrez un mail correct</span>
                  </div>
                ) : (
                  <div></div>
                )}
              </div>

              <div className="InputLabel">
                <label htmlFor="motDePasse">Entrez votre mot de passe</label>
                <input
                  type="password"
                  placeholder="Mot de passe "
                  id="motDePasse"
                  onChange={(e) => onChange("password", e.target.value)}
                />
                {errorPassword ? (
                  <div>
                    <span>
                      Entrez un mot de passe avec au minimum 1 chiffre, 1
                      caractère spécial et 8 caratères
                    </span>
                  </div>
                ) : (
                  <div></div>
                )}
              </div>
              <div className="InputLabel">
                <label htmlFor="Confirm">Confirmer votre mot de passe</label>
                <input
                  type="password"
                  placeholder="Confirmer le Mot de passe"
                  id="Confirm"
                  onChange={(e) => onChange("confirm", e.target.value)}
                />
                {errorConfirm ? (
                  <div>
                    <span>Les mots de passe ne correspond pas</span>
                  </div>
                ) : (
                  <div></div>
                )}
              </div>
              <button onClick={handleSend}>Envoyer</button>
              {created ? (
                <div>
                  <h3>Recharger la page pour vous connecter !</h3>
                </div>
              ) : (
                <div></div>
              )}
            </form>
            <div className="login">
              <h3>Vous avez deja un compte ? </h3>
              <div className="InputLabel">
                <label htmlFor="mailLogin">Adresse email</label>
                <input
                  type="text"
                  placeholder="Adresse email"
                  id="mailLogin"
                  onChange={(e) => handleLoginChange(e.target.value, "email")}
                />
              </div>
              <div className="InputLabel">
                <label htmlFor="passwordLogin">Mot de passe</label>
                <input
                  type="password"
                  placeholder="Mot de passe"
                  id="passwordLogin"
                  onChange={(e) =>
                    handleLoginChange(e.target.value, "password")
                  }
                />
              </div>
              {errorLogin ? (
                <div className="errorLogin">
                  <span>Aucun compte trouvé </span>
                </div>
              ) : (
                <div></div>
              )}
              <button onClick={handleLogin}>Connectez vous</button>
            </div>
          </div>
        )}
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default MyAccount;
