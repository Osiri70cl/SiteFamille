import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";

import Cards from "../../components/Cards";

const Recettes = () => {
    const [posts, setPosts] = useState([]);
  
    useEffect(() => {
      const fetchPosts = async () => {
        const response = await axios.get('https://www.famillep.remip-project.fr/wp-json/wp/v2/posts?categories=5');
        setPosts(response.data);
      };
  
      fetchPosts();
    }, []);
    console.log(posts);
  
    return (
      <section className="home__products">
        {posts.map(post => (
          <article key={post.id}>
            <Link to={`recettes/${post.id}`}>
              <Cards id={post.id} image={post.better_featured_image} />
            </Link>
          </article>
      ))}
      </section>
    );
  }

export default Recettes;
