import { useCallback, useMemo } from "react";
import { useQuery } from "@apollo/client";
import { useCategory, useFilters } from "@/context/CategoryProvider";
import { RACE } from "@/data/Disease";
import { GET_RACE_DATA } from "@/graphql/query";

const useRace = () => {
  const category = useCategory();
  const filters = useFilters();

  const { data } = useQuery(GET_RACE_DATA, {
    variables: {
      dataSet: category,
      race: filters.race || "All Races",
      maleDisease: filters.disease.Male || "All Cancer",
      femaleDisease: filters.disease.Female || "All Cancer",
      year: filters.year,
      state: filters.state,
    },
  });

  const getMaxRate = useCallback(() => {
    let male = 0,
      female = 0;
    data?.getAllCancerRaceData?.femaleData.forEach((element) => {
      female =
        female < element?.weightedAverage ? element?.weightedAverage : female;
    });
    data?.getAllCancerRaceData?.maleData.forEach((element) => {
      male = male < element?.weightedAverage ? element?.weightedAverage : male;
    });
    return { male, female };
  }, [data?.getAllCancerRaceData]);

  const race = useMemo(() => {
    const { male: maxMale, female: maxFemale } = getMaxRate();
    const raceData = { male: {}, female: {} };

    Object.keys(RACE).forEach((race) => {
      const values = data?.getAllCancerRaceData;
      const female = values?.femaleData?.find((value) => value.type === race);
      const male = values?.maleData?.find((value) => value.type === race);
      raceData.male[race] = {
        rate: Math.round(male?.weightedAverage) || 0,
        count: Math.round(male?.totalCount) || 0,
        progress: (100 * male?.weightedAverage) / maxMale,
      };
      raceData.female[race] = {
        rate: Math.round(female?.weightedAverage) || 0,
        count: Math.round(female?.totalCount) || 0,
        progress: (100 * female?.weightedAverage) / maxFemale,
      };
    });
    return raceData;
  }, [data?.getAllCancerRaceData, getMaxRate]);

  return race;
};

export default useRace;
