import React from "react";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className="navbar ">
      <div className="container">
        <div className="logo" onClick={() => navigate("/")}>
          Manga<span>Harbor</span>
        </div>
        <div className="search">
          <i className="fas fa-search search-icon"></i>
          <input placeholder="Search for a manga.." />
        </div>
      </div>
    </div>
  );
};
export default Navbar;
