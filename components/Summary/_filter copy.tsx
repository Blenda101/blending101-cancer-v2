/* eslint-disable @next/next/no-img-element */
import { useCategory } from "@/context/CategoryProvider";
import { IGender } from "@/graphql/store";
import React, { Fragment, useCallback } from "react";

interface FilterProps {
  active: string;
  className?: string;
  items: {
    [key: string]: string;
  };
  show: boolean;
  onOpen: () => void;
  onChange: (value: string) => void;
  type: keyof typeof DEFAULT_DROPDOWN;
  gender?: IGender;
}
const Filter = (props: FilterProps) => {
  const { active, type, className, items, show, gender, onOpen, onChange } =
    props;
  const category = useCategory();

  const getImageSrc = useCallback(
    (type, item) => {
      if (type === "disease") {
        const iconName = item === "" ? "Disease" : item;
        return item === active
          ? `/icons/${gender === "Female" ? "orange" : "green"}/${iconName}.svg`
          : `/icons/black/${iconName}.svg`;
      } else {
        const iconName = item === "" ? "Disease" : items[item];
        return `/icons/black/${iconName}.svg`;
        // return `img/${items[item]}`;
      }
    },
    [active, gender, items],
  );

  return (
    <div className="dropdown">
      <button
        className={`dropdown_button ${category} ${
          className || ""
        } dropdown-toggle`}
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
        onClick={onOpen}
      >
        {active !== "" ? (
          <Fragment>
            <img
              src={getImageSrc(type, active)}
              className="img-fluid"
              alt={active}
            />
            <span>{active}</span>
          </Fragment>
        ) : (
          <Fragment>
            <img
              src={getImageSrc(type, "")}
              // src={DEFAULT_DROPDOWN[type].icon}
              className="img-fluid"
              alt={DEFAULT_DROPDOWN[type].title}
            />
            <span>{DEFAULT_DROPDOWN[type].title}</span>
          </Fragment>
        )}
      </button>
      <ul className={`dropdown-menu ${show ? "show" : ""}`}>
        {(type === "disease" || type === "race") && (
          <li onClick={() => onChange("")}>
            <a className="dropdown-item">
              <img
                // src={DEFAULT_DROPDOWN[type].icon}
                className="img-fluid"
                src={getImageSrc(type, "")}
                alt={DEFAULT_DROPDOWN[type].title}
              />
              <span>{DEFAULT_DROPDOWN[type].title}</span>
            </a>
          </li>
        )}
        {items &&
          Object.keys(items).map((item) => (
            <li key={item} onClick={() => onChange(item)}>
              <a className="dropdown-item">
                <img
                  src={getImageSrc(type, item)}
                  className="img-fluid"
                  alt={item}
                />
                <span>{item}</span>
              </a>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Filter;

const DEFAULT_DROPDOWN = {
  disease: {
    title: "All Cancer",
    icon: "/img/disease.svg",
  },
  race: {
    title: "All Races",
    icon: "/img/race.svg",
  },
  age: {
    title: "All Ages",
    icon: "/img/counter.svg",
  },
  state: {
    title: "All States",
    icon: "/img/location.svg",
  },
  year: {
    title: "All Years",
    icon: "/img/calender.svg",
  },
};
