import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Connection from "./pages/Connection";
import Inscription from "./pages/Inscription";
import Entree from "./pages/categories/Entree";
import Plat from "./pages/categories/Plat";
import Vin from "./pages/categories/Vin";
import Dessert from "./pages/categories/Dessert";
import Singlerecette from "./pages/Singlerecette";
import Singlerando from "./pages/Singlerando";
import Singlephoto from "./pages/Singlephoto";
import Randos from "./pages/Randos";
import Photos from "./pages/Photos";
import Categorie from "./pages/Categorie";
import Latest from "./pages/Latest";
import Frigo from "./pages/Frigo";
import Profil from "./pages/Profil";

import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

const App = () => {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/SiteFamille" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/connection" element={<Connection />} />
        <Route path="/profil" element={<Profil />} />
        <Route path="/inscription" element={<Inscription />} />
        <Route path="/categorie" element={<Categorie />} />
        <Route path="/categorie/entree" element={<Entree />} />/categorie/
        <Route path="/categorie/plat" element={<Plat />} />
        <Route path="/categorie/vin" element={<Vin />} />
        <Route path="/categorie/dessert" element={<Dessert />} />
        <Route path="/Singlerecette/:recetteId" element={<Singlerecette />} />
        <Route path="photos/:photoId" element={<Singlephoto />} />
        <Route path="randos/:randoId" element={<Singlerando />} />
        <Route path="randonnee" element={<Randos />} />
        <Route path="photo" element={<Photos />} />
        <Route path="latest" element={<Latest />} />
        <Route path="frigo" element={<Frigo />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
