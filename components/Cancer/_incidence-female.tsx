/* eslint-disable @next/next/no-img-element */
import React from "react";
import Type from "./_type";
import styles from "./index.module.scss";
import { INCIDENCE_FEMALE_DISEASE } from "@/data/Disease";

interface FemaleCancerProps {
  diseases: {
    [key in keyof typeof INCIDENCE_FEMALE_DISEASE]: number;
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
          caption="Skin"
          image="Liver.png"
          value={diseases.Skin}
          style={styles.Skin}
        />
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
          caption="Leukemias"
          image="Liver.png"
          value={diseases.Leukemias}
          style={styles.Leukemias}
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
          caption="Kidney"
          image="Liver.png"
          value={diseases.Kidney}
          style={styles.kidney}
        />
        <Type
          gender="Female"
          active="Breast"
          caption="Pancreas"
          image="Liver.png"
          value={diseases.Pancreas}
          style={styles.pancreas}
        />
        <Type
          gender="Female"
          active="Breast"
          caption="Breast"
          image="Liver.png"
          value={diseases.Breast}
          style={styles.breast}
        />
        <Type
          gender="Female"
          active="Breast"
          caption="Thyroid"
          image="Liver.png"
          value={diseases.Thyroid}
          style={styles.thyroid}
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
