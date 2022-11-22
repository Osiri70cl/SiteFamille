import React, { useState } from "react";
import { account } from "../appwrite/appwriteConfig";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Connection = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  //login

  const loginUser = async (e) => {
    e.preventDefault();
    try {
      await account.createEmailSession(user.email, user.password);
      navigate("/profil"); //success
    } catch (error) {
      console.log(error); //failure
    }
  };

  return (
    <main className="main connection">
      <h2 className="main__title">
        Connectez-vous afin de partager avec la famille !
      </h2>
      <form
        action="" // A remplir avec le backend
        method="POST"
      >
        <div>
          <input
            type="email"
            placeholder="Email"
            name="email"
            required
            onChange={(e) => setUser({ ...user, email: e.target.value })}
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="mot de passe"
            name="password"
            required
            onChange={(e) => setUser({ ...user, password: e.target.value })}
          />
        </div>
        <div>
          <button type="submit" onClick={loginUser}>
            {" "}
            Se connecter{" "}
          </button>
        </div>
      </form>
      <Link to="/inscription">
        <h3 className="inscriptionLink">
          Pas de compte ? Pas de soucis, inscrivez-vous maintenant !
        </h3>
      </Link>
    </main>
  );
};

export default Connection;
