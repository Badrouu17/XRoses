import React from "react";
import Home from "./components/Home";
import Service from "./components/Service";
import Showcase from "./components/Showcase";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Work from "./components/Work";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

function App() {
  return (
    <div className="app container">
      <div className="container-stretch">
        <Home></Home>
        <Service></Service>
        <Showcase></Showcase>
        <Work></Work>
        <Contact></Contact>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
