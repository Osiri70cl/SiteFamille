import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { NavLink } from "react-router-dom";

import Cards from "../../components/Cards";

const Vin = () => {
    const [posts, setPosts] = useState([]);
  
    useEffect(() => {
      const fetchPosts = async () => {
        const response = await axios.get('https://www.famillep.remip-project.fr/wp-json/wp/v2/posts?categories=7');
        setPosts(response.data);
      };
  
      fetchPosts();
    }, []);
    console.log(posts);
  
    return (
      <section className="container">
        <div className="home__products">
          {posts.map(post => (
            <article key={post.id}>
              <NavLink to={`/Singlerecette/${post.id}`}>
                <Cards id={post.id} image={post.better_featured_image} />
              </NavLink>
            </article>
          ))}
        </div>
      </section>
    );
  }

export default Vin;