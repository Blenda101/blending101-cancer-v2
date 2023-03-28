import React from "react";
import { useDeath, useFilters } from "@/context/CategoryProvider";

import styles from "./Tooltip.module.scss";
import { filtersVar, IGender } from "@/graphql/store";

interface TooltipProps {
  title?: string;
  value?: string | number;
  dot?: string;
  gender: IGender;
}

const Tooltip = (props: TooltipProps) => {
  const { title, value, dot, gender } = props;
  const { isDeath } = useDeath();
  const filters = useFilters();

  let appliedFilters: string[] = [];
  filters?.year && appliedFilters.push(filters?.year);
  gender &&
    filters?.disease[gender] &&
    appliedFilters.push(filters?.disease[gender]);
  filters?.race && appliedFilters.push(filters?.race);

  return (
    <div id="tooltip" className={styles.tooltip}>
      <p id="tooltip-title" className={styles.header}>
        {title}
        {appliedFilters.length > 0 && (
          <span className={styles.filters}>{appliedFilters?.join(", ")}</span>
        )}
      </p>
      <h6 className={styles.value}>
        {dot && <span style={{ backgroundColor: dot }}></span>}
        {value
          ? isDeath
            ? Math.round(+value)
            : typeof value === "string"
            ? parseFloat(value)?.toFixed(1)
            : value.toFixed(1)
          : 0}
        {isDeath ? "" : "%"}
      </h6>
    </div>
  );
};

interface CancerTypeTooltipProps {
  title?: string;
  value?: string | number;
  population?: string;
  gender?: IGender;
}

export const WaffleTooltip = (props: CancerTypeTooltipProps) => {
  const { title, value, gender } = props;
  const filters = useFilters();
  let appliedFilters: string[] = [];
  filters?.year && appliedFilters.push(filters?.year);
  filters?.race && appliedFilters.push(filters?.race);
  filters?.state && appliedFilters.push(filters?.state);

  return (
    <div id="tooltip" className={styles.tooltip} style={{ minWidth: 150 }}>
      <p id="tooltip-title" className={styles.header}>
        {title}
        {appliedFilters.length > 0 && (
          <span className={styles.filters}>{appliedFilters?.join(", ")}</span>
        )}
      </p>
      <h6
        className={`${styles.value} ${
          gender === "Female" ? styles.value_female : styles.value_male
        }`}
      >
        {value}%
      </h6>
    </div>
  );
};

export const CancerTypeTooltip = (props: CancerTypeTooltipProps) => {
  const { title, value, population, gender } = props;
  const filters = useFilters();

  let appliedFilters: string[] = [];
  filters?.year && appliedFilters.push(filters?.year);
  filters?.race && appliedFilters.push(filters?.race);
  filters?.state && appliedFilters.push(filters?.state);

  return (
    <div id="tooltip" className={styles.cancer_tooltip}>
      <p id="tooltip-title" className={styles.header}>
        {title}
        {appliedFilters.length > 0 && (
          <span className={styles.filters}>{appliedFilters?.join(", ")}</span>
        )}
      </p>
      <ul id={gender === "Female" ? styles.female : styles.male}>
        <li>
          <div>Rate</div>
          <span>{value ? Math.round(+value) : 0}</span>
        </li>
        <li>
          <div>Count</div>
          <span>
            {population ? parseInt(population).toLocaleString("en-US") : 0}
          </span>
        </li>
      </ul>
    </div>
  );
};

export default Tooltip;
