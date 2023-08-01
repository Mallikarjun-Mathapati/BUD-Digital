import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footer-heading">
          <h3>Is there something you want to discuss with us?</h3>
          <button>Leave A Message</button>
        </div>
        <div className="container1">
          <div className="footer-main-grid">
            <div className="footer-grid">
              <div className="footer-grid-1">
                <h3>Brand Management</h3>
                <hr />
                <p>
                  Brand identity creation, brand positioning strategy, brand
                  story, brand tone, key messaging, brand architecture, brand
                  communication design, Brand promotion, value proposition,
                  brand name, tagline, logo design, brand design, Brand digital
                  footprint, brand guideline, marketing and communications,
                  measurement.
                </p>
              </div>
              <div className="footer-grid-2">
                <h3>Creative Services</h3>
                <hr />
                <h6>Logo Designers Bengaluru</h6>
                <p>
                  Brand name, tagline, Logo Design, brochure design, leaflet,
                  flier design, pamphlet design, Business card design,
                  letterhead design, newspaper advertisement design, booklet
                  design, Poster design, Hoarding design, kiosk design, menu
                  card design, standee design, Newsletter design, Powerpoint
                  design,Indoor,
                  <span>
                    <a href="/">Read me....</a>
                  </span>
                </p>
              </div>
              <div className="footer-grid-3">
                <h3>Digital Marketing</h3>
                <hr />
                <div className="footer-links">
                  <Link path="/">SEO Services</Link>
                  <Link path="/">Social Media Marketing</Link>
                  <Link path="/">PPC Advertising</Link>
                  <Link path="/">Content & Email Marketing</Link>
                  <Link path="/">Blog</Link>
                </div>
                <br />
                <div className="footer-links footer-links-1 ">
                  <Link path="/">Website Design & Development</Link>
                  <Link path="/">Ecommerce website development</Link>
                  <Link path="/">Wordpress Development</Link>
                  <Link path="/">Domain / Hosting & Server Management</Link>
                </div>
              </div>
              <div className="footer-grid-4">
                <h3>Get in touch with us</h3>
                <hr />
                <h5>Bud Creative Ad Agency</h5>
                <p>No.4C-303, 2nd Floor,</p>
                <p>
                  OMBR Layout Main Road, (Close to Kasturinagar, Indiranagar),
                </p>
                <p>Bangalore - 560 043.</p>
                <div className="footer-contact">
                  <p>
                    Mobile : <a href="tel:+919886833138"> +91 98 86 833138</a>
                  </p>
                  <p>
                    email :
                    <span>
                      <a href="mailto:manoj@budindia.com">
                        {" "}
                        manoj@budindia.com
                      </a>
                    </span>
                  </p>
                </div>
                <div className="footer-other-branch ">
                  <h5 style={{ paddingBottom: "0px" }}>
                    Australia Representative
                  </h5>
                  <p>No 18 Turin street, REDBANK,</p>
                  <p>Qld 4301, Australia.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-footer">
          <p>Copyright © Budindia 2023</p>
          <div className="footer-social">
            <Link path="/">
              <i className="fa-brands fa-facebook fa-lg"></i>
            </Link>
            <Link path="/">
              <i className="fa-brands fa-instagram fa-lg"></i>
            </Link>
            <Link path="/">
              <i className="fa-brands fa-linkedin-in fa-lg"></i>
            </Link>
            <Link path="/">
              <i className="fa-brands fa-youtube fa-lg"></i>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
