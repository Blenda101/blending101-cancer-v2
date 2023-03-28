/* eslint-disable @next/next/no-img-element */
import { useCategory, useFilters } from "@/context/CategoryProvider";
import { AGE } from "@/data/Disease";
import { filtersVar } from "@/graphql/store";
import React from "react";

const AgeCategories = () => {
  const category = useCategory();
  const filters = useFilters();

  const onAgeChange = (e, age) => {
    e.preventDefault();
    const filter = filtersVar();
    filtersVar({
      ...filter,
      [category]: {
        ...filter[category],
        age: filter[category].age === age ? "" : age,
      },
    });
  };

  return (
    <div className="col-lg-2 col-12 order-1 order-lg-2 flex-ct demographic">
      <h4 className="box_inner_title visible-none">d</h4>
      {Object.keys(AGE).map((age) => (
        <div key={age} className="text-center ct-mb-4">
          <a
            className={`counter_btn ${
              age === filters.age ? "counter_btn--active" : ""
            } ${category}`}
            onClick={(e) => onAgeChange(e, age)}
          >
            <img src={`img/${AGE[age]}`} className="img-fluid" alt={age} />
            <span>{age}</span>
          </a>
        </div>
      ))}
    </div>
  );
};

export default AgeCategories;
