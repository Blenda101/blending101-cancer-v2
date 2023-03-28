/* eslint-disable @next/next/no-img-element */
import { useCategory, useFilters } from "@/context/CategoryProvider";
import { RACE } from "@/data/Disease";
import { filtersVar } from "@/graphql/store";
import React from "react";

const RaceCategories = () => {
  const category = useCategory();
  const filters = useFilters();

  const onGenderChange = (e, race) => {
    e.preventDefault();
    const filter = filtersVar();
    filtersVar({
      ...filter,
      [category]: {
        ...filter[category],
        race: filter[category].race === race ? "" : race,
      },
    });
  };

  return (
    <div className="col-lg-2 col-12 order-1 order-lg-2 flex-ct demographic">
      <h4 className="box_inner_title visible-none">d</h4>
      {Object.keys(RACE).map((race) => (
        <div className="text-center ct-mb-4" key={race}>
          <a
            className={`counter_btn ${
              race === filters.race ? "counter_btn--active" : ""
            } ${category}`}
            onClick={(e) => onGenderChange(e, race)}
          >
            <img src={`img/${RACE[race]}`} className="img-fluid" alt={race} />
            <span>{race}</span>
          </a>
        </div>
      ))}
    </div>
  );
};

export default RaceCategories;
