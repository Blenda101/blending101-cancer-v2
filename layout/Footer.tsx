/* eslint-disable @next/next/no-img-element */
import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="citation">
              <div className="citation__top" />
              <div className="citation__right" />
              U.S. Cancer Statistics Working Group. U.S. Cancer Statistics Data
              Visualizations Tool, based on 2021 submission data (1999–2019):
              U.S. Department of Health and Human Services, Centers for Disease
              Control and Prevention and National Cancer Institute;
              www.cdc.gov/cancer/dataviz, released in November 2022.
              <div className="citation__bottom" />
              <div className="citation__left" />
            </div>
          </div>
          <ol className="citation__info">
            <li>
              Rates are the number of cases (or deaths) per 100,000 people and
              are age-adjusted to the 2000 U.S. standard population (19 age
              groups – Census P25–1130).
            </li>
          </ol>
        </div>
        <div className="row">
          <div className="col-12 text-center">
            <div className="footer-logo">
              <img src="img/poliy_logo.svg" className="img-fluid" alt=" " />
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
