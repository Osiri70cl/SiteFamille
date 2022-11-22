import React, { useEffect } from "react";
import { account } from "../appwrite/appwriteConfig";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Profil = () => {
  const navigate = useNavigate();

  const [userDetails, setUserDetails] = useState();
  useEffect(() => {
    const getData = account.get();
    getData.then(
      function (response) {
        setUserDetails(response);
      },
      function (error) {
        console.log(error);
      }
    );
  }, []);
  //logout
  const handleLogout = async () => {
    try {
      await account.deleteSession("current");
      navigate("/connection");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {userDetails ? (
        <div className="profil">
          <h2 className="profil__title">Profil</h2>
          <div className="profil__container">
            <div className="profil__container__name">
              <p className="profil__container__name__title">Nom</p>
              <p className="profil__container__name__content">
                {userDetails.name}
              </p>
            </div>
            <div className="profil__container__email">
              <p className="profil__container__email__title">Email</p>
              <p className="profil__container__email__content">
                {userDetails.email}
              </p>
            </div>
          </div>
          <button className="profil__button" onClick={handleLogout}>
            Se déconnecter
          </button>
        </div>
      ) : (
        <p>
          Vous n'êtes pas connecté. <a href="/connection">Se connecter</a>
        </p>
      )}
    </>
  );
};

export default Profil;
