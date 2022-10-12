import React, { useState } from "react";

const FORM_ENDPOINT =
  "https://public.herotofu.com/v1/847abbd0-3a64-11ed-8ff6-d1ee553f3964";

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = () => {
    setTimeout(() => {
      setSubmitted(true);
    }, 100);
  };

  if (submitted) {
    return (
      <main className="main contact">
        <h2 className="main__title">Merci !</h2>
        <div className="main__description">
          Nous vous contacterons au plus vite !
        </div>
      </main>
    );
  }

  return (
    <main className="main contact">
      <h2 className="main__title">Contactez-nous !</h2>
      <h3 className="main__description">
        {" "}
        Un problème ? Une idée ? Autre ? Utilisez le formulaire pour prendre
        contact avec nous; vous trouverez également l'adresse mail du webmaster
        en dessous.
      </h3>
      <form
        action={FORM_ENDPOINT}
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
          <textarea placeholder="Votre message" name="message" required />
        </div>
        <div>
          <button type="submit"> Envoyer </button>
        </div>
      </form>
      <h4 className="webmasterContact">Webmaster : remi.pince@outlook.com</h4>
    </main>
  );
};

export default ContactForm;
