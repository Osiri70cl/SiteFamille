import React, { useState } from "react";
import { account } from "../appwrite/appwriteConfig";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

const Inscription = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  //signup

  const signupUser = async (e) => {
    e.preventDefault();

    const promise = account.create(
      uuidv4(),
      user.email,
      user.password,
      user.name
    );

    promise.then(
      function (response) {
        console.log(response);
        navigate("/profil"); //success
      },
      function (error) {
        console.log(error); //failure
      }
    );
  };
  return (
    <main className="main connection">
      <h2 className="main__title">
        Inscrivez-vous afin de partager avec la famille !
      </h2>
      <form action="#" method="POST">
        <div>
          <input
            type="text"
            placeholder="Prénom"
            name="name"
            required
            onChange={(e) => {
              setUser({ ...user, name: e.target.value });
            }}
          />
        </div>
        <div>
          <input
            type="email"
            placeholder="Email"
            name="email"
            required
            onChange={(e) => {
              setUser({ ...user, email: e.target.value });
            }}
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="mot de passe"
            name="password"
            required
            onChange={(e) => {
              setUser({ ...user, password: e.target.value });
            }}
          />
        </div>
        <div>
          <button type="submit" onClick={signupUser}>
            {" "}
            S'inscrire{" "}
          </button>
        </div>
      </form>
      <Link to="/connection">
        <h3 className="connectionLink">
          Déjà un compte ? Pas de soucis, connectez-vous maintenant !
        </h3>
      </Link>
    </main>
  );
};

export default Inscription;
