/* eslint-disable @next/next/no-img-element */
import { useCategory } from "@/context/CategoryProvider";
import { SwipeWrapper, useSwipeStatus } from "@/context/SwiperProvider";
import useRace from "@/hooks/useRace";
import React, { Fragment } from "react";
import { SwiperSlide } from "swiper/react";
import Legend from "../Shared/Legend";
import Title from "../Shared/Title";
import RaceCategories from "./_categories";
import FemaleRace from "./_female";
import MaleRace from "./_male";

const Race = () => {
  const race = useRace();
  const category = useCategory();
  const isSwipeEnable = useSwipeStatus();

  return (
    <section className="boxsec bg_colo_gray pt-0 race_sec">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <Title title="Race" subtitle={category} />
            <div className="shadow_box">
              {isSwipeEnable ? (
                <MobileRace race={race} />
              ) : (
                <DesktopRace race={race} />
              )}
              <Legend />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const MobileRace = ({ race }) => (
  <Fragment>
    <RaceCategories />
    <SwipeWrapper>
      <SwiperSlide>
        <FemaleRace race={race.female as any} />
      </SwiperSlide>
      <SwiperSlide>
        <MaleRace race={race.male as any} />
      </SwiperSlide>
    </SwipeWrapper>
  </Fragment>
);

const DesktopRace = ({ race }) => (
  <div className="row">
    <div className="col-lg-5 col-12 order-2 order-lg-1">
      <FemaleRace race={race.female as any} />
    </div>
    <RaceCategories />
    <div className="col-lg-5 col-12 order-3 order-lg-3">
      <MaleRace race={race.male as any} />
    </div>
  </div>
);

export default Race;
