/* eslint-disable @next/next/no-img-element */
import { SwipeWrapper } from "@/context/SwiperProvider";
import {
  DEATH_FEMALE_DISEASE,
  DEATH_MALE_DISEASE,
  INCIDENCE_FEMALE_DISEASE,
  INCIDENCE_MALE_DISEASE,
} from "@/data/Disease";
import React from "react";
import { SwiperSlide } from "swiper/react";
import Title from "../Shared/Title";
import IncidenceFemale from "./_incidence-female";
import IncidenceMale from "./_incidence-male";
import DeathFemale from "./_death-female";
import DeathMale from "./_death-male";
import { useCategory, useDeath } from "@/context/CategoryProvider";

interface CancerTypeProps {
  diseases: {
    male: {
      [key in
        | keyof typeof DEATH_MALE_DISEASE
        | keyof typeof INCIDENCE_MALE_DISEASE]: number;
    };
    female: {
      [key in
        | keyof typeof DEATH_FEMALE_DISEASE
        | keyof typeof INCIDENCE_FEMALE_DISEASE]: number;
    };
  };
}

const Cancer = (props: CancerTypeProps) => {
  const { diseases } = props;
  const { isIncidence } = useDeath();
  const category = useCategory();
  return (
    <section className="boxsec bg_colo_gray pt-0 location_sec">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <Title title="Cancer Types" subtitle={`${category} Proportion`} />
            <SwipeWrapper>
              <SwiperSlide>
                {isIncidence ? (
                  <IncidenceFemale diseases={diseases.female} />
                ) : (
                  <DeathFemale diseases={diseases.female} />
                )}
              </SwiperSlide>
              <SwiperSlide>
                {isIncidence ? (
                  <IncidenceMale diseases={diseases.male} />
                ) : (
                  <DeathMale diseases={diseases.male} />
                )}
              </SwiperSlide>
            </SwipeWrapper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cancer;
