import { RACE } from "@/data/Disease";
import React from "react";
import Progress from "../Shared/Progress";

interface FemaleRaceProps {
  race: {
    [key in keyof typeof RACE]: {
      rate: number;
      composition: number;
    };
  };
}
const FemaleRace = (props: FemaleRaceProps) => {
  const { race } = props;
  return (
    <div className="row">
      <div className="col-lg-12 col-12">
        <h4 className="box_inner_title text-lg-end">Rate</h4>
        <div className="mb-4">
          <Progress
            caption="White"
            value={race.White}
            align="right"
            gender="Female"
          />
        </div>
        <div className="mb-4">
          <Progress
            caption="Black"
            value={race.Black}
            align="right"
            gender="Female"
          />
        </div>
        <div className="mb-4">
          <Progress
            caption="Hispanic"
            value={race.Hispanic}
            align="right"
            gender="Female"
          />
        </div>
        <div className="mb-4">
          <Progress
            caption="Asian"
            value={race.Asian}
            align="right"
            gender="Female"
          />
        </div>
        <div className="mb-4">
          <Progress
            caption="Other"
            value={race.Other}
            align="right"
            gender="Female"
          />
        </div>
      </div>
    </div>
  );
};

export default FemaleRace;
