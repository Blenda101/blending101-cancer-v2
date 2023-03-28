/* eslint-disable @next/next/no-img-element */
import React from "react";
import Type from "./_type";
import styles from "./index.module.scss";
import { DEATH_FEMALE_DISEASE } from "@/data/Disease";

interface FemaleCancerProps {
  diseases: {
    [key in keyof typeof DEATH_FEMALE_DISEASE]: number;
  };
}

const Figure = (props: FemaleCancerProps) => {
  const { diseases } = props;
  return (
    <div>
      <div className={styles.figure}>
        <Type
          gender="Female"
          active="Breast"
          caption="Lung"
          image="Liver.png"
          value={diseases.Lung}
          style={styles.Lung}
        />
        <Type
          gender="Female"
          active="Breast"
          caption="Lymphoma"
          image="Liver.png"
          value={diseases?.Lymphoma}
          style={styles.Lymphoma}
        />
        <Type
          gender="Female"
          active="Breast"
          caption="Liver"
          image="Liver.png"
          value={diseases.Liver}
          style={styles.Liver}
        />

        <Type
          gender="Female"
          active="Breast"
          caption="Ovary"
          image="Liver.png"
          value={diseases.Ovary}
          style={styles.Ovary}
        />
        <Type
          gender="Female"
          active="Breast"
          caption="Cervix Uteri"
          image="Liver.png"
          value={diseases.Cervix}
          style={styles.Cervix}
        />
        <Type
          gender="Female"
          active="Breast"
          caption="Colorectal"
          image="Liver.png"
          value={diseases.Colorectal}
          style={styles.Colorectal}
        />
        <Type
          gender="Female"
          active="Breast"
          caption="Leukemias"
          image="Liver.png"
          value={diseases.Leukemias}
          style={styles.Leukemias}
        />
        <Type
          gender="Female"
          active="Breast"
          caption="Pancreas"
          image="Liver.png"
          value={diseases.Pancreas}
          style={styles.Pancreas}
        />
        <Type
          gender="Female"
          active="Breast"
          caption="Breast"
          image="Liver.png"
          value={diseases.Breast}
          style={styles.Breast}
        />
        <Type
          gender="Female"
          active="Breast"
          caption="Brain"
          image="Liver.png"
          value={diseases.Brain}
          style={styles.Brain}
        />
        <img
          src="/img/Incidence-female.svg"
          alt="male"
          className={styles.figure__image}
        />
      </div>
    </div>
  );
};

export default Figure;
