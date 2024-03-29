import React, { useEffect, useRef, useState } from "react";
import "./Navbar.css";
import logo from "../../assets/images/logo.png";
import menu_icon from "../../assets/images/menu-icon.png";
import { Link } from "react-scroll";

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const close_nav = useRef(null);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    });
  }, []);

  const [mobileMenu, setMobileMenu] = useState(false);
  const toggleMenu = () => {
    setMobileMenu(!mobileMenu);
  };

  const close_navbar = (e) => {
    if (e.target === close_nav.current) {
      setMobileMenu(false);
    }
  };

  return (
    <>
      <div
        className={`mobile-nav ${!mobileMenu ? "hide-div" : ""}`}
        ref={close_nav}
        onClick={close_navbar}
      />
      <nav className={`container ${sticky ? "dark-nav" : ""}`}>
        <img src={logo} alt="Logo" className="logo" />
        <ul className={mobileMenu ? "" : "hide-mobile-menu"}>
          <li>
            <Link
              to="hero"
              smooth={true}
              offset={-5}
              duration={500}
              onClick={toggleMenu}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="program"
              smooth={true}
              offset={-260}
              duration={500}
              onClick={toggleMenu}
            >
              Program
            </Link>
          </li>
          <li>
            <Link
              to="about"
              smooth={true}
              offset={-150}
              duration={500}
              onClick={toggleMenu}
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              to="campus"
              smooth={true}
              offset={-260}
              duration={500}
              onClick={toggleMenu}
            >
              Campus
            </Link>
          </li>
          <li>
            <Link
              to="testimonials"
              smooth={true}
              offset={-260}
              duration={500}
              onClick={toggleMenu}
            >
              Testimonials
            </Link>
          </li>
          <li>
            <Link
              to="contact"
              smooth={true}
              offset={-260}
              duration={500}
              onClick={toggleMenu}
              className="btn"
            >
              Contact Us
            </Link>
          </li>
        </ul>
        <img
          src={menu_icon}
          alt="Menu Icon"
          className="menu-icon"
          onClick={toggleMenu}
        />
      </nav>
    </>
  );
};

export default Navbar;
