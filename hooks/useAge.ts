import { useMemo } from "react";
import { useQuery } from "@apollo/client";
import { useCategory, useFilters } from "@/context/CategoryProvider";
import { AGE } from "@/data/Disease";
import { GET_AGE_DATA } from "@/graphql/query";

const useAge = () => {
  const category = useCategory();
  const filters = useFilters();

  const { data } = useQuery(GET_AGE_DATA, {
    variables: {
      dataSet: category,
      race: filters.race,
      maleDisease: filters.disease.Male,
      femaleDisease: filters.disease.Female,
      year: filters.year,
      state: filters.state,
    },
  });

  const ages = useMemo(() => {
    const ageData = { male: {}, female: {} };
    const values = data?.getAgeData;
    Object.keys(AGE).forEach((age) => {
      const female = values?.femaleData?.find((value) => value.type === age);
      const male = values?.maleData?.find((value) => value.type === age);
      ageData.male[age] = {
        rate: Math.round(male?.weightedAverage) || 0,
        count: Math.round(male?.totalCount) || 0,
      };
      ageData.female[age] = {
        rate: Math.round(female?.weightedAverage) || 0,
        count: Math.round(female?.totalCount) || 0,
      };
    });
    return ageData;
  }, [data]);

  return ages;
};

export default useAge;
