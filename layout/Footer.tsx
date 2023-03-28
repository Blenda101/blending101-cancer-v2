/* eslint-disable @next/next/no-img-element */
import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            <div className="footer-logo">
              <img src="img/footer_logo.png" className="img-fluid" alt=" " />
            </div>
            <div className="social-icon">
              <ul>
                <li>
                  <a href=" ">
                    <img src="img/facebook.svg" alt=" " />
                  </a>
                </li>
                <li>
                  <a href=" ">
                    <img src="img/instagram.svg" alt=" " />
                  </a>
                </li>
                <li>
                  <a href=" ">
                    <img src="img/twitter.svg" alt=" " />
                  </a>
                </li>
                <li>
                  <a href=" ">
                    <img src="img/youtube.svg" alt=" " />
                  </a>
                </li>
                <li>
                  <a href=" ">
                    <img src="img/Pinterest_black.svg" alt=" " />
                  </a>
                </li>
                <li>
                  <a href=" ">
                    <img src="img/tiktok.svg" alt=" " />
                  </a>
                </li>
              </ul>
            </div>
            <div className="copy-right">
              <p>© 2022 Blending101 - 2022</p>
            </div>
          </div>
        </div>
      </div>
      <img
        src="img/footer_element.svg"
        className="img-fluid footer_img"
        alt=""
      />
    </footer>
  );
};

export default Footer;
