import React from "react";
import styles from "./Legend.module.scss";

const Legend = ({ isSummary }: any) => {
  return (
    <div className={styles.legend} style={isSummary ? {} : { margin: 5 }}>
      Rate in 100,000
    </div>
  );
};

export default Legend;
