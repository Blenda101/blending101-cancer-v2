import React from "react";
import styles from "./index.module.scss";

interface RangeProps {
  version: "male" | "female";
  states: any;
}
const Range = (props: RangeProps) => {
  const { version, states } = props;
  return (
    <div className={styles.range}>
      <div className={styles.wrapper}>
        <h5>Incidence (Rate in 100,000 )</h5>
        <div
          className={`${styles.stacked} ${
            version === "female" ? styles.female : styles.male
          }`}
        >
          <div>
            <span
              className={`${styles.stacked__total} ${styles.stacked__total__initial}`}
            >
              <i>&nbsp;</i>
              {states?.quartile ? Math.round(states?.quartile[0]) : 0}
            </span>
            <span className={styles.stacked__total}>
              <i>&nbsp;</i>
              {states?.quartile ? Math.round(states?.quartile[25]) : 0}
            </span>
          </div>
          <div id="quality">
            <span className={styles.stacked__total}>
              <i>&nbsp;</i>
              {states?.quartile ? Math.round(states?.quartile[50]) : 0}
            </span>
          </div>
          <div id="quantity">
            <span className={styles.stacked__total}>
              <i>&nbsp;</i>
              {states?.quartile ? Math.round(states?.quartile[75]) : 0}
            </span>
          </div>
          <div id="quantity">
            <span className={styles.stacked__total}>
              <i>&nbsp;</i>
              {states?.quartile ? Math.round(states?.quartile[100]) : 0}
            </span>
          </div>
        </div>
      </div>
      <div className={styles.unavailable}>
        <div />
        Data unavailable
      </div>
    </div>
  );
};

export default Range;
