/* eslint-disable @next/next/no-img-element */
import React from "react";
import Type from "./_type";
import styles from "./index.module.scss";
import { DEATH_MALE_DISEASE } from "@/data/Disease";

interface MaleCancerProps {
  diseases: {
    [key in keyof typeof DEATH_MALE_DISEASE]: number;
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
        caption="Liver"
        image="Liver.png"
        value={diseases.Liver}
        style={styles.Liver}
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
        caption="Leukemias"
        image="Liver.png"
        value={diseases.Leukemias}
        style={styles.Leukemias}
      />
      <Type
        gender="Male"
        active="Breast"
        caption="Pancreas"
        image="Liver.png"
        value={diseases.Pancreas}
        style={styles.Pancreas}
      />
      <Type
        gender="Male"
        active="Breast"
        caption="Esophagus"
        image="Liver.png"
        value={diseases.Esophagus}
        style={styles.Esophagus}
      />
      <Type
        gender="Male"
        active="Breast"
        caption="Brain"
        image="Liver.png"
        value={diseases.Brain}
        style={styles.Brain}
      />
      <img
        src="img/death-male.svg"
        alt="male"
        className={styles.figure__image}
      />
    </div>
  );
};

export default MaleFigure;
