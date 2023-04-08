/* eslint-disable @next/next/no-img-element */
import {
  useCategory,
  useCategoryToggler,
  useDeath,
} from "@/context/CategoryProvider";
import React from "react";

const Header = () => {
  const category = useCategory();
  const { onIncidence, onDeath } = useCategoryToggler();
  return (
    <header>
      <section id={category} className="banner_sec">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <div className="row mb-4">
                <div className="col-lg-6 col-12 mx-auto">
                  <div
                    className={`d-flex align-items-center gap-4 justify-content-center ${
                      category === "Death" ? "btn_bg" : "btn_bg_incidence"
                    }`}
                  >
                    <a
                      className={`tab-btn ${
                        category === "Incidence" ? "active" : ""
                      }`}
                      onClick={onIncidence}
                    >
                      <img
                        src={
                          category === "Incidence"
                            ? "/img/incidence.svg"
                            : "/img/incidenceD.svg"
                        }
                        alt="Incidence"
                      />
                      <span>Incidence</span>
                    </a>
                    <a
                      className={`tab-btn ${
                        category === "Death" ? "active" : ""
                      }`}
                      onClick={onDeath}
                    >
                      <img
                        src={
                          category === "Incidence"
                            ? "/img/IDeath.svg"
                            : "/img/Deaths.svg"
                        }
                        alt="Death"
                      />
                      <span>Deaths</span>
                    </a>
                  </div>
                </div>
              </div>
              <h1 id={`${category}-Title`} className="page-header">
                Cancer Interactive <br />
                <span>Data Story</span>
              </h1>
              {category === "Incidence" && (
                <img
                  src="img/banner_incidence.svg"
                  className={`img-fluid banner_img ${category}`}
                  alt="banner_img"
                />
              )}
            </div>
          </div>
        </div>
        {category === "Death" && (
          <>
            <img
              src="img/banner_red_virus.png"
              className="img-fluid red_virus"
              alt="banner_red_virus"
            />
            <img
              src="img/banner_green_virus.png"
              className="img-fluid green_virus"
              alt="banner_green_virus"
            />
            <img
              src="img/Graveyard.png"
              alt="banner_img"
              style={{ width: "100%" }}
            />
          </>
        )}
        <img
          src={
            category === "Incidence"
              ? "img/shape_incidence.svg"
              : "img/banner_shape.png"
          }
          className="img-fluid banner_white_shape"
          alt="banner_white_shape"
        />
      </section>
    </header>
  );
};

export default Header;
