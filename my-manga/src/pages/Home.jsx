import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import LogoImage from "../img/manga logo website.jpg";
import axios from "axios";
import Post from "../components/Post";

const Home = () => {
  const [posts, setPosts] = useState([]);

  const location = useLocation();
  const cat = location.search;
  const Posts = posts.map((post) => (
    <Link key={post.post_id} to={`/post/${post.post_id}`}>
      <Post
        img={post.img}
        title={post.title}
        cat={post.cat}
        date={post.created_at.split("T")[0]}
        isHome={true}
      />
    </Link>
  ));
  console.log(location);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`http://localhost:8800/api/posts${cat}`);
        console.log(res);
        setPosts(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [cat]);

  return (
    <div className="Home">
      <div className="container">
        <div className="notifications">
          <Link className="links" to="/">
            <i className="fas fa-home"></i>
            <span>Home</span>
            <br />
            <br />
          </Link>

          <Link className="links" to="/login">
            <i className="fas fa-sign-in-alt"></i>
            <span>Sign in </span>
            <br />
            <br />
          </Link>
          <Link className="links" to="/register">
            <i className="fas fa-user-plus"></i>
            <span>Sign up</span>
            <br />
            <br />
          </Link>
          <div className="link genres-dropdown">
            <i className="fas fa-list-alt"></i>
            <span>Genres</span>
            <ul>
              <Link to="/?cat=action">Action</Link>
              <br />
              <Link to="/?cat=comedy">Comedy</Link>
              <br />
              <Link to="/?cat=drama">Drama</Link>
              <br />
              <Link to="/?cat=fantasy">Fantasy</Link>
              <br />
            </ul>
          </div>
          <Link className="links" to="/?cat=vendre">
            <i className="fas fa-shopping-cart"></i>
            <span>Vendre</span>
            <br />
            <br />
          </Link>
          <Link className="links" to="/?cat=acheter">
            <i className="fas fa-shopping-bag"></i>
            <span>Acheter</span>
            <br />
            <br />
          </Link>
          <Link className="link" to="/createmanga">
            <i className="fas fa-shopping-bag"></i>
            <span>Add new manga</span>
          </Link>
        </div>
        <div className="posts">
          <div className="homepage-image-container">
            <img src={LogoImage} alt="Image" className="homepage-image" />
            <div className="background-text">
              Manga<span>Harbor</span>
              <p>Your Haven for Immersive Stories and Unforgettable Journeys</p>
            </div>
          </div>
          <div className="posts-container">{Posts}</div>
        </div>
      </div>
    </div>
  );
};
export default Home;
