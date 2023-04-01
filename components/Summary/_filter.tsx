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
    (type: keyof typeof DEFAULT_DROPDOWN, item, defaultIcon?: string) => {
      // THIS IF ELSE BLOCK IS FOR DEFAULT ICON ONLY
      if (defaultIcon && type !== "disease") {
        return `/icons/${active === "" ? "black" : "gray"}/${defaultIcon}`;
      } else if (defaultIcon && type === "disease") {
        return active === ""
          ? `/icons/${gender === "Female" ? "orange" : "green"}/${defaultIcon}`
          : `/icons/black/${defaultIcon}`;
      }

      // THIS IF ELSE BLOCK IS FOR OTHER ICONS
      if (type === "disease") {
        return item === active
          ? `/icons/${gender === "Female" ? "orange" : "green"}/${item}.svg`
          : `/icons/black/${defaultIcon || item}.svg`;
      } else if (type === "race") {
        return `img/${items[item]}`;
      } else if (type === "year") {
        return `/icons/${item === active ? "black" : "gray"}/${items[item]}`;
      } else if (type === "state") {
        return `/icons/${item === active ? "black" : "gray"}/${items[item]}`;
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
              src={getImageSrc(type, "", DEFAULT_DROPDOWN[type].icon)}
              className="img-fluid"
              alt={DEFAULT_DROPDOWN[type].title}
            />
            <span>{DEFAULT_DROPDOWN[type].title}</span>
          </Fragment>
        )}
      </button>
      <ul className={`dropdown-menu ${show ? "show" : ""}`}>
        {/* ALL LIST OPTION */}
        {type !== "year" && (
          <li onClick={() => onChange("")}>
            <a className="dropdown-item">
              <img
                src={getImageSrc(type, active, DEFAULT_DROPDOWN[type].icon)}
                className="img-fluid"
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
    title: "All Cancers",
    icon: "Cancers.svg",
  },
  race: {
    title: "All Races",
    icon: "race.svg",
  },
  age: {
    title: "All Ages",
    icon: "counter.svg",
  },
  state: {
    title: "All States",
    icon: "location.svg",
  },
  year: {
    title: "All Years",
    icon: "calender.svg",
  },
};
