import { useQuery } from "@apollo/client";
import { useMemo } from "react";
import { useCategory, useFilters } from "@/context/CategoryProvider";
import useDiseases from "./useDiseases";
import { filtersVar } from "@/graphql/store";
import { GET_ALL_RATES } from "@/graphql/query";

const useRates = () => {
  const category = useCategory();
  const { rates } = useDiseases();
  const filters = filtersVar();
  const { data } = useQuery(GET_ALL_RATES, {
    variables: {
      dataSet: category,
      race: filters[category].race || "All Races",
      year: filters[category].year,
      state: filters[category].state,
    },
  });

  console.log(data);

  const rate = useMemo(() => {
    const maleDisease = filters[category].disease.Male;
    // IF CANCER IS SELECTED AS ALL_CANCER THEN FETCH DATA FROM API
    const male =
      maleDisease === ""
        ? {
            rate: Math.round(
              data?.getAllCancerRate?.maleData[0]?.weightedAverage,
            ),
            population: data?.getAllCancerRate?.maleData[0]?.totalCount,
          }
        : rates.male.find((rate) => rate.type === maleDisease);

    const femaleDisease = filters[category].disease.Female;
    const female =
      femaleDisease === ""
        ? {
            rate: Math.round(
              data?.getAllCancerRate?.femaleData[0]?.weightedAverage,
            ),
            population: data?.getAllCancerRate?.femaleData[0]?.totalCount,
          }
        : rates.female.find(
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
  }, [category, data, filters, rates.female, rates.male]);

  return rate;
};

export default useRates;
