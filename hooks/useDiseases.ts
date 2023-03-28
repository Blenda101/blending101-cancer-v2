import { useMemo } from "react";
import { useQuery } from "@apollo/client";
import { useCategory, useFilters } from "@/context/CategoryProvider";
import {
  INCIDENCE_MALE_DISEASE,
  INCIDENCE_FEMALE_DISEASE,
  DEATH_MALE_DISEASE,
  DEATH_FEMALE_DISEASE,
} from "@/data/Disease";
import { GET_DISEASES } from "@/graphql/query";

export const useDiseaseDictionary = () => {
  const category = useCategory();

  const MALE_DISEASE =
    category === "Incidence" ? INCIDENCE_MALE_DISEASE : DEATH_MALE_DISEASE;
  const FEMALE_DISEASE =
    category === "Incidence" ? INCIDENCE_FEMALE_DISEASE : DEATH_FEMALE_DISEASE;
  return { MALE_DISEASE, FEMALE_DISEASE };
};

const useDiseases = () => {
  const category = useCategory();
  const filters = useFilters();
  const { data } = useQuery(GET_DISEASES, {
    variables: {
      dataSet: category,
      race: filters.race,
      year: filters.year,
      state: filters.state,
    },
  });
  const { MALE_DISEASE, FEMALE_DISEASE } = useDiseaseDictionary();

  const types = useMemo(() => {
    const diseaseData = { male: {}, female: {} };
    const values = data?.getCancerTypes;
    Object.keys(MALE_DISEASE).forEach((disease) => {
      const male = values?.maleData?.find((value) => value.type === disease);
      diseaseData.male[disease] = Math.round(male?.percentage) || 0;
    });
    Object.keys(FEMALE_DISEASE).forEach((disease) => {
      const values = data?.getCancerTypes;
      const female = values?.femaleData?.find(
        (value) => value.type === disease,
      );
      diseaseData.female[disease] = Math.round(female?.percentage) || 0;
    });
    return diseaseData;
  }, [FEMALE_DISEASE, MALE_DISEASE, data?.getCancerTypes]);

  // console.log(types);

  const rates = useMemo(() => {
    const diseaseData: any = { male: [], female: [] };
    const values = data?.getCancerTypes;

    // CALCULATING API DATA
    values?.maleData.forEach((element) => {
      diseaseData.male.push({
        type: element?.type,
        rate: Math.round(element?.weightedAverage),
        population: element?.totalCount,
      });
    });

    // PUTTING NOT MENTIONED DISEASE DATA
    Object.keys(MALE_DISEASE).forEach((disease) => {
      if (!diseaseData.male.some((item) => item.type === disease)) {
        diseaseData.male.push({
          type: disease,
          rate: 0,
          population: 0,
        });
      }
    });

    values?.femaleData.forEach((element) => {
      diseaseData.female.push({
        type: element?.type,
        rate: Math.round(element?.weightedAverage),
        population: element?.totalCount,
      });
    });
    Object.keys(FEMALE_DISEASE).forEach((disease) => {
      if (!diseaseData.female.some((item) => item.type === disease)) {
        diseaseData.female.push({
          type: disease,
          rate: 0,
          population: 0,
        });
      }
    });

    return {
      male: diseaseData.male.sort((p1, p2) =>
        p1.rate < p2.rate ? 1 : p1.rate > p2.rate ? -1 : 0,
      ),
      female: diseaseData.female.sort((p1, p2) =>
        p1.rate < p2.rate ? 1 : p1.rate > p2.rate ? -1 : 0,
      ),
    };
  }, [FEMALE_DISEASE, MALE_DISEASE, data?.getCancerTypes]);

  const diseases = useMemo(() => {
    const maleDiseases: any = [];
    let maleDiseaseOther = 0;
    data?.getCancerTypes?.maleData.forEach((disease) => {
      maleDiseases.push(disease);
      maleDiseaseOther += Math.round(disease?.percentage);
    });
    maleDiseases.push({ type: "Others", percentage: 100 - maleDiseaseOther });
    maleDiseases?.sort((p1, p2) =>
      p1.percentage > p2.percentage
        ? 1
        : p1.percentage < p2.percentage
        ? -1
        : 0,
    );

    const femaleDiseases: any = [];
    let femaleDiseaseOther = 0;
    data?.getCancerTypes?.femaleData.forEach((disease) => {
      femaleDiseases.push(disease);
      femaleDiseaseOther += Math.round(disease?.percentage);
    });
    femaleDiseases.push({
      type: "Others",
      percentage: 100 - femaleDiseaseOther,
    });
    femaleDiseases?.sort((p1, p2) =>
      p1.percentage > p2.percentage
        ? 1
        : p1.percentage < p2.percentage
        ? -1
        : 0,
    );

    return {
      Male: maleDiseases,
      Female: femaleDiseases,
    };
  }, [data?.getCancerTypes]);

  return {
    diseases,
    types,
    rates,
  };
};

export default useDiseases;
