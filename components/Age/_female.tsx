import { AGE } from "@/data/Disease";
import React from "react";
import Progress from "../Shared/Progress";

interface FemaleAgeProps {
  age: {
    [key in keyof typeof AGE]: {
      rate: number;
      proportion: number;
    };
  };
}
const FemaleAge = (props: FemaleAgeProps) => {
  const { age } = props;
  return (
    <div className="row">
      <div className="col-lg-12 col-12">
        <h4 className="box_inner_title text-lg-end">Rate</h4>
        <div className="mb-4">
          <Progress
            caption="20-29"
            value={age["20-29"]}
            align="right"
            gender="Female"
          />
        </div>
        <div className="mb-4">
          <Progress
            caption="30-39"
            value={age["30-39"]}
            align="right"
            gender="Female"
          />
        </div>
        <div className="mb-4">
          <Progress
            caption="40-49"
            value={age["40-49"]}
            align="right"
            gender="Female"
          />
        </div>
        <div className="mb-4">
          <Progress
            caption="50-59"
            value={age["50-59"]}
            align="right"
            gender="Female"
          />
        </div>

        <div className="mb-4">
          <Progress
            caption="60-69"
            value={age["60-69"]}
            align="right"
            gender="Female"
          />
        </div>

        <div className="mb-4">
          <Progress
            caption="70-79"
            value={age["70-79"]}
            align="right"
            gender="Female"
          />
        </div>

        <div className="mb-4">
          <Progress
            caption="80+"
            value={age["80+"]}
            align="right"
            gender="Female"
          />
        </div>
      </div>
    </div>
  );
};

export default FemaleAge;
