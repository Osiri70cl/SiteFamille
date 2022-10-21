import React from "react";

import Mainbanner from "../components/Mainbanner";
import Homecards from "../components/Homecards";
import image from "../assets/img/PhotoMain.jpg";

const Home = () => {
  return (
    <main className="main">
      <section className="homeSection">
        <Mainbanner image={image} />
      </section>
      <section className="homeSection">
        <Homecards />
      </section>
    </main>
  );
};

export default Home;
