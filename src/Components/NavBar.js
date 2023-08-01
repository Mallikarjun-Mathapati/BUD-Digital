import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../Images/logo.png";

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const [nav, setNav] = useState(false);
  const NavActive = () => {
    const Scroll = window.scrollY;
    if (Scroll > 100) {
      setNav(true);
    } else {
      setNav(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", NavActive);
  }, [setNav]);
  return (
    <>
      <div className={`navbar ${nav ? "navbar-active" : ""}`}>
        <div className="navbar-grid">
          <div className="navbar-logo">
            <figure>
              <img src={Logo} alt="" />
            </figure>
          </div>
          <div className="main-flex">
            <div className="navbar-links-flex">
              <Link>HOME</Link>
              <Link>KNOW US</Link>
              <Link>SERVICES</Link>
              <Link>WORKS</Link>
              <Link>CLIENTS</Link>
              <Link>DIGITAL MARKETING</Link>
              <Link>SOCIAL MEDIA</Link>
              <Link>FILMS</Link>
              <Link>CAREERS</Link>
              <Link>CONTACT</Link>
              <Link>
                {" "}
                <span>
                  <i className="fa-solid fa-phone"></i>
                </span>
                +91 9886833138
              </Link>
            </div>

            <div
              className={`menu-logo ${open ? "hide-menu-logo" : ""}`}
              onClick={() => setOpen(!open)}
            >
              <i
                class="fa-solid fa-bars fa-xl"
                style={{ color: "#ffffff" }}
              ></i>
            </div>
            <div
              className={`hide-menu-logo1 ${open ? "show-menu-logo1" : ""}`}
              onClick={() => setOpen(!open)}
            >
              <i class="fa-solid fa-xmark" style={{ color: "#ffffff" }}></i>
            </div>
          </div>
        </div>
        {/* responsive menu  */}
        <div className={`menu-main-nav ${open ? "menu-display-none" : ""} `}>
          <div className="menu-navbar">
            <Link path="/" onClick={() => setOpen(!open)}>
              HOME
            </Link>
            <Link path="/" onClick={() => setOpen(!open)}>
              KNOW US
            </Link>
            <Link path="/" onClick={() => setOpen(!open)}>
              SERVICES
            </Link>
            <Link path="/" onClick={() => setOpen(!open)}>
              WORKS
            </Link>
            <Link path="/" onClick={() => setOpen(!open)}>
              CLIENTS
            </Link>
            <Link path="/" onClick={() => setOpen(!open)}>
              DIGITAL MARKETING
            </Link>
            <Link path="/" onClick={() => setOpen(!open)}>
              SOCIAL MEDIA
            </Link>
            <Link path="/" onClick={() => setOpen(!open)}>
              FILMS
            </Link>
            <Link path="/" onClick={() => setOpen(!open)}>
              CAREERS
            </Link>
            <Link path="/" onClick={() => setOpen(!open)}>
              CONTACT
            </Link>
            <Link>
              {" "}
              <span>
                <i className="fa-solid fa-phone"></i>
              </span>
              +91 9886833138
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
