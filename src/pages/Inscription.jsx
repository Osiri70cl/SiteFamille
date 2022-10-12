import React, { useState } from "react";
import { Link } from "react-router-dom";

const Inscription = () => {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = () => {
    setTimeout(() => {
      setSubmitted(true);
    }, 100);
  };

  if (submitted) {
    return (
      <main className="main contact">
        <h2 className="main__title">Oups !</h2>
        <div className="main__description">
          La partie connection / inscription n'est pas encore prête !
        </div>
      </main>
    );
  }
  return (
    <main className="main connection">
      <h2 className="main__title">
        Inscrivez-vous afin de partager avec la famille !
      </h2>
      <form
        action="" // A remplir avec le backend
        onSubmit={handleSubmit}
        method="POST"
        target="_blank"
      >
        <div>
          <input type="text" placeholder="Nom Prénom" name="name" required />
        </div>
        <div>
          <input type="email" placeholder="Email" name="email" required />
        </div>
        <div>
          <input
            type="password"
            placeholder="mot de passe"
            name="password"
            required
          />
        </div>
        <div>
          <button type="submit"> S'inscrire </button>
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
