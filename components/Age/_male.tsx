import { useSwipeStatus } from "@/context/SwiperProvider";
import { AGE } from "@/data/Disease";
import React, { Fragment } from "react";
import Progress from "../Shared/Progress";

interface MaleAgeProps {
  age: {
    [key in keyof typeof AGE]: {
      rate: number;
      proportion: number;
    };
  };
}

const MaleAge = (props: MaleAgeProps) => {
  const { age } = props;
  return (
    <div className="row">
      <Fragment>
        <Rate age={age} />
      </Fragment>
    </div>
  );
};

const Rate = ({ age }) => (
  <div className="col-lg-12 col-12">
    <h4 className="box_inner_title">Rate</h4>
    <div className="mb-4">
      <Progress
        caption="20-29"
        value={age["20-29"]}
        align="left"
        gender="Male"
      />
    </div>
    <div className="mb-4">
      <Progress
        caption="30-39"
        value={age["30-39"]}
        align="left"
        gender="Male"
      />
    </div>
    <div className="mb-4">
      <Progress
        caption="40-49"
        value={age["40-49"]}
        align="left"
        gender="Male"
      />
    </div>

    <div className="mb-4">
      <Progress
        caption="50-59"
        value={age["50-59"]}
        align="left"
        gender="Male"
      />
    </div>

    <div className="mb-4">
      <Progress
        caption="60-69"
        value={age["60-69"]}
        align="left"
        gender="Male"
      />
    </div>

    <div className="mb-4">
      <Progress
        caption="70-79"
        value={age["70-79"]}
        align="left"
        gender="Male"
      />
    </div>

    <div className="mb-4">
      <Progress caption="80+" value={age["80+"]} align="left" gender="Male" />
    </div>
  </div>
);

export default MaleAge;
