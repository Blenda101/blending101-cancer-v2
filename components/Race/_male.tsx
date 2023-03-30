import { RACE } from "@/data/Disease";
import React from "react";
import Progress from "../Shared/Progress";

interface MaleRaceProps {
  race: {
    [key in keyof typeof RACE]: {
      rate: number;
      composition: number;
    };
  };
}

const MaleRace = (props: MaleRaceProps) => {
  const { race } = props;
  return (
    <div className="row">
      <div className="col-lg-12 col-12">
        <div className="mb-4">
          <Progress
            caption="White"
            value={race.White}
            align="left"
            gender="Male"
          />
        </div>
        <div className="mb-4">
          <Progress
            caption="Black"
            value={race.Black}
            align="left"
            gender="Male"
          />
        </div>
        <div className="mb-4">
          <Progress
            caption="Hispanic"
            value={race.Hispanic}
            align="left"
            gender="Male"
          />
        </div>
        <div className="mb-4">
          <Progress
            caption="Asian"
            value={race.Asian}
            align="left"
            gender="Male"
          />
        </div>

        <div className="mb-4">
          <Progress
            caption="Other"
            value={race.Other}
            align="left"
            gender="Male"
          />
        </div>
      </div>
    </div>
  );
};

export default MaleRace;
