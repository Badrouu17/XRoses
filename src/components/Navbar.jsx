import React from "react";
import ResponsiveMenu from "react-responsive-navbar";
import { FaBars, FaTimes } from "react-icons/fa";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Navbar = () => {
  return (
    <ResponsiveMenu
      menuOpenButton={<FaBars />}
      menuCloseButton={<FaTimes />}
      changeMenuOn="615px"
      largeMenuClassName="large-menu-className"
      smallMenuClassName="small-menu-className"
      menu={
        <ul className="home-navbar">
          <li className="nav-item">
            <AnchorLink href="#Home">HOME</AnchorLink>
          </li>
          <li className="nav-item">
            <AnchorLink href="#Service">SERVICE</AnchorLink>
          </li>
          <li className="nav-item">
            <AnchorLink href="#Showcase">SHOWCASE</AnchorLink>
          </li>
          <li className="nav-item">
            <AnchorLink href="#Contact">CONTACT</AnchorLink>
          </li>
        </ul>
      }
    />
  );
};

export default Navbar;
