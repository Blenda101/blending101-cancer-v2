/* eslint-disable @next/next/no-img-element */
import { useCategory, useDeath } from "@/context/CategoryProvider";
import { SwipeWrapper, useSwipeStatus } from "@/context/SwiperProvider";
import useAge from "@/hooks/useAge";
import React, { Fragment } from "react";
import { SwiperSlide } from "swiper/react";
import Legend from "../Shared/Legend";
import Title from "../Shared/Title";
import AgeCategories from "./_categories";
import FemaleAge from "./_female";
import MaleAge from "./_male";

const Age = () => {
  const age = useAge();
  const category = useCategory();
  const isSwipeEnable = useSwipeStatus();

  return (
    <section className="boxsec bg_colo_gray pt-0 age_sec">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <Title title="Age" subtitle={category} />
            <div className="shadow_box">
              {isSwipeEnable ? (
                <MobileAge age={age} />
              ) : (
                <DesktopAge age={age} />
              )}
              <Legend />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const MobileAge = ({ age }) => (
  <Fragment>
    <AgeCategories />
    <SwipeWrapper>
      <SwiperSlide>
        <FemaleAge age={age.female as any} />
      </SwiperSlide>
      <SwiperSlide>
        <MaleAge age={age.male as any} />
      </SwiperSlide>
    </SwipeWrapper>
  </Fragment>
);

const DesktopAge = ({ age }) => (
  <div className="row">
    <div className="col-lg-5 col-12 order-2 order-lg-1">
      <FemaleAge age={age.female as any} />
    </div>
    <AgeCategories />
    <div className="col-lg-5 col-12 order-3 order-lg-3">
      <MaleAge age={age.male as any} />
    </div>
  </div>
);

export default Age;
