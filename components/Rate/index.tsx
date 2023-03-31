/* eslint-disable @next/next/no-img-element */
import { useCategory } from "@/context/CategoryProvider";
import { SwipeWrapper, useSwipeStatus } from "@/context/SwiperProvider";
import useWindowSize from "@/hooks/useWindowSize";
import React from "react";
import { SwiperSlide } from "swiper/react";
import Legend from "../Shared/Legend";
import Title from "../Shared/Title";
import ProgressRate from "./_progress";

interface RateProps {
  diseases: {
    male: {
      type: string;
      rate: number;
    }[];
    female: {
      type: string;
      rate: number;
    }[];
  };
}
const Rate = (props: RateProps) => {
  const { diseases } = props;
  const category = useCategory();
  const isSwipeEnable = useSwipeStatus();
  return (
    <section className={`boxsec bg_colo_gray pt-0 death_sec ${category}`}>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <Title title="Cancer Types" subtitle={`${category} Rate`} />
            <div className="shadow_box">
              {isSwipeEnable ? (
                <MobileRate diseases={diseases} category={category} />
              ) : (
                <DesktopRate diseases={diseases} category={category} />
              )}
              <Legend />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
const DesktopRate = ({ diseases, category }) => (
  <div className="row align-items-center ct-mb-3">
    <div className="col-lg-5 col-12 orange_death">
      {diseases.female.map((disease) => (
        <ProgressRate
          key={disease.type}
          value={disease.rate}
          label={disease.type}
          population={disease.population}
          maxValue={diseases?.female[0]?.rate || 0}
          align="right"
          gender="Female"
        />
      ))}
    </div>
    <div className="col-lg-2 col-12">
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((idx) => (
        <div className="text-center ct-mb-3 mb-none" key={`serial-${idx}`}>
          <span className="position-relative drop-shadow">
            <span className="center_no">{idx}</span>
            <svg
              width="52"
              height="56"
              viewBox="0 0 52 56"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M29.75 1.58771C27.4295 0.247967 24.5705 0.247968 22.25 1.58771L5.00129 11.5463C2.68078 12.886 1.25129 15.362 1.25129 18.0415V37.9585C1.25129 40.638 2.68078 43.114 5.00129 44.4537L22.25 54.4123C24.5705 55.752 27.4295 55.752 29.75 54.4123L46.9987 44.4537C49.3192 43.114 50.7487 40.638 50.7487 37.9585V18.0415C50.7487 15.362 49.3192 12.886 46.9987 11.5463L29.75 1.58771Z"
                fill={category === "Incidence" ? "white" : "#EFEFF2"}
                stroke={category === "Incidence" ? "#CDCDCD" : "none"}
              />
            </svg>
          </span>
        </div>
      ))}
    </div>
    <div className="col-lg-5 col-12">
      {diseases.male.map((disease) => (
        <ProgressRate
          key={disease.type}
          value={disease.rate}
          maxValue={diseases?.male[0]?.rate || 0}
          population={disease.population}
          label={disease.type}
          align="left"
          gender="Male"
        />
      ))}
    </div>
  </div>
);
const MobileRate = ({ diseases, category }) => {
  return (
    <SwipeWrapper>
      <SwiperSlide>
        {diseases.female.map((disease) => (
          <ProgressRate
            key={disease.type}
            value={disease.rate}
            maxValue={diseases?.female[0]?.rate || 0}
            population={disease.population}
            label={disease.type}
            align="right"
            gender="Female"
          />
        ))}
      </SwiperSlide>
      <div className="col-lg-2 col-12">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((idx) => (
          <div className="text-center ct-mb-3 mb-none" key={`serial-${idx}`}>
            <span className="position-relative drop-shadow">
              <span className="center_no">{idx}</span>
              <svg
                width="52"
                height="56"
                viewBox="0 0 52 56"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M29.75 1.58771C27.4295 0.247967 24.5705 0.247968 22.25 1.58771L5.00129 11.5463C2.68078 12.886 1.25129 15.362 1.25129 18.0415V37.9585C1.25129 40.638 2.68078 43.114 5.00129 44.4537L22.25 54.4123C24.5705 55.752 27.4295 55.752 29.75 54.4123L46.9987 44.4537C49.3192 43.114 50.7487 40.638 50.7487 37.9585V18.0415C50.7487 15.362 49.3192 12.886 46.9987 11.5463L29.75 1.58771Z"
                  fill={category === "Incidence" ? "white" : "#EFEFF2"}
                  stroke={category === "Incidence" ? "#CDCDCD" : "none"}
                />
              </svg>
            </span>
          </div>
        ))}
      </div>
      <SwiperSlide>
        {diseases.male.map((disease) => (
          <ProgressRate
            key={disease.type}
            value={disease.rate}
            maxValue={diseases?.male[0]?.rate || 0}
            population={disease.population}
            label={disease.type}
            align="left"
            gender="Male"
          />
        ))}
      </SwiperSlide>
    </SwipeWrapper>
  );
};

export default Rate;
