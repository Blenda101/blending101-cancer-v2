import { useMemo } from "react";
import { useQuery } from "@apollo/client";
import { useCategory, useFilters } from "@/context/CategoryProvider";
import { AGE } from "@/data/Disease";
import { GET_STATE_DATA } from "@/graphql/query";

const useStates = () => {
  const category = useCategory();
  const filters = useFilters();
  const { data } = useQuery(GET_STATE_DATA, {
    variables: {
      dataSet: category,
      age: filters.age,
      race: filters.race,
      maleDisease: filters.disease.Male,
      femaleDisease: filters.disease.Female,
      year: filters.year,
    },
  });

  const state = useMemo(() => {
    if (!data?.getStateDataForCancer) return;
    return {
      male: JSON.parse(data.getStateDataForCancer.maleData),
      female: JSON.parse(data.getStateDataForCancer.femaleData),
    };
  }, [data]);

  return state;
};

export default useStates;
