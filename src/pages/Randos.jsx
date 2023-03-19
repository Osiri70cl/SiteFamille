import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { NavLink } from "react-router-dom";

import CardsRando from "../components/CardsRando";

const Randos = () => {
  const [randos, setRandos] = useState([]);
  
    useEffect(() => {
      const fetchRandos = async () => {
        const response = await axios.get('https://www.famillep.remip-project.fr/wp-json/wp/v2/posts?categories=26');
        setRandos(response.data);
      };
  
      fetchRandos();
    }, []);
    console.log(randos);
  
    return (
      <section className='container' >
        <div className="home__products">
        {randos.map(rando => (
          <article key={rando.id}>
            <NavLink to={`/randos/${rando.id}`}>
              <CardsRando id={rando.id} image={rando.better_featured_image} />
            </NavLink>
          </article>
      ))}
      </div>
      </section>
    );
  }

export default Randos;
