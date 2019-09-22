import React from "react";
import Navbar from "./Navbar";
import { FaHeart } from "react-icons/fa";

const Home = () => {
  return (
    <div id="Home">
      <Navbar></Navbar>
      <div className="home-content">
        <p className="home-content-title">Roses,</p>
        <p className="home-content-title">the world symbol of love</p>
        <p className="home-content-dsc">
          {" "}
          share them{" "}
          <span>
            {" "}
            <FaHeart></FaHeart>{" "}
          </span>{" "}
        </p>
      </div>
    </div>
  );
};

export default Home;
