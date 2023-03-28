import { useMemo } from "react";
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
      age: filters.age,
      race: filters.race,
      maleDisease: filters.disease.Male,
      femaleDisease: filters.disease.Female,
      year: filters.year,
      state: filters.state,
    },
  });

  const race = useMemo(() => {
    const raceData = { male: {}, female: {} };
    Object.keys(RACE).forEach((race) => {
      const values = data?.getRaceData;
      const female = values?.femaleData?.find((value) => value.type === race);
      const male = values?.maleData?.find((value) => value.type === race);
      raceData.male[race] = {
        rate: Math.round(male?.weightedAverage) || 0,
        count: Math.round(male?.totalCount) || 0,
      };
      raceData.female[race] = {
        rate: Math.round(female?.weightedAverage) || 0,
        count: Math.round(female?.totalCount) || 0,
      };
    });
    return raceData;
  }, [data]);

  return race;
};

export default useRace;
