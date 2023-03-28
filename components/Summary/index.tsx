/* eslint-disable @next/next/no-img-element */
import { useCategory } from "@/context/CategoryProvider";
import {
  SwipeWrapper,
  useGender,
  useSwipeStatus,
} from "@/context/SwiperProvider";
import { AGE, RACE } from "@/data/Disease";
import { STATE_DICTIONARIES } from "@/data/State";
import { YEAR_DICTIONARY } from "@/data/Year";
import { filtersVar } from "@/graphql/store";
import useDiseases, { useDiseaseDictionary } from "@/hooks/useDiseases";
import useRates from "@/hooks/useRates";
import React, { useCallback, useMemo, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Legend from "../Shared/Legend";
import Composition from "./_composition";
import Filter from "./_filter";
import Graph from "./_graph";
import Rate from "./_rate";

type IDropdownType =
  | ""
  | "wdisease"
  | "mdisease"
  | "age"
  | "race"
  | "state"
  | "year";

const Summary = () => {
  const rates = useRates();
  const gender = useGender();
  const category = useCategory();
  const isSwipeEnable = useSwipeStatus();
  const { MALE_DISEASE, FEMALE_DISEASE } = useDiseaseDictionary();

  const [showDropdown, setShowDropdown] = useState<IDropdownType>("");

  const filters = filtersVar();

  const getFilterClass = useCallback(
    (defaultClass) =>
      isSwipeEnable
        ? gender === "Female"
          ? "orange_btn"
          : "green_btn"
        : defaultClass,
    [gender, isSwipeEnable],
  );

  const dropdownHandler = (type: IDropdownType) => {
    if (showDropdown === type) setShowDropdown("");
    else setShowDropdown(type);
  };

  const filterSelector = (value: string, type: IDropdownType) => {
    if (type === "mdisease" || type === "wdisease") {
      filtersVar({
        ...filters,
        [category]: {
          ...filters[category],
          disease: {
            ...filters[category].disease,
            [type === "wdisease" ? "Female" : "Male"]: value,
          },
        },
      });
    } else {
      filtersVar({
        ...filters,
        [category]: {
          ...filters[category],
          [type]: value,
        },
      });
    }
    setShowDropdown("");
  };

  return (
    <section className="secoend_sec pt-0 bg_colo_gray">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="box_gray">
              <SwipeWrapper
                breakpoints={{
                  300: {
                    slidesPerView: 1.1,
                    spaceBetween: -90,
                  },
                  350: {
                    slidesPerView: 1.1,
                    spaceBetween: -100,
                  },
                  500: {
                    slidesPerView: 1.1,
                    spaceBetween: -120,
                  },
                  600: {
                    slidesPerView: 1.1,
                    spaceBetween: -150,
                  },
                  992: {
                    slidesPerView: 2,
                    spaceBetween: 50,
                  },
                }}
              >
                <SwiperSlide>
                  <a
                    className={`filter_btn ${
                      isSwipeEnable && gender === "Male" ? "woman_btn" : ""
                    }`}
                  >
                    <img
                      src="img/Women.svg"
                      className="img-fluid"
                      alt="Breast_img"
                    />
                    <span>Women</span>
                  </a>
                </SwiperSlide>
                <SwiperSlide>
                  <a
                    className={`filter_btn men_btn ${
                      isSwipeEnable && gender === "Female" ? "man_btn" : ""
                    }`}
                  >
                    <img
                      src="img/Men.svg"
                      className="img-fluid"
                      alt="Breast_img"
                    />
                    <span>Men</span>
                  </a>
                </SwiperSlide>
              </SwipeWrapper>
              <div id="filters">
                {isSwipeEnable ? (
                  gender === "Female" ? (
                    <Filter
                      type="disease"
                      gender="Female"
                      show={showDropdown === "wdisease"}
                      active={filters[category].disease.Female}
                      items={FEMALE_DISEASE}
                      className={getFilterClass("orange_btn")}
                      onOpen={() => dropdownHandler("wdisease")}
                      onChange={(value) => filterSelector(value, "wdisease")}
                    />
                  ) : (
                    <Filter
                      type="disease"
                      gender="Male"
                      show={showDropdown === "mdisease"}
                      active={filters[category].disease.Male}
                      items={MALE_DISEASE}
                      className={getFilterClass("green_btn")}
                      onOpen={() => dropdownHandler("mdisease")}
                      onChange={(value) => filterSelector(value, "mdisease")}
                    />
                  )
                ) : (
                  <Filter
                    type="disease"
                    gender="Female"
                    show={showDropdown === "wdisease"}
                    active={filters[category].disease.Female}
                    items={FEMALE_DISEASE}
                    className={getFilterClass("orange_btn")}
                    onOpen={() => dropdownHandler("wdisease")}
                    onChange={(value) => filterSelector(value, "wdisease")}
                  />
                )}
                <Filter
                  type="race"
                  show={showDropdown === "race"}
                  active={filters[category].race}
                  className={getFilterClass("orange_btn")}
                  items={RACE}
                  onOpen={() => dropdownHandler("race")}
                  onChange={(value) => filterSelector(value, "race")}
                />
                <Filter
                  type="year"
                  show={showDropdown === "year"}
                  active={filters[category].year}
                  className={getFilterClass("orange_btn")}
                  items={YEAR_DICTIONARY}
                  onOpen={() => dropdownHandler("year")}
                  onChange={(value) => filterSelector(value, "year")}
                />
                <Filter
                  type="state"
                  show={showDropdown === "state"}
                  active={filters[category].state}
                  className={getFilterClass("green_btn")}
                  items={STATE_DICTIONARIES}
                  onOpen={() => dropdownHandler("state")}
                  onChange={(value) => filterSelector(value, "state")}
                />
                {!isSwipeEnable && (
                  <Filter
                    type="disease"
                    show={showDropdown === "mdisease"}
                    active={filters[category].disease.Male}
                    items={MALE_DISEASE}
                    onOpen={() => dropdownHandler("mdisease")}
                    onChange={(value) => filterSelector(value, "mdisease")}
                  />
                )}
              </div>
              <div className="row graph__wrapper">
                <SwipeWrapper>
                  <SwiperSlide>
                    <div className="row graph-row">
                      <Composition version="Female" />
                      <Rate
                        version="Female"
                        rate={rates.female.rate}
                        population={rates.female.population}
                      />
                    </div>
                    <Graph version="Female" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="row graph-row">
                      <Composition version="Male" />
                      <Rate
                        version="Male"
                        rate={rates.male.rate}
                        population={rates.male.population}
                      />
                    </div>
                    <Graph version="Male" />
                  </SwiperSlide>
                </SwipeWrapper>
              </div>
              <Legend isSummary />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Summary;
