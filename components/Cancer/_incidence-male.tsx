/* eslint-disable @next/next/no-img-element */
import React from "react";
import Type from "./_type";
import styles from "./index.module.scss";
import { INCIDENCE_MALE_DISEASE } from "@/data/Disease";

interface MaleCancerProps {
  diseases: {
    [key in keyof typeof INCIDENCE_MALE_DISEASE]: number;
  };
}

const MaleFigure = (props: MaleCancerProps) => {
  const { diseases } = props;
  return (
    <div className={styles.figure}>
      <Type
        gender="Male"
        active="Breast"
        caption="Lung"
        image="Liver.png"
        value={diseases.Lung}
        style={styles.Lung}
      />
      <Type
        gender="Male"
        active="Breast"
        caption="Lymphoma"
        image="Liver.png"
        value={diseases.Lymphoma}
        style={styles.Lymphoma}
      />
      <Type
        gender="Male"
        active="Breast"
        caption="Leukemias"
        image="Liver.png"
        value={diseases.Leukemias}
        style={styles.Leukemias}
      />
      <Type
        gender="Male"
        active="Breast"
        caption="Bladder"
        image="Liver.png"
        value={diseases.Bladder}
        style={styles.Bladder}
      />
      <Type
        gender="Male"
        active="Breast"
        caption="Prostate"
        image="Liver.png"
        value={diseases.Prostate}
        style={styles.Prostate}
      />
      <Type
        gender="Male"
        active="Breast"
        caption="Colorectal"
        image="Liver.png"
        value={diseases.Colorectal}
        style={styles.Colorectal}
      />
      <Type
        gender="Male"
        active="Breast"
        caption="Kidney"
        image="Liver.png"
        value={diseases.Kidney}
        style={styles.kidney}
      />
      <Type
        gender="Male"
        active="Breast"
        caption="Pancreas"
        image="Liver.png"
        value={diseases.Pancreas}
        style={styles.pancreas}
      />
      <Type
        gender="Male"
        active="Breast"
        caption="Oral"
        image="Liver.png"
        value={diseases.Oral}
        style={styles.Oral}
      />
      <Type
        gender="Male"
        active="Breast"
        caption="Skin"
        image="Liver.png"
        value={diseases.Skin}
        style={styles.Skin}
      />
      <img
        src="/img/incidence-male.svg"
        alt="male"
        className={styles.figure__image}
      />
    </div>
  );
};

export default MaleFigure;
