/* eslint-disable @next/next/no-img-element */
import { useCategory, useDeath } from "@/context/CategoryProvider";
import { filtersVar, IGender } from "@/graphql/store";
import React from "react";
import styles from "./index.module.scss";

export type ICategory = { _id: string; percentage: number };

interface TypeProps {
  gender: IGender;
  active: string;
  caption: string;
  value: string | number;
  image?: string;
  onClick?: any;
  style: string;
}

const Type = (props: TypeProps) => {
  const { gender, caption, value, image, style } = props;
  const { isDeath } = useDeath();
  const filter = filtersVar();
  const category = useCategory();
  const onDiseaseSelect = () => {
    filtersVar({
      ...filter,
      [category]: {
        ...filter[category],
        disease: {
          ...filter[category].disease,
          [gender]: caption,
        },
      },
    });
  };

  const active = filter[category].disease[gender];

  return (
    <div
      id={caption}
      className={`${styles.type} ${
        isDeath ? styles.death : styles.incidence
      }  ${styles[gender]} $ ${style} ${
        active === caption ? styles[`type__active_${category}--${gender}`] : ""
      }`}
      onClick={onDiseaseSelect}
    >
      <div className={styles.progress}>
        <svg className={styles.progress__svg} viewBox="0 0 75 75">
          <defs>
            <linearGradient
              id="outline-male-light"
              x1="0%"
              y1="0%"
              x2="0%"
              y2="100%"
              gradientTransform="rotate(270)"
            >
              <stop
                offset="0%"
                style={{ stopColor: "#DDDBDB", stopOpacity: 1 }}
              />
              <stop
                offset="100%"
                style={{ stopColor: "#F8F8F8", stopOpacity: 1 }}
              />
            </linearGradient>
            <linearGradient
              id="inside-male-light"
              x1="0%"
              y1="0%"
              x2="0%"
              y2="100%"
            >
              <stop offset="0%" style={{ stopColor: "#fff", stopOpacity: 1 }} />
              <stop
                offset="100%"
                style={{ stopColor: "#ddd", stopOpacity: 1 }}
              />
            </linearGradient>
          </defs>

          <circle cx="34" cy="34" r="28" />
          <circle
            cx="34"
            cy="34"
            r="28"
            style={{
              stroke: gender === "Female" ? "#FE5717" : "#7bba38",
              strokeDashoffset: 176 - (176 * +value) / 100,
            }}
          />
          <circle cx="34" cy="34" r="34" stroke="url(#outline-male-light)" />
        </svg>
        <div className={styles.progress__icon}>
          {image ? (
            <img
              src={`/icons/${
                active === caption
                  ? gender === "Female"
                    ? "orange"
                    : "green"
                  : "black"
              }/${caption}.svg`}
              alt={caption}
            />
          ) : null}
        </div>
      </div>
      <p className={styles.type__label}>
        {caption}
        <span>{value}%</span>
      </p>
    </div>
  );
};

export default Type;
