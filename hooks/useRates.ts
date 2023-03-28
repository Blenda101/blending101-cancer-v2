import { useMemo } from "react";
import { useCategory, useFilters } from "@/context/CategoryProvider";
import useDiseases from "./useDiseases";
import { filtersVar } from "@/graphql/store";

const useRates = () => {
  const category = useCategory();
  const { rates } = useDiseases();

  const filters = filtersVar();

  const rate = useMemo(() => {
    const male = rates.male.find(
      (rate) => rate.type === filters[category].disease.Male,
    );
    const female = rates.female.find(
      (rate) => rate.type === filters[category].disease.Female,
    );
    return {
      male: {
        rate: male?.rate || 0,
        population: male?.population || 0,
      },
      female: {
        rate: female?.rate || 0,
        population: female?.population || 0,
      },
    };
  }, [category, filters, rates.female, rates.male]);

  return rate;
};

export default useRates;
