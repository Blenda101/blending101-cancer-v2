/* eslint-disable @next/next/no-img-element */
import { useCategory } from "@/context/CategoryProvider";
import { SwipeWrapper } from "@/context/SwiperProvider";
import useStates from "@/hooks/useState";
import React from "react";
import { SwiperSlide } from "swiper/react";
import Title from "../Shared/Title";
import Map from "./_map";
import Range from "./_range";

const State = () => {
  const state = useStates();
  const category = useCategory();
  return (
    <section className="boxsec bg_colo_gray pt-0 location_sec">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <Title title="Location" subtitle={`${category} Rate`} />
            <div className="shadow_box">
              <SwipeWrapper>
                <SwiperSlide>
                  <Range version="female" quartiles={state?.female?.quartile} />
                  <Map gender="Female" dictionary={state?.female?.data} />
                </SwiperSlide>
                <SwiperSlide>
                  <Range version="male" quartiles={state?.male?.quartile} />
                  <Map gender="Male" dictionary={state?.male?.data} />
                </SwiperSlide>
              </SwipeWrapper>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default State;
