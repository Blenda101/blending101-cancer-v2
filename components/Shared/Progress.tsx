import { IGender } from "@/graphql/store";
import Tippy from "@tippyjs/react";
import React, { Fragment } from "react";
import styles from "./Progress.module.scss";
import { CancerTypeTooltip } from "./Tooltip";

interface ProgressProps {
  caption: string;
  value: any;
  align: "left" | "right";
  gender: IGender;
  ext?: string;
}
const Progress = (props: ProgressProps) => {
  const { caption, align, gender, ext } = props;
  const value = props?.value?.rate || 0;
  const proportion = props?.value?.count || 0;
  const progress = props?.value?.progress || 0;
  return (
    <Tippy
      content={
        <CancerTypeTooltip
          title={caption || ""}
          value={value || 0}
          population={proportion}
          gender={gender}
        />
      }
      placement="bottom"
      delay={[1000, 200]}
    >
      <div className={`${styles.stacked__wrapper} ${styles[gender]}`}>
        <p className={styles.stacked__label} style={{ textAlign: align }}>
          <span>{caption}</span>
          <span>{ext === "%" ? value.toLocaleString("en-US") : value}</span>
        </p>
        <div className={styles.stacked}>
          <span
            className={styles.stacked__bar}
            style={{
              width: `${progress}%`,
              [align]: 0,
              backgroundColor:
                gender === "Female" ? "var(--secondary)" : "var(--primary)",
            }}
          />
        </div>
      </div>
    </Tippy>
  );
};

export default Progress;
