import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Error from "./pages/Error";
import Contact from "./pages/Contact";
import Connection from "./pages/Connection";
import Inscription from "./pages/Inscription";
import Recettes from "./pages/Recettes";
import Singlerecette from "./pages/Singlerecette";
import Singlerando from "./pages/Singlerando";
import Singlephoto from "./pages/Singlephoto";
import Randos from "./pages/Randos";
import Photos from "./pages/Photos";
import Categorie from "./pages/Categorie";
import Latest from "./pages/Latest";
import Frigo from "./pages/Frigo";

import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

const App = () => {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/SiteFamille" element={<Home />} />
        <Route path="*" element={<Error />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/connection" element={<Connection />} />
        <Route path="/inscription" element={<Inscription />} />
        <Route path="/categorie" element={<Categorie />} />
        <Route path="recettes" element={<Recettes />} />
        <Route path="recettes/:recetteId" element={<Singlerecette />} />
        <Route path="photos/:photoId" element={<Singlephoto />} />
        <Route path="randos/:randoId" element={<Singlerando />} />
        <Route path="randonnee" element={<Randos />} />
        <Route path="photo" element={<Photos />} />
        <Route path="latest" element={<Latest />} />
        <Route path="frigo" element={<Frigo />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
