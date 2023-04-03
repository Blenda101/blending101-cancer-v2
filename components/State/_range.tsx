import React from "react";
import styles from "./index.module.scss";

interface RangeProps {
  version: "male" | "female";
  quartiles: any;
}
const Range = (props: RangeProps) => {
  const { version, quartiles } = props;
  return (
    <div className={styles.range}>
      <div className={styles.wrapper}>
        <h5>
          Incidence <span>(Rate in 100,000&#42;)</span>
        </h5>
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
              {quartiles ? Math.round(quartiles[0]) : 0}
            </span>
            <span className={styles.stacked__total}>
              <i>&nbsp;</i>
              {quartiles ? Math.round(quartiles[25]) : 0}
            </span>
          </div>
          <div id="quality">
            <span className={styles.stacked__total}>
              <i>&nbsp;</i>
              {quartiles ? Math.round(quartiles[50]) : 0}
            </span>
          </div>
          <div id="quantity">
            <span className={styles.stacked__total}>
              <i>&nbsp;</i>
              {quartiles ? Math.round(quartiles[75]) : 0}
            </span>
          </div>
          <div id="quantity">
            <span className={styles.stacked__total}>
              <i>&nbsp;</i>
              {quartiles ? Math.round(quartiles[100]) : 0}
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
