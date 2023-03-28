import { useCategory, useFilters } from "@/context/CategoryProvider";
import { useSwipeStatus } from "@/context/SwiperProvider";
import { filtersVar, IGender } from "@/graphql/store";
import React, { Fragment } from "react";
import Tippy from "@tippyjs/react";
import styles from "./index.module.scss";
import { CancerTypeTooltip } from "../Shared/Tooltip";

interface ProgressProps {
  value: number;
  align: "left" | "right";
  gender: IGender;
  label: string;
  population: string;
}
const ProgressRate = (props: ProgressProps) => {
  const { value, align, gender, label, population } = props;
  const filter = filtersVar();
  const category = useCategory();
  const isSwipeEnable = useSwipeStatus();
  const onDiseaseSelect = () => {
    filtersVar({
      ...filter,
      [category]: {
        ...filter[category],
        disease: {
          ...filter[category].disease,
          [gender]: label,
        },
      },
    });
  };
  return (
    <Tippy
      content={
        <CancerTypeTooltip
          title={label || ""}
          value={value || 0}
          population={population}
          gender={gender}
        />
      }
      placement="bottom"
      delay={[1000, 200]}
    >
      <div
        className={`d-flex align-items-center w-100 justify-content-between border_hover_outer mb-4 flex-direction ${
          filter[category].disease[gender] === label ? "active" : ""
        } ${gender}`}
        onClick={onDiseaseSelect}
      >
        {isSwipeEnable || gender === "Female" ? (
          <Fragment>
            <p className="progress_no">{value}</p>
            <div
              className={`d-flex align-items-center border_hover w-90 flex-direction-inner`}
            >
              <div className={styles.progress}>
                <span
                  className={styles.progress__bar}
                  style={{
                    width: `${value}%`,
                    left: align === "right" ? `${100 - value}%` : 0,
                    backgroundColor:
                      gender === "Female"
                        ? "var(--secondary)"
                        : "var(--primary)",
                  }}
                />
              </div>
              <p
                className="progress_title ms-4"
                style={{ textAlign: isSwipeEnable ? "left" : "right" }}
              >
                {label}
              </p>
            </div>
          </Fragment>
        ) : (
          <Fragment>
            <div
              className={`d-flex align-items-center border_hover  ${
                gender === "Male" ? "hover_green" : ""
              } w-90 flex-direction-inner`}
            >
              <p className="progress_title ms-4">{label}</p>
              <div className={styles.progress}>
                <span
                  className={styles.progress__bar}
                  style={{
                    width: `${value}%`,
                    left: align === "right" ? `${100 - value}%` : 0,
                    backgroundColor: "var(--primary)",
                  }}
                />
              </div>
            </div>
            <p className="progress_no">{value}</p>
          </Fragment>
        )}
      </div>
    </Tippy>
  );
};

export default ProgressRate;
